import { firebaseApp } from "../app/config/config";
// importing the firebase app and the firestore get firestore to make a database reference

import { getFirestore } from "firebase/firestore";
export const dbReference = getFirestore(firebaseApp);
