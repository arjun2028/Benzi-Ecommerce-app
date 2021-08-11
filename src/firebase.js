import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCqV52mBpR9142pOhhPFVorQhB7Z8OtlU4",
  authDomain: "benze-ecommerce.firebaseapp.com",
  projectId: "benze-ecommerce",
  storageBucket: "benze-ecommerce.appspot.com",
  messagingSenderId: "166882437836",
  appId: "1:166882437836:web:7f0e37ef085daf5dc43069",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
