import React from 'react';
import {IonItem, IonLabel, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonIcon, IonImg, IonAvatar, IonContent, IonList, IonPage, IonHeader, IonToolbar, IonButton, IonMenuButton, IonTitle, IonThumbnail} from '@ionic/react';
import {document, heart, trash} from 'ionicons/icons';
import './Jodoh.css' ; 
interface Props {
    doEdit:any,
    doAddGebet:any,
    doc:any
}

const Jodoh: React.FC<Props> = ({doEdit,doAddGebet,doc}) => {
    let data = doc.data();

    return (
        <IonItemSliding id="item100">
            <IonItem href="#" class="item-custom">
            <IonThumbnail class= "img-profile">
                    <img src={data.profilePic}/>
                    </IonThumbnail>
                <IonLabel >
                    <IonText className="item-sub-title">
                        <div>
                           <h3> Nama: {data.name}</h3>
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                          <h3> Email: {data.email}</h3>
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                        <h3>Tanggal Lahir: {data.birthdate} </h3>
                        </div>
                    </IonText>
                    {/* <IonAvatar src={data.profilePic}>
                    </IonAvatar> */}

                </IonLabel>
            </IonItem>
            <IonItemOptions>
                {/* <IonItemOption onClick={()=>{
                    doEdit(doc.id);
                    }}>
                    <IonIcon slot="icon-only" icon={heart}></IonIcon>
                </IonItemOption> */}

                <IonItemOption onClick= {() => doAddGebet(doc.id)}>
                    <IonIcon slot="icon-only" icon={heart}>
                    </IonIcon>
                </IonItemOption>


            </IonItemOptions>

        </IonItemSliding>
        
    )
}
export default Jodoh;