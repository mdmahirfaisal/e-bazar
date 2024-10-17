// initializeFirebase.ts

import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import firebaseConfig from './Firebase.config';

const initializeFirebase = (): FirebaseApp | void => {
    console.log(firebaseConfig)
    console.log(window)
  // Initialize Firebase
  const app: FirebaseApp = initializeApp(firebaseConfig);

    const analytics: Analytics = getAnalytics(app);
    return app;
};

export default initializeFirebase;