import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Register.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setUser } from "../../store/action";
import swal from "sweetalert2";
const profilePic = "https://image.flaticon.com/icons/png/512/1177/1177568.png";
const bcrypt = require("bcryptjs");

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBOkpGmYEhzvH2WEVtc0ZN5A15iTDSjPMg",
    authDomain: "pencari-mutual.firebaseapp.com",
    projectId: "pencari-mutual",
    storageBucket: "pencari-mutual.appspot.com",
    messagingSenderId: "143095555281",
    appId: "1:143095555281:web:6104f111e09270ea53d1f0",
    measurementId: "G-CF723V5FEL"
  });
} else {
  firebase.app(); // kalau udah ada, pakai yang ini
}

const auth = firebase.auth();
const firestore = firebase.firestore();

const Register: React.FC = () => {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [name,SetName] = useState();
  const [birthdate,SetBirthdate]= useState();

  const dispatch = useDispatch();
  const history = useHistory();

  async function signUp() {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) {
      swal.fire(`email cannot empty`);
    } else if (!re.test(String(email).toLowerCase())) {
      swal.fire(`invalid email format`);
    } else if (!password) {
      swal.fire(`password required`);
    } else if (!name) {
      swal.fire(`name required`);
    } else if (!birthdate) {
      swal.fire(`birthdate required`);
    } else if (password !== repeatPassword) {
      swal.fire(`repeat password not same`);
    } else {
      const userRef = firestore.collection("users").doc(email);
      const doc = await userRef.get();
      if (doc.exists) {
        swal.fire(`Email already registered`);
      } else {
        const userRef = firestore.collection("users");
        password = bcrypt.hashSync(password, 10);
        userRef.doc(email).set({ email, password, profilePic ,name,birthdate});
        swal.fire(`Congratulation!`, `Sign up succeed`, `success`);
        history.push("/login");
      }
    }
    (document.getElementById("input-email") as HTMLInputElement).value = "";
    (document.getElementById("input-password") as HTMLInputElement).value = "";
    (
      document.getElementById("input-repeat-password") as HTMLInputElement
    ).value = "";
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
        history.push("/");
      } else {
        const email = data.user?.email || undefined;
        const userRef = firestore.collection("users");
        const doc = userRef.doc(email).get();
        const user = doc.then((data) => {
          dispatch(setUser(data.data()));
          history.push("/");
        });
      }
    });
  }

  return (
    <IonPage>
      <IonContent>
        <section className="register-section">
          <IonItem class="content" lines="full">
            <IonTitle class="title">Create Account,</IonTitle>
          </IonItem>
          <IonItem lines="none">
            <IonLabel class="sub-title"> Sign up to get started!</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonInput
              onIonInput={(e: any) => setEmail(e.target.value)}
              id="input-email"
              type="email"
              placeholder="Input email address"
            ></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonInput
              onIonInput={(e: any) => SetName(e.target.value)}
              id="input-name"
              type="text"
              placeholder="Input name"
            ></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonInput
              onIonInput={(e: any) => SetBirthdate(e.target.value)}
              id="input-dob"
              type="date"
              placeholder="Input Date of Birth"
            ></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonInput
              onIonInput={(e: any) => setPassword(e.target.value)}
              id="input-password"
              type="password"
              placeholder="Input password"
            ></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonInput
              onIonInput={(e: any) => setRepeatPassword(e.target.value)}
              id="input-repeat-password"
              type="password"
              placeholder="Repeat password"
            ></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonButton
              className="button-register"
              onClick={signUp}
              class="button"
            >
              Sign Up
            </IonButton>
          </IonItem>
          <IonItem lines="none">
            <IonButton
              className="button-register"
              color="tertiary"
              onClick={signInWithGoogle}
            >
              Connect With Google
            </IonButton>
          </IonItem>
          <IonItem lines="none">
            <IonLabel class="to-login">
              Already have account? <a href="/login">Login Here</a>
            </IonLabel>
          </IonItem>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Register;
