import { get, child } from "firebase/database";
import { dbReference } from "./firebase";

export const getProfileInfo = (userId) => {
  get(child(dbReference, `/profiles/${userId}`))
    .then((snapshot) => {
      return snapshot.val();
    })
    .catch((err) => console.log(err));
  return null;
};

const getMatchingProfiles = (keyword) => {};

const setNewProfile = (userData) => {};

const updatateProfile = (updateData) => {};
