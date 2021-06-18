import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_PROJECT_ID + ".firebaseapp.com",
    databaseURL: "https://" + process.env.REACT_APP_PROJECT_ID + "-default-rtdb.firebaseio.com",
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROJECT_ID + ".appspot.com",
};

const init = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
}

init();

const auth = firebase.auth()
export { firebase, auth };