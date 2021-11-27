import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React from 'react';

const Cari_Jodoh: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Cari Jodoh</IonTitle>
      </IonToolbar>
    </IonHeader>
   <IonContent className="ion-padding"></IonContent>
  </IonPage>
  );
};

export default Cari_Jodoh;
