// Get a RTDB instance
import firebase from "firebase/app";
import "firebase/database";

export const db = firebase
  .initializeApp({
    databaseURL: "https://appvuefirebase-a2333-default-rtdb.firebaseio.com/",
  })
  .database();
