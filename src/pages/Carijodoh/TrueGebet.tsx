import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, 
  IonCard, IonTitle, IonToolbar, IonCardHeader, IonCardContent, IonButton, IonButtons, IonMenuButton, IonList } from '@ionic/react';
import GebetList from './GebetList';
import './TrueJodoh.css'; 
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";


const TrueGebet: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const [current, setCurrent] = useState(null);

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Gebetan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
        <IonCard>
          <GebetList doEdit={setCurrent}/>
        </IonCard>
        </IonList>
      </IonContent>
  
    </IonPage>
  );
};

export default TrueGebet;
