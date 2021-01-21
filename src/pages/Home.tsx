import { IonPage, IonToolbar, IonButton, IonImg, IonText} from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {

  return (
    <IonPage>
          <IonToolbar className="ion-justify-content-end">
              <IonButton
                  className="logoutButton"
                  color="danger"
                  slot="end"
                  size="small">Logout</IonButton>
          </IonToolbar>
          <IonText className="welcomeText">Welcome, kupo!!</IonText>
          <IonImg
              className="moogleImg"
              src="https://i.pinimg.com/originals/87/2a/e1/872ae1f4a33bffc9cc26f03dcbd9864d.gif"
          />
    </IonPage>
  );
};

export default Home;
