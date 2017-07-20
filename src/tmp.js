const firebase = require('firebase');

 const config = {
   apiKey: 'AIzaSyCQ7RL6-AStBt3f4YhSLh4el5aQH7HBSzw',
   authDomain: 'whats-occurrin.firebaseapp.com',
   databaseURL: 'https://whats-occurrin.firebaseio.com',
   projectId: 'whats-occurrin',
   storageBucket: 'whats-occurrin.appspot.com',
   messagingSenderId: '104730148110'
 };

firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


   const userList = database.ref('/users');
  userList.on('value', (snapshot) => {
 //   res.redirect(303, snapshot.ref);
    return snapshot.val();
  //  res.status(200).send(snapshot.val());
});

// var userId = firebase.auth().currentUser.uid;
// firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
firebase.database().ref('/users').once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  console.log(username);
  // ...
});