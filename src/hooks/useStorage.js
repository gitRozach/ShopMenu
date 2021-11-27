import { useEffect, useState } from "react";
import { firebaseStorage, firebaseFirestore } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const useStorage = (collectionName) => {
    const [storedItems, setStoredItems] = useState(null);

    const fetchTest = () => {
        firebaseFirestore.collection(collectionName).onSnapshot((snap) => {
            snap.forEach((doc) => {
                if (doc.id === "VhVdI6H9ThUownUvpNRP") {
                    setStoredItems(doc.data());
                    console.log("Document data:", doc.data());
                }
            });
        });
    }

    const fetchDocument = (documentName) => {
        var docRef = firebaseFirestore.collection(collectionName).doc(documentName);

        docRef.get().then((doc) => {
            if (doc.exists) {
                setStoredItems(doc.data());
                console.log("Document data:", storedItems);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    } 

    useEffect(() => {
        fetchTest();
    }, []);

    return [firebaseStorage, firebaseFirestore, storedItems];
}

export default useStorage;