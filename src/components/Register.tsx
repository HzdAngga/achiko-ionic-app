import { IonInput, IonButton, IonText } from '@ionic/react';
import React, { useState } from 'react'
import './Form.css'

interface ContainerProps { changeToLogin: () => void}

const Register: React.FC<ContainerProps> = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    

  const handleRegister = () => {
    console.log('register');
  }
    return (
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
      <IonButton className="button" onClick={handleRegister}>Register</IonButton>
      <br/>
      
      <IonText>Already had an account? <IonText
        color="primary"
        onClick={props.changeToLogin}>Login
        </IonText>
      </IonText>
            </div>   
  );
};

export default Register;
