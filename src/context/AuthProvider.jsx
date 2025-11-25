"use client";

import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile,
  GoogleAuthProvider
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // -------------------------
    // Helper: set ID token in cookie
    // -------------------------
    const setTokenCookie = async (firebaseUser) => {
        const token = await firebaseUser.getIdToken();
        document.cookie = `access-token=${token}; Path=/; Secure; SameSite=Strict`;
    };

    // Create User
    const createUser = async (email, password) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setTokenCookie(userCredential.user);
        setUser(userCredential.user);
        return userCredential;
    };

    // Email-Password Login
    const signInUser = async (email, password) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        await setTokenCookie(userCredential.user);
        setUser(userCredential.user);
        return userCredential;
    };

    // Google Sign In
    const signInGoogleUser = async () => {
        const result = await signInWithPopup(auth, googleProvider);
        await setTokenCookie(result.user);
        setUser(result.user);
        return result;
    };

    // Log Out
    const signOutUser = async () => {
        await signOut(auth);
        document.cookie = "access-token=; Path=/; Max-Age=0"; // remove cookie
        setUser(null);
    };

    // Update User
    const updateUser = ({ displayName, photoURL }) => {
        return updateProfile(auth.currentUser, { displayName, photoURL });
    };

    // Monitor Auth State
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                await setTokenCookie(currentUser); // refresh token
            } else {
                document.cookie = "access-token=; Path=/; Max-Age=0"; // remove cookie if logged out
            }
        });

        return () => unSubscribe(); 
    }, []);

    const authInfo = {
        createUser,
        signInUser,
        signInGoogleUser,
        user,
        updateUser,
        setUser,
        signOutUser,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
