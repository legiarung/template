import './App.css';
import Routes from './routes/Routes';
// import firebase from 'firebase';
// import { useEffect } from 'react';
// import { firebaseConnect } from './firebaseConnection'

// const config = {
//   apiKey: 'AIzaSyB9w42aIB9iTCBY9Ze0N18L3rZR1IqdIRQ',
//   authDomain: 'fir-tech-new.firebaseapp.com'
// };
// firebase.initializeApp(config);

function App() {
  // useEffect(() => {
  //   const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
  //     if (!user) {
  //       // console.log('user is not defind')
  //       return
  //     }
  //     // console.log(user.displayName)
  //     const token = await user.getIdToken()
  //     // console.log(token)

  //   }
  //   );
  //   return () => unregisterAuthObserver();
  // }, []);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;

