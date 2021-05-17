import firebase from 'firebase';

export const getFromDatabase = (dbString, callback) => {
  const ref = firebase.database().ref(dbString);
  ref.on('value', snapshot => {
    if(snapshot.val()) {
      callback(snapshot.val());
    }
  });
}

export const saveToDatabase = (dbString, val) => {
  firebase.database().ref(dbString).set(val);
}
