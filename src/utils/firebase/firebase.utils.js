import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((obj) => {
		const docRef = doc(collectionRef, obj.title.toLowerCase());
		batch.set(docRef, obj);
	});

	await batch.commit();
	console.log("Done!");
};

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);
	const querySnapshot = await getDocs(q);

	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation
) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	// if user data does not exist
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (err) {
			console.log("There was an error creating the user...", err);
		}
	}

	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) {
		return;
	}

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) {
		return;
	}

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
	return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
