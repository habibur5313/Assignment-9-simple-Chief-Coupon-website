import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)


const SignInEmailAndPassword = (email,password) => {
return signInWithEmailAndPassword(auth,email,password)
}

const SignUpEmailAndPassword = (email,password) => {
                    return createUserWithEmailAndPassword(auth,email,password)
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
                    handleSignOut
}
                    return (
                                        <AuthContext.Provider value={AuthInfo}>
                                                            {children}
                                        </AuthContext.Provider>
                    );
};

export default AuthProvider;