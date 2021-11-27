import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonLabel,
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
      <IonContent>
        <section className="profile-section">
          <IonImg src={user.profilePic}></IonImg>
          <IonLabel class="label">Name: {user.name}</IonLabel> <br />
          <IonLabel class="label">Email: {user.email}</IonLabel> <br />
          <IonLabel class="label">Birthdate: {user.birthdate}</IonLabel>
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
