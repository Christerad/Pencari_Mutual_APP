import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, } from "react-router";
import { setUser } from "../../store/action";
import swal from "sweetalert2";
const bcrypt = require("bcryptjs");

const auth = firebase.auth();
const firestore = firebase.firestore();

const Login: React.FC = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  async function login() {
    const userRef = firestore.collection("users").doc(email);
    const doc = await userRef.get();
    if (!doc.exists) {
      swal.fire(`Invalid email/password`);
    } else {
      const data = doc.data();
      if (data) {
        if (bcrypt.compareSync(password, data.password)) {
          dispatch(
            setUser({
              email: data.email,
              name: data.name,
              birthdate: data.birthdate,
              profilePic: data.profilePic,
            })
          );
          history.push("/CariJodoh");
        } else {
          swal.fire(`Invalid email/password`);
        }
      }
    }
    //(document.getElementById("input-email") as HTMLInputElement).value = "";
    //(document.getElementById("input-password") as HTMLInputElement).value = "";
  }

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((data) => {
      if (data.additionalUserInfo?.isNewUser) {
        const userRef = firestore.collection("users");
        const password = bcrypt.hashSync(data.user?.uid, 10);
        const email = data.user?.email || undefined;
        userRef.doc(email).set({
          email,
          password,
          profilePic: data.user?.photoURL,
          name: data.user?.displayName,
        });
        dispatch(
          setUser({
            name: data.user?.displayName,
            email: data.user?.email,
            profilePic: data.user?.photoURL,
          })
        );
        history.push("/CariJodoh");
      } else {
        const email = data.user?.email || undefined;
        const userRef = firestore.collection("users");
        const doc = userRef.doc(email).get();
        const user = doc.then((data) => {
          dispatch(setUser(data.data()));
          history.push("/CariJodoh");
        });
      }
    });
  }

  return (
    <IonPage>
      <IonContent>
        <section className="login-section">
          <IonItem lines="full">
            <IonTitle class="title">Pencari Mutual</IonTitle>
          </IonItem>
          <IonItem lines="none">
            <IonLabel class="sub-title"> Sign in to continue!</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonInput
              onIonInput={(e: any) => setEmail(e.target.value)}
              id="login-email"
              type="email"
              placeholder="Input email address"
            ></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonInput
              onIonInput={(e: any) => setPassword(e.target.value)}
              id="login-password"
              type="password"
              placeholder="Input password"
            ></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonButton className="button" onClick={login} class="button">
              Login
            </IonButton>
          </IonItem>
          <IonItem lines="none">
            <IonButton
              className="button"
              color="tertiary"
              onClick={signInWithGoogle}
            >
              Connect With Google
            </IonButton>
          </IonItem>
          <IonItem lines="none">
            <IonLabel class="to-register">
              Don't have an account? <a href="/register">Register Here</a>
            </IonLabel>
          </IonItem>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Login;
