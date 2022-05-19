import { getDatabase, ref } from "firebase/database";

export const dbReference = ref(getDatabase());
