import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBQtpQUqegxarKCnc4xDC9maVlqxu_aafE",
      authDomain: "kurayami-playground.firebaseapp.com",
      databaseURL: "https://kurayami-playground.firebaseio.com",
      projectId: "kurayami-playground",
      storageBucket: "kurayami-playground.appspot.com",
      messagingSenderId: "753525014146",
      appId: "1:753525014146:web:d7ae896dc5fae79495be9b",
      measurementId: "G-6WYLBEZ6KY"
    }
  )
}

export default firebase
