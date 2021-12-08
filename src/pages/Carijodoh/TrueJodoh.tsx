import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, 
  IonCard, IonTitle, IonToolbar, IonCardHeader, IonCardContent, IonButton, IonButtons, IonMenuButton, IonList } from '@ionic/react';
import JodohList from './JodohList';
import './TrueJodoh.css'; 
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";


const Tab1: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const [current, setCurrent] = useState(null);

  const getEmpty=()=>{
  return ({
    
    title: '',
    content: '',
    date: '',
    location: '',
    picture: '',
    clear:'',
    initialValue:''
  });
}


  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Cari Jodoh</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
        <IonCard>
          <JodohList doEdit={setCurrent}/>
        </IonCard>
        </IonList>
      </IonContent>
  
    </IonPage>
  );
};

export default Tab1;
