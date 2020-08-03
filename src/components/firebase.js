import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCb3ARVobCtJsOWDg4oc0kk9PAt8rsDf2k",
    authDomain: "myapp-1f071.firebaseapp.com",
    databaseURL: "https://myapp-1f071.firebaseio.com",
    projectId: "myapp-1f071",
    storageBucket: "myapp-1f071.appspot.com",
    messagingSenderId: "44451570669",
    appId: "1:44451570669:web:be68ec3872be5f87c9bde4",
    measurementId: "G-5718RG4D12"
  };

  var fire=firebase.initializeApp(firebaseConfig);

  export default fire;
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};