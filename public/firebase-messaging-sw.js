import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: "AIzaSyB_fjyr_abd1-Sa9aBFsMKk6E-a54W-qfs",
  authDomain: "virus-d442a.firebaseapp.com",
  projectId: "virus-d442a",
  storageBucket: "virus-d442a.appspot.com",
  messagingSenderId: "48862829300",
  appId: "1:48862829300:web:73fdf37df647471e99dca1",
  measurementId: "G-1Y0ERTQSBD"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);

onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  Window.self.registration.showNotification(notificationTitle,
    notificationOptions);
});