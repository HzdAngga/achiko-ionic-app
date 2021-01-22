import { IonPage } from '@ionic/react';
import React, {useEffect, useState} from 'react';
import './Main.css';
import Login from '../components/Login'
import Register from '../components/Register'
import {checkStatus} from '../firebaseConfig'
import { useHistory } from 'react-router';


const Main: React.FC = () => {
    const history = useHistory()
    const [form, setForm] = useState('login')
    const changeToRegister = () => {
        setForm('register');
    }
    const changeToLogin = () => {
        setForm('login')
    }
    useEffect(() => {
        checkStatus().then(user => {    
            if (user) history.replace('/home')            
        })        
    }, [])
    return (
        <IonPage className="background ion-justify-content-center ion-align-items-center">            
            {form === 'login' ? <Login changeToRegister={changeToRegister} /> :
            <Register changeToLogin={changeToLogin} />
            }
        </IonPage>              
    );    
};

export default Main;
