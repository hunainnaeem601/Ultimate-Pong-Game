import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
query,
orderBy,
limit,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {

apiKey:"YOUR_API_KEY",

authDomain:"YOUR_AUTH_DOMAIN",

projectId:"YOUR_PROJECT_ID",

storageBucket:"YOUR_BUCKET",

messagingSenderId:"YOUR_SENDER",

appId:"YOUR_APP_ID"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
