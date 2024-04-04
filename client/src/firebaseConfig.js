import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "inventory-management-3344f",
  storageBucket: "inventory-management-3344f.appspot.com",
  messagingSenderId: "200443279865",
  appId: "1:200443279865:web:91a4c17da9c0042ce76528",
  measurementId: "G-CFJ6N6LSKS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };