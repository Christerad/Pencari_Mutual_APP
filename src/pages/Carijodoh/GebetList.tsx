import React from 'react';
import Gebet from './Gebet';
import firebase from 'firebase';
import {useCollection} from "react-firebase-hooks/firestore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {IonList,IonItem,IonText} from '@ionic/react';
import "./JodohList.css" ; 
import swal from "sweetalert2";

interface Props {
    doEdit:any
}

const GebetList: React.FC<Props> = ({doEdit}) => {
    const user = useSelector((state: RootState) => state.user);
    const [value, loading, error] = useCollection(
        firebase.firestore().collection("Gebets").where('Username', '==', user.email),
        {
            snapshotListenOptions:{includeMetadataChanges:true}
        }
    );
    const closeSlidingItems = () => {
        let list = document.getElementById("list");
    };
    const doDelete = async (id: string) => {

        console.log (id);
        //firebase.frestore().collection("users").doc(id).delete();
        const userRef = firebase.firestore().collection("Gebets").doc(id).delete();
    };
    return (
        <IonList id="list">
            {value && value.docs.map(doc => {
                return (
                    !loading && (
                        <Gebet doc={doc}
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
export default GebetList;