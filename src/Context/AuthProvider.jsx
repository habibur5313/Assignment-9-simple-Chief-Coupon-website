import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)

const googleProvider = new GoogleAuthProvider();

const SignInEmailAndPassword = (email,password) => {
return signInWithEmailAndPassword(auth,email,password)
}

const SignUpEmailAndPassword = (email,password) => {
                    return createUserWithEmailAndPassword(auth,email,password)
}

const SignInGoogle = () => {
                   return signInWithPopup(auth,googleProvider)
}

const handleSignOut = () => {
                    signOut(auth)
}

useEffect(() => {
                    const unSubscribe = onAuthStateChanged(auth,currentUser => {
                                        setUser(currentUser);
                                        
                    })
                    return () => {
                                        unSubscribe()
                    }
                                        
                    
},[])
const AuthInfo = {
                    user,
                    setUser,
                    SignInEmailAndPassword,
                    SignUpEmailAndPassword,
                    handleSignOut,
                    SignInGoogle
}
                    return (
                                        <AuthContext.Provider value={AuthInfo}>
                                                            {children}
                                        </AuthContext.Provider>
                    );
};

export default AuthProvider;