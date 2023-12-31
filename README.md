# ProjectPlan

- Hosted at [https://taskmanager-2772c.web.app/signin](https://taskmanager-2772c.web.app/signin)

## Installing the application

- Clone the repository
```
git clone https://github.com/tarang1998/ProjectPlan.git
```
- Move to the ProjectPlan directory

- Install NPM dependencies 
```
npm install
```

- Add firebase config file in src as config/firebaseConfig
```
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
```


## Technology-Stack 

- React
- Materialize CSS 
- Firebase - (FirebaseAuth, Firestore, Cloud functions)

## References 

- [React, Redux & Firebase App Tutorial](https://www.youtube.com/watch?v=Oi4v5uxTY5o&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=1)