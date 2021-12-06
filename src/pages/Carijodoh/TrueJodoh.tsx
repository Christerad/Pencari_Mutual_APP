import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, 
  IonCard, IonTitle, IonToolbar, IonCardHeader, IonCardContent } from '@ionic/react';
import JodohList from './JodohList';


const Tab1: React.FC = () => {

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
      <IonContent>
        <IonCard>
          <JodohList doEdit={setCurrent}/>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
