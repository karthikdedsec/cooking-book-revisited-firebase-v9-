import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfhmw8z64-NZcZMQTBIbAJDnwV_NmUTUs",
  authDomain: "cooking-book-site-63329.firebaseapp.com",
  projectId: "cooking-book-site-63329",
  storageBucket: "cooking-book-site-63329.appspot.com",
  messagingSenderId: "510379046363",
  appId: "1:510379046363:web:6f44202a73173febf0e3fe",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
