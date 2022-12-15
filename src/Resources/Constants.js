import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

export const apiKey = "2d9ba3dbee7a84ff74b5824c062f46af" 
export const squareAvatarUrl = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblogs.studentlife.utoronto.ca%2Flifeatuoft%2Ffiles%2F2015%2F02%2FFullSizeRender.jpg&f=1&nofb=1&ipt=3a516ba1a4b9ac15fac2920d58bcd5d78ae9375fa98305b6e43676f5f61f775b&ipo=images"
export const netflixLogoUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffarm6.staticflickr.com%2F5821%2F20639706793_8c038faa4a_o.png&f=1&nofb=1&ipt=fe588082fd8200398dfb2ee4d4c7720e59aa441361e293bc2002af2ab0dc7033&ipo=images"
export const requetsUrls = {
    trending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    netflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,    
    action: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    comedy: `/discover/movie?api_key=${apiKey}&with_genres=35`,
    horrer: `/discover/movie?api_key=${apiKey}&with_genres=27`,
    romance: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
}
export const imagePrefix = "https://image.tmdb.org/t/p/original"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDWCKZwSBi_Qp4U0u3D2tKrcIU290IrDE",
  authDomain: "defaultproject-c023e.firebaseapp.com",
  databaseURL: "https://defaultproject-c023e-default-rtdb.firebaseio.com",
  projectId: "defaultproject-c023e",
  storageBucket: "defaultproject-c023e.appspot.com",
  messagingSenderId: "147977670881",
  appId: "1:147977670881:web:fe1532718095f374bbe7a0",
  measurementId: "G-VY1DMS0BKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);