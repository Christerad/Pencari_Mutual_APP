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
import "./UpdateProfile.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setUser } from "../../store/action";
import swal from "sweetalert2";
import { RootState } from "../../store";

const auth = firebase.auth();
const firestore = firebase.firestore();

const UpdateProfile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const [name, setName] = useState(user.name);
  const [birthdate, setBirthdate] = useState(user.birthdate);
  const dispatch = useDispatch();
  const history = useHistory();

  async function update() {
    if (user) {
      const userRef = firestore.collection("users").doc(user.email);
      const doc = await userRef.get();
      const data = doc.data();
      if (data) {
        data.name = name;
        data.birthdate = birthdate;
        userRef.set(data);
        dispatch(setUser(data));
        swal.fire(`Congratulation!`, `Update succeed`, `success`);
        history.push("/");
      }
    }
  }

  function back() {
    history.push("/");
  }

  return (
    <IonPage>
      <IonContent>
        <section className="update-section">
          <IonItem lines="none">
            <IonTitle class="title-update">Update Profile</IonTitle>
          </IonItem>
          <IonItem lines="none">
            <IonInput
              value={user.name}
              onIonInput={(e: any) => setName(e.target.value)}
              id="update-name"
              type="email"
              placeholder="Update your name"
            ></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonInput
              value={user.birthdate}
              onIonInput={(e: any) => setBirthdate(e.target.value)}
              id="update-birthdate"
              type="date"
              placeholder="Update your birthdate"
            ></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonButton onClick={update} class="button">
              Save The Update
            </IonButton>
          </IonItem>
          <IonItem lines="none">
            <IonButton color="danger" onClick={back} class="button">
              Back To Profile
            </IonButton>
          </IonItem>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default UpdateProfile;
