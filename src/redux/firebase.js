import firebase from 'firebase'
// Required for side-effects
import 'firebase/firestore' // eslint-disable-line

let config
if (process.env.NODE_ENV === 'development') {
  config = {
    apiKey: 'AIzaSyBRO1gSjSzeqxnNHSOj7RJxiOg--M9BcGY',
    authDomain: 'ideatwitter-95e0d.firebaseapp.com',
    databaseURL: 'https://ideatwitter-95e0d.firebaseio.com',
    projectId: 'ideatwitter-95e0d',
    storageBucket: 'ideatwitter-95e0d.appspot.com',
    messagingSenderId: '29390856035'
  }
}

if (process.env.NODE_ENV === 'production') {
  config = require('./firebase-production-config')
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const firestore = firebase.firestore()
export const auth = firebase.auth()

// Configure FirebaseUI.
export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccess: () => false
  }
}
