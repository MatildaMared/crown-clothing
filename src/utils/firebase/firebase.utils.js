import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCZU8q4m3QBDzM6Y5gvRh4o6aJucPFqWxw",
	authDomain: "crown-clothing-db-faaab.firebaseapp.com",
	projectId: "crown-clothing-db-faaab",
	storageBucket: "crown-clothing-db-faaab.appspot.com",
	messagingSenderId: "372126053688",
	appId: "1:372126053688:web:1e13352f6fd13a06a4bdcd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());
};
