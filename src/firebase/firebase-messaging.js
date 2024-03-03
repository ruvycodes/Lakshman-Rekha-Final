import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from "firebase/messaging";

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console. 
const firebaseConfig = {
  apiKey: "AIzaSyB_fjyr_abd1-Sa9aBFsMKk6E-a54W-qfs",
  authDomain: "virus-d442a.firebaseapp.com",
  projectId: "virus-d442a",
  storageBucket: "virus-d442a.appspot.com",
  messagingSenderId: "48862829300",
  appId: "1:48862829300:web:73fdf37df647471e99dca1",
  measurementId: "G-1Y0ERTQSBD"
};

initializeApp(firebaseConfig);

const messaging = getMessaging();


export const requestForToken = () => {
    return getToken(messaging, { vapidKey: 'BLCn8ogJNVSFOYNsPjjZBakZtctIkzGD2olNC_RozFW-u5i68eqhOOZ5v9dnseOGTmB5nLB4yvPtq2y4XDX1zJk' })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };

  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });