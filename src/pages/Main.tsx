import { IonPage } from '@ionic/react';
import React, {useState} from 'react';
import './Main.css';
import Login from '../components/Login'
import Register from '../components/Register'

const Main: React.FC = () => {
    const [form, setForm] = useState('login')
    const changeToRegister = () => {
        setForm('register');
    }
    const changeToLogin = () => {
        setForm('login')
    }
    return (
        <IonPage className="background ion-justify-content-center ion-align-items-center">            
            {form === 'login' ? <Login changeToRegister={changeToRegister} /> :
            <Register changeToLogin={changeToLogin} />
            }
        </IonPage>              
    );    
};

export default Main;
