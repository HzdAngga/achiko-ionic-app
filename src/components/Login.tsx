import { IonInput, IonButton, IonText } from '@ionic/react';
import React, { useState } from 'react'
import './Form.css'

interface ContainerProps { changeToRegister: () => void}

const Login: React.FC<ContainerProps> = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    console.log('login');
  }
  return (
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
      <IonButton className="button" onClick={handleLogin}>Login</IonButton>
      <br/>
      
      <IonText>Don't have an account? <IonText
        color="primary"
        onClick={props.changeToRegister}>Register
        </IonText>
      </IonText>
      </div>    
  );
};

export default Login;
