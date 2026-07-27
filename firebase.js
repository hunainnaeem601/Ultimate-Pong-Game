import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
async function saveScore(playerName, score) {
  try {
    await addDoc(collection(db, "leaderboard"), {
      player: playerName,
      score: score,
      createdAt: Date.now()
    });

    console.log("Score saved.");
  } catch (error) {
    console.error(error);
  }
}
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
import {db} from "./firebase.js";

async function saveScore(name,score){

await addDoc(

collection(db,"scores"),

{

player:name,

score:score,

time:Date.now()

}

);

}
saveScore(playerName,Player.score);
async function loadLeaderboard(){

const q=query(

collection(db,"scores"),

orderBy("score","desc"),

limit(10)

);

const snapshot=await getDocs(q);

snapshot.forEach(doc=>{

console.log(doc.data());

});

}
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3XzqbDpI23r8VSyWi6xksdA4CTsps-kA",
  authDomain: "ultimate-pong-game.firebaseapp.com",
  projectId: "ultimate-pong-game",
  storageBucket: "ultimate-pong-game.firebasestorage.app",
  messagingSenderId: "289743307536",
  appId: "1:289743307536:web:f4beb02e3cfe28b6a71b95",
  measurementId: "G-DYEX4HQ2JN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
async function loadLeaderboard() {

  const q = query(
    collection(db, "leaderboard"),
    orderBy("score", "desc"),
    limit(10)
  );

  const snapshot = await getDocs(q);

  const list = document.getElementById("leaderboardList");

  list.innerHTML = "";

  snapshot.forEach(doc => {

    const data = doc.data();

    list.innerHTML += `
      <li>${data.player} — ${data.score}</li>
    `;

  });

}
let playerName = localStorage.getItem("playerName");

if (!playerName) {

  playerName = prompt("Enter your name");

  if (playerName) {
    localStorage.setItem("playerName", playerName);
  } else {
    playerName = "Guest";
  }
  rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    match /{document=**} {
      allow read, write: if true;
    }

  }
}

}
saveScore(playerName, Player.score);

loadLeaderboard();
