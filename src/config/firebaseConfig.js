import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAvE8yZMbjt6Y799fAHFOOJ-WhjdwGfK6A",
  authDomain: "vuejs-shopping-cart.firebaseapp.com",
  databaseURL: "https://vuejs-shopping-cart.firebaseio.com/"
}

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
