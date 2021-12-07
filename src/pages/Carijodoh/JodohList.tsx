import React from 'react';
import Jodoh from './Jodoh';
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

const JodohList: React.FC<Props> = ({doEdit}) => {
    const user = useSelector((state: RootState) => state.user);
    const [value, loading, error] = useCollection(
        firebase.firestore().collection("users"),
        {
            snapshotListenOptions:{includeMetadataChanges:true}
        }
    );
    const closeSlidingItems = () => {
        let list = document.getElementById("list");
    };
    const doAddGebet = async (id: string) => {

        console.log (id);
        //firebase.frestore().collection("users").doc(id).delete();
        const userRef = firebase.firestore().collection("users").where('email','==',id);
        const doc = await userRef.get();
        doc.forEach(async doc => {
            const email=doc.data().email;
            const profilepic=doc.data().profilePic
            const name=doc.data().name;
            const Username=user.email;
            const exist1=  await firebase.firestore().collection("Gebets")
                .where('email', '==', id)
                .where('Username', '==', Username).get() ;      

                // exist1.forEach(doc => {
                //     console.log('hello :')
                //     console.log(doc.id, '=>', doc.data());
                //   });  
            if (exist1.empty) 
                {
                    //firebase.firestore().collection("Gebets").doc(id).set({id,email,profilepic,name,Username})
                    firebase.firestore().collection("Gebets").add({id,email,profilepic,name,Username})
                }
            else {
                swal.fire(`Jodoh Already Added`);
            } 

                    
            }
            );
        
        //const data= doc.data();
        //console.log(data);

       
        //firebase.firestore().collection("Gebets").doc(id).set({ doc.data().name, profilePic });
        
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
                        doAddGebet = {(i: any) => {
                            closeSlidingItems();
                            doAddGebet(i);
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