import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBtXM6Cm5E-0h-93BoBBJe58a1pfM3Ag3M",
    authDomain: "mywebdev-31edb.firebaseapp.com",
    databaseURL: "https://mywebdev-31edb.firebaseio.com",
    projectId: "mywebdev-31edb",
    storageBucket: "",
    messagingSenderId: "254261533660",
    appId: "1:254261533660:web:c63a523d9c734230"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = firestore.doc(`/users/${user.uid}`);

    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const {displayName, email} = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });

        } catch (error) {
            console.log("error while storing user data");
        }
    }
    
    return userRef;
};


export default firebase;