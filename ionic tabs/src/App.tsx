import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { logIn,heartCircle,personOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Cari_Jodoh from './pages/Cari_Jodoh';
import Profil from './pages/Profil';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/Cari_Jodoh" component={Cari_Jodoh} />
        <Route path="/Profil" component={Profil} />

        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton href="/home" tab="home">
          <IonIcon icon= {logIn}></IonIcon>
          <IonLabel>Login/Register</IonLabel>
        </IonTabButton>
        <IonTabButton href="/Cari_jodoh" tab="Cari_Jodoh">
        <IonIcon icon= {heartCircle}></IonIcon>
          <IonLabel>Cari Jodoh</IonLabel>
        </IonTabButton>
        <IonTabButton href="/Profil" tab="Profil">
        <IonIcon icon= {personOutline}></IonIcon>
          <IonLabel>Profil</IonLabel>
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
