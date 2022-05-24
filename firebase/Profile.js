import { firebaseApp } from "../app/config/config";
import "firebase/compat/firestore";
import "firebase/auth";

export const getMatchingProfiles = (keyword) => {};

// setting data can be done using this file and the functions in this file but getting data can be some what complicated so it is better to get in each instance itself.
export const setNewProfile = (userData) => {
  const res = firebaseApp
    .firestore()
    .collection(`profiles/`)
    .add(userData)
    .catch((err) => console.log(err));
  const updateData = { key: "", ...userData };
  res.then((doc) => {
    updateData.key = doc.id;

    const dbReference = firebaseApp
      .firestore()
      .collection(`profiles/`)
      .doc(doc.id);
    dbReference.set(updateData).then(console.log("done_updated"));
  });
};

export const updateTheProfile = (id, updateData) => {
  // i must figure out a way to update the database with the provided userid
  const dbReference = firebaseApp.firestore().collection(`profiles/`).doc(id);
  dbReference.set(updateData);
};
