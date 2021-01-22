import { IonInput, IonButton, IonText, IonToast, IonSpinner } from '@ionic/react';
import React, { useState } from 'react'
import { firebaseLogin } from '../firebaseConfig'
import {useHistory} from  'react-router'
import './Form.css'

interface ContainerProps { changeToRegister: () => void}

const Login: React.FC<ContainerProps> = props => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [toast, setToast] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleLogin = async () => {
    setIsLoading(true)
    const res = await firebaseLogin(email, password)
    console.log(res);
    if (!res) {
      setToast(true)
    } else {
      history.replace( '/home', email.substring(0, email.indexOf('@')))
    }
    setIsLoading(false)
  }
  return (
    <>
      <IonToast
        isOpen={toast}
        onDidDismiss={() => setToast(false)}
        message="Wrong Email or Password >.<"
        position="top"
        duration={500}
        cssClass="toast"
        color="danger"
      />
    <div className="form">
      <IonText className="title">Please Login First</IonText>
      <IonInput     
        className="input"       
        type="email"        
        value={email}            
        placeholder="Your Email"        
        onIonChange={e => setEmail(e.detail.value!)}        
        required={true}
      />              
      <IonInput      
        className="input"  
        type="password"                          
        value={password}        
        placeholder="Your Password"        
        onIonChange={e => setPassword(e.detail.value!)}        
        required={true}        
      />      
        <IonButton className="button" onClick={handleLogin}>
          {isLoading ? <IonSpinner name="bubbles" /> : 'Login'}
        </IonButton>
      <br/>
      
      <IonText>Don't have an account? <IonText
        color="primary"
        onClick={props.changeToRegister}>Register
        </IonText>
      </IonText>
      </div>    
      </>
  );
};

export default Login;
