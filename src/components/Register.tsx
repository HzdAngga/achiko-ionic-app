import { IonInput, IonButton, IonText, IonToast, IonSpinner } from '@ionic/react';
import React, { useState } from 'react'
import {firebaseRegister} from '../firebaseConfig'
import './Form.css'

interface ContainerProps { changeToLogin: () => void}

const Register: React.FC<ContainerProps> = props => {
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')  
  const [confirmPassword, setConfirmPassword] = useState('') 
  const [message, setMessage] = useState('')  
  const [toast, setToast] = useState(false)
  const [toastColor, setToastColor] = useState('danger')
  const [isLoading, setIsLoading] = useState(false)  

  const handleRegister = async () => {
    setIsLoading(true)
    if (password !== confirmPassword) {
      setToastColor('danger')      
      setMessage(`Confirm password doesn't match >.<`)
    } else {
      const res = await firebaseRegister(email, password)
      if (res !== "success") {
        setToastColor('danger')        
        setMessage(res)
      } else {
        setMessage('Register success :)')
        setToastColor('success')
      }
    }
    setIsLoading(false)
    setToast(true)
  }
  return (
    <>
      <IonToast
        isOpen={toast}
        onDidDismiss={() => setToast(false)}
        message={message}
        position="top"
        duration={800}
        cssClass="toast"
        color={toastColor}
      />
    <div className="form">
      <IonText className="title">Register Here</IonText>
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
      <IonInput      
        className="input"  
        type="password"                          
        value={confirmPassword}        
        placeholder="Confirm Password"        
        onIonChange={e => setConfirmPassword(e.detail.value!)}        
        required={true}        
      />    
        <IonButton className="button" onClick={handleRegister}>
          {isLoading ? <IonSpinner name="bubbles" /> : 'Register'}          
        </IonButton>        
      <br/>
      
      <IonText>Already had an account? <IonText
        color="primary"
        onClick={props.changeToLogin}>Login
        </IonText>
      </IonText>
      </div>   
    </>
  );
};

export default Register;
