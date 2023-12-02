
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic=useAxiosPublic()

    // update use profile 
    const updateUserProfile=(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }

    // create user 
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login 
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // google login 
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // github login 
    const githubLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    // logout 
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    
useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            console.log('Auth state changed:', currentUser);
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {

                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false)
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
                setLoading(false)
            }
            
           
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    const authInformation = {
        user,
        loading,
        googleLogin,
        githubLogin,
        createUser,
        login,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;