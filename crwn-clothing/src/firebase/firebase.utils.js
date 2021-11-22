// modules
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
