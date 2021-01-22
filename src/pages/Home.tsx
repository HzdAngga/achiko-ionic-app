import { IonPage, IonToolbar, IonButton, IonImg, IonText, IonAlert} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { logout } from '../firebaseConfig'
import {checkStatus} from '../firebaseConfig'
import './Home.css';

const Home: React.FC = () => {
  const location = useLocation()
  const username = location.state
  const [showAlert, setShowAlert] = useState(false)
  const history = useHistory()
  const handleLogout = () => {
    logout()
    history.replace('/main')
  }
  useEffect(() => {
    checkStatus().then(user => {
      if (!user) history.replace('/main')
    })
  }, [])
  

  return (
    <IonPage>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        message={'Are you sure wanna logout, kupo?'}
        buttons={[
          {
            text: 'Yes,kupo!!',
            handler: () => handleLogout()
          },
          {
            text: 'Nope',
            role: 'cancel'
          }          
        ]}
      />
          <IonToolbar className="ion-justify-content-end">
              <IonButton
                  className="logoutButton"
                  color="danger"
                  slot="end"
                  size="small"
                  onClick={() => setShowAlert(true)}>Logout</IonButton>
          </IonToolbar>
      <IonText className="welcomeText">Welcome, { username }!!</IonText>
          <IonImg
              className="moogleImg"
              src="https://i.pinimg.com/originals/87/2a/e1/872ae1f4a33bffc9cc26f03dcbd9864d.gif"
              alt="moogle.img"
          />
    </IonPage>
  );
};

export default Home;
