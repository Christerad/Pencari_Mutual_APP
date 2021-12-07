import React from 'react';
import Jodoh from './Jodoh';
import firebase from 'firebase';
import {useCollection} from "react-firebase-hooks/firestore";
import {IonList,IonItem,IonText} from '@ionic/react';
import "./JodohList.css" ; 

interface Props {
    doEdit:any
}

const JodohList: React.FC<Props> = ({doEdit}) => {
    const [value, loading, error] = useCollection(
        firebase.firestore().collection("users"),
        {
            snapshotListenOptions:{includeMetadataChanges:true}
        }
    );
    const closeSlidingItems = () => {
        let list = document.getElementById("list");
    };
    const doDelete = (id:any) => {
        firebase.firestore().collection("users").doc(id).delete();
    };
    return (
        <IonList id="list">
            {/* {Array(10).fill(0).map((_,i)=>
                <IonItem>
                    <IonText>
                
                    </IonText>
                </IonItem>
            )} */}
            {value && value.docs.map(doc => {
                return (
                    !loading && (
                        <Jodoh doc={doc}
                        doEdit = {(i: any) => {
                        closeSlidingItems();
                        doEdit(i);
                        }}
                        doDelete = {(i: any) => {
                            closeSlidingItems();
                            doDelete(i);
                        }}
                        key = {doc.id}
                        />
                    )
                );
            })}
        </IonList>
    );
}
export default JodohList;