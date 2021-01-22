import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAd30wCrb4igQytcGlasOVtUcudacMzL-c",
    authDomain: "achiko-ionic-app.firebaseapp.com",
    projectId: "achiko-ionic-app",
    storageBucket: "achiko-ionic-app.appspot.com",
    messagingSenderId: "622459843488",
    appId: "1:622459843488:web:8db7fe6ec95628cb01eac5",
    measurementId: "G-WMQKD04MC5"
}

firebase.initializeApp(config)

export async function firebaseLogin(email: string, password: string) {
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(res);
        return true
    } catch (err) {
        return false
    }
    
}

export async function firebaseRegister(email: string, password: string) {
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res);
        return "success"
    } catch (err) {
        return err.message
    }
    
}

export function checkStatus() {
    return new Promise((resolve, reject) => {
        const check = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                resolve(user)
            } else {
                resolve(null)
            }
            check()
        })
    })
}

export function logout() {
    return firebase.auth().signOut()
}
