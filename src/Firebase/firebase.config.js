import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCC8wAC3Ggjcj9iGZY8ecg4pybpSUoqZe8",
  authDomain: "dragon-news-4994d.firebaseapp.com",
  projectId: "dragon-news-4994d",
  storageBucket: "dragon-news-4994d.firebasestorage.app",
  messagingSenderId: "494662748927",
  appId: "1:494662748927:web:4c835441bda3a127485aca",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
