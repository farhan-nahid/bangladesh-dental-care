import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Pages/AuthPage/Firebase/firebase.init';

const useFirebase = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  initializeAuthentication();

  const auth = getAuth();

  // auth providers

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // google signIn

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // gitHub signIn

  const signInUsingGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  // signOut function

  const logOut = () => {
    signOut(auth).then(() => setLoggedInUser(null));
  };

  // observe user state change

  useEffect(() => {
    const unSubscrived = onAuthStateChanged(auth, (user) => {
      user ? setLoggedInUser(user) : setLoggedInUser(null);
    });
    return () => unSubscrived;
  }, [auth]);

  return { loggedInUser, signInUsingGoogle, signInUsingGitHub, logOut };
};

export default useFirebase;
