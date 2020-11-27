import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBeSKNltZYOyUdsc8XsfLiAi3A0SuYOHZc",
  authDomain: "messenger-clone-b1e36.firebaseapp.com",
  databaseURL: "https://messenger-clone-b1e36.firebaseio.com",
  projectId: "messenger-clone-b1e36",
  storageBucket: "messenger-clone-b1e36.appspot.com",
  messagingSenderId: "180060666085",
  appId: "1:180060666085:web:fde6ca7a38ea39d7c13c0c",
  measurementId: "G-VQCRZLSRMG",
});

const db = firebaseApp.firestore();

export default db;
