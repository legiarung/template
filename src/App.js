import './App.css';
import Routes from './routes/Routes';
import firebase from 'firebase';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log('user not login')
        return
      }
      const token = await user.getIdToken()
      console.log(token)

    }
    );
    return () => unregisterAuthObserver();
  }, []);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;

