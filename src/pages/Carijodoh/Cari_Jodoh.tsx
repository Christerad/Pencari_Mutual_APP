import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonTabs,IonRouterOutlet,IonTabBar,IonTabButton,IonIcon,IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { logIn,heartCircle,personOutline } from "ionicons/icons";
import React from 'react';

const Cari_Jodoh: React.FC = () => {
  return (
    <IonPage>
    <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        {/* <Route path="/home" component={Home} exact={true} />
        <Route path="/Cari_Jodoh" component={Cari_Jodoh} />
        <Route path="/Profil" component={Profil} />

        <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
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
        <IonTabButton href="/update" tab="Profil">
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
