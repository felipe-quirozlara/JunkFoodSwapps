// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCw0AciSRMBehP73qqUWuwZ24Kn9zZvFS8",
    authDomain: "junkfood-3b8ab.firebaseapp.com",
    projectId: "junkfood-3b8ab",
    storageBucket: "junkfood-3b8ab.appspot.com",
    messagingSenderId: "597764125844",
    appId: "1:597764125844:web:886673888f2ba4d41ef081",
    measurementId: "G-MG7ZMW0C3P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function data(textS) {
    // Obtener datos de busqueda
    var strSearch = textS;
    // LLevar a lowecase todo
    var strlength = strSearch.length;
    var strFrontCode = strSearch.slice(0, strlength - 1);
    var strEndCode = strSearch.slice(strlength - 1, strSearch.length);

    var startcode = strSearch;
    var endcode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);

    const citiesRef = collection(db, "Comidas");
    // Create a query against the collection.
    const q = query(citiesRef, where("Nombre", '>=', startcode), where("Nombre", '<', endcode));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });

}

export default data;