import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/action";
import "./Profile.css";
import firebase from "firebase/app";
import { RootState } from "../../store";
import { useHistory } from "react-router";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {})
      .catch((err) => console.log(err));
    dispatch(setUser(""));
  }

  function update() {
    history.push("/update");
  }

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>PROFILE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <section className="profile-section">
          <IonImg src={user.profilePic}></IonImg>
           <h2>Name: {user.name}</h2>
           <h3>Email: {user.email}</h3>
          <h2>Birthdate: {user.birthdate}</h2>
          <IonButton color="tertiary" id="logout-button" onClick={update}>
            Update Profile
          </IonButton>
          <IonButton color="danger" id="logout-button" onClick={logout}>
            Logout
          </IonButton>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
