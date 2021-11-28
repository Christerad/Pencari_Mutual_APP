import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonTabs,IonRouterOutlet,IonTabBar,IonTabButton,IonIcon,IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { logIn,heartCircle,personOutline } from "ionicons/icons";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, } from "react-router";
import React from 'react';
import Profile from '../Profile/Profile';
import UpdateProfile from '../UpdateProfile/UpdateProfile';
import { Redirect, Route } from 'react-router-dom';

const Cari_Jodoh: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <IonPage>
    <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/profile">
            {user ? <Profile /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/update">
         {user ? <UpdateProfile /> : <Redirect to="/login" />}
        <Route exact path="/CariJodoh">
           {user ? <Cari_Jodoh /> : <Redirect to="/login" />}
        </Route>
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton href="/home" tab="home">
          <IonIcon icon= {logIn}></IonIcon>
          <IonLabel>Login/Register</IonLabel>
        </IonTabButton>
        <IonTabButton href="/Cari_jodoh" tab="Cari_Jodoh">
        <IonIcon icon= {heartCircle}></IonIcon>
          <IonLabel>Cari Jodoh</IonLabel>
        </IonTabButton>
        <IonTabButton href="/profile" tab="Profile">
        <IonIcon icon= {personOutline}></IonIcon>
          <IonLabel>Profil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
    </IonReactRouter>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Cari Jodoh</IonTitle>
      </IonToolbar>
    </IonHeader>
   <IonContent className="ion-padding">

     
   </IonContent>
  </IonPage>
  );
};

export default Cari_Jodoh;
