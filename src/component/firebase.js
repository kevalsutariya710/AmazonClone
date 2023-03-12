import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
//     "enter firebase code"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
