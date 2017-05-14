import * as firebase from 'firebase';
import * as User from './User';

export function getTodosList(key) {
  const ref = getRef();
  return new Promise(function(resolve, reject) {
    ref.once('value').then(function(snapshot) {
      let todosOnServer = [];

      snapshot.forEach(function(childSnapshot) {
        //var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        console.log(childData);
        // ...
        todosOnServer.push(childData);
      });

      resolve(todosOnServer);
    });
  });
}

export function addItemToList(value) {
  const ref = getRef();
  return new Promise(function(resolve, reject) {
    var newItemRef = ref.push();
    newItemRef.set({
      name: value
    });
    resolve();
  });
}

export function getListRef() {
  return getRef();
}

function getRef() {
  let ref;
  try {
    ref = firebase.database().ref(User.getUid() + '/todos/');
  } catch (e) {
    //throw e;
  }
  return ref;
}
