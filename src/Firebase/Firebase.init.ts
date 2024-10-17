// initializeFirebase.ts

import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import firebaseConfig from './Firebase.config';

const initializeFirebase = (): FirebaseApp | void => {
// Initialize Firebase
//   const app: FirebaseApp = initializeApp(firebaseConfig);
     initializeApp(firebaseConfig);
  // Check if window object exists to prevent errors in non-browser environments
//   if (typeof window !== 'undefined') {
//     const analytics: Analytics = getAnalytics(app);
//     return app;
//   }

//   return undefined;
};

export default initializeFirebase;