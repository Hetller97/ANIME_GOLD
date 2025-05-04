const firebaseConfig = {
    apiKey: "AIzaSyD5h5LAp9bVY9Xrx0yF8PaXih4841vSgBQ",
    authDomain: "workermanager999.firebaseapp.com",
    databaseURL: "https://workermanager999-default-rtdb.firebaseio.com",  // تأكد من إضافة databaseURL
    projectId: "workermanager999",
    storageBucket: "workermanager999.appspot.com",
    messagingSenderId: "961550697494",
    appId: "1:961550697494:web:4339c2bfc5c874496de137",
    measurementId: "G-99GTSST8VT"
  };
  
  // تهيئة Firebase
  firebase.initializeApp(firebaseConfig);
  
  // الاتصال بـ Realtime Database
  const db = firebase.database();  // استخدم Realtime Database إذا كنت تحتاج إليه
  