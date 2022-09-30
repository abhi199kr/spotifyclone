import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBJKRKVD_0-isDibS9Gu8OAdQy7aGqzeng",
  authDomain: "spotifylogin-1d56c.firebaseapp.com",
  projectId: "spotifylogin-1d56c",
  storageBucket: "spotifylogin-1d56c.appspot.com",
  messagingSenderId: "697020311667",
  appId: "1:697020311667:web:f18dee984614ee6799e206",
  measurementId: "G-C9GJ39E2BE"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}