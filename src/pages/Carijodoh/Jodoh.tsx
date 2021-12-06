import React from 'react';
import {IonItem, IonLabel, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonIcon, IonImg, IonAvatar} from '@ionic/react';
import {document, trash} from 'ionicons/icons';

interface Props {
    doEdit:any,
    doDelete:any,
    doc:any
}

const Jodoh: React.FC<Props> = ({doEdit,doDelete,doc}) => {
    let data = doc.data();

    return (
        <IonItemSliding>
            <IonItem>
                <IonLabel class="ion-text-wrap">
                    <IonText className="item-title">
                            {data.name}
                    </IonText>
                    <IonText className="item-sub-title">
                            {data.email}
                    </IonText>
                    <IonText className="item-sub-title">
                            {data.birthdate}
                    </IonText>
                    {/* <IonAvatar src={data.profilePic}>
                    </IonAvatar> */}
                    <IonImg src={data.profilePic}>
                    </IonImg>
                </IonLabel>
            </IonItem>
            <IonItemOptions>
                <IonItemOption onClick={()=>{
                    doEdit(doc.id);
                    }}>
                    <IonIcon slot="icon-only" icon={document}></IonIcon>
                </IonItemOption>

            </IonItemOptions>

        </IonItemSliding>
    )
}
export default Jodoh;