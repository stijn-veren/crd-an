import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyBo3rNEhw1-DrmHaRgMwoOHjTCiucNbKTg',
  authDomain: 'crwn-db-67060.firebaseapp.com',
  projectId: 'crwn-db-67060',
  storageBucket: 'crwn-db-67060.appspot.com',
  messagingSenderId: '527623088745',
  appId: '1:527623088745:web:2efa4d114751e9b38810f8',
  measurementId: 'G-VGXD7CZMNR',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
