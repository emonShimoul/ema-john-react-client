import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* steps for authentication

----------------------------
Step 1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. enable auth method

----------------------------
Step 2: Setup Component
1. Create Login Component
2. Create Register Component
3. Create route for Login and Register

----------------------------
Step 3: Set Auth System
1. Setup sign in method
2. Setup sign out method
3. User state
4. Set a special observer
5. Return necessary methods and states from useFirebase

----------------------------
Step 4: Create Auth Context Hook (useAuth)
1. Create a auth context
2. Create context provider
3. Set context provider context value
4. Use auth provider
5. Create useAuth hook

----------------------------
Step 5: Create Private Route
1. Create private route
2. Set private route

----------------------------
Step 6: Redirect After Login
1. After login redirect user to their desired destination

*/