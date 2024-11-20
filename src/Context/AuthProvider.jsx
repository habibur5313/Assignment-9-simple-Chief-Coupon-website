import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(false)
const [loginEmail,setLoginEmail] = useState('')
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

const Update_information = (name,photo) => {
                    updateProfile(auth.currentUser, {
                                       displayName: name, photoURL: photo
                    })
}

const handleSignOut = () => {
                    signOut(auth)
}

const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
}

useEffect(() => {
                    const unSubscribe = onAuthStateChanged(auth,currentUser => {
                                        setUser(currentUser);
                                        setLoading(true)
                             
                                        
                                        
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
                    SignInGoogle,
                    Update_information,
                    loading,
                    loginEmail,
                    setLoginEmail,
                    resetPassword
}
                    return (
                                        <AuthContext.Provider value={AuthInfo}>
                                                            {children}
                                        </AuthContext.Provider>
                    );
};

export default AuthProvider;