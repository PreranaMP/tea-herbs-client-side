import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


// initializing firebase app
initializeFirebase();

const useFirebase = () => {
 const [user, setUser] = useState({});
 const [isLoading, setIsLoading] = useState(true);
 const [authError, setAuthError] = useState('')

 const auth = getAuth();

 const registerUser = (email, password) => {
  setIsLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    setAuthError('');
   })
   .catch((error) => {
    setAuthError(error.message);
   })
   .finally(() => setIsLoading(false));
 }

 const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    setAuthError('');
   })
   .catch((error) => {
    setAuthError(error.message);
   })
   .finally(() => setIsLoading(false));;
 }

 // observe user state
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    setUser(user);
   } else {
    setUser({})
   }
   setIsLoading(false);
  });
  return () => unsubscribe;
 }, [])

 const logOut = () => {
  setIsLoading(true)
  signOut(auth).then(() => {
   // Sign-out successful.
  }).catch((error) => {
   // An error happened.
  })
   .finally(() => setIsLoading(false));
 }

 return {
  user,
  isLoading,
  authError,
  registerUser,
  loginUser,
  logOut,

 }
}

export default useFirebase;