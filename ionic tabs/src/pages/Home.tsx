import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login/Register</IonTitle>
        </IonToolbar>
      </IonHeader>
     <IonContent className="ion-padding"></IonContent>
    </IonPage>
  );
};

export default Home;
