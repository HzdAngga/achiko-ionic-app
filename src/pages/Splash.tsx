import { IonPage, IonSlide, IonSlides, IonImg} from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import './Splash.css';

const Splash: React.FC = () => {
  const history = useHistory()
  const onSwipe = () => {
    history.replace("/main");
  }


  return (
    <IonPage className="ion-justify-content-center ion-align-items-center">
      <IonSlides onIonSlideDrag={onSwipe}>
        <IonSlide>
          <IonImg
            className="logo"            
            src="https://i.pinimg.com/originals/d7/db/87/d7db87347c8752b669c1bb61beee6bf7.png"            
          />
        </IonSlide>
      </IonSlides>
        <h5 className="swipe">{`<<< Swipe to Continue >>>`}</h5>
    </IonPage>
  );
};

export default Splash;
