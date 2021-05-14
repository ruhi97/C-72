import firebase from 'firebase'
require("@firebase/firestore")



const firebaseConfig = {
  apiKey: "AIzaSyDf-EHHFrCHWei8USlFCvDVNk95FH0fdt8",
  authDomain: "bedtime-feb93.firebaseapp.com",
  projectId: "bedtime-feb93",
  storageBucket: "bedtime-feb93.appspot.com",
  messagingSenderId: "402881661500",
  appId: "1:402881661500:web:a2f1666de5bf564ad25139"
};


export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();                                                                                             