// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBlcBQGJQxxkiyfaSsrlBIfU3yh7G2l4Ig",
	authDomain: "cap-mini-project-frontend.firebaseapp.com",
	projectId: "cap-mini-project-frontend",
	storageBucket: "cap-mini-project-frontend.appspot.com",
	messagingSenderId: "685896458492",
	appId: "1:685896458492:web:8c200e9b9069bf4990f779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
