import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp ( {
  apiKey: "AIzaSyAU5t5leYXGjkkwRvJao5s_1fUfIVHSnTM",
  authDomain: "netflix-v2-238ed.firebaseapp.com",
  databaseURL: "https://netflix-v2-238ed.firebaseio.com",
  projectId: "netflix-v2-238ed",
  storageBucket: "netflix-v2-238ed.appspot.com",
  messagingSenderId: "606446282427",
  appId: "1:606446282427:web:f137b8189ee257f2c4ab9e",
  measurementId: "G-X62QR1RX28"
});


  // const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };