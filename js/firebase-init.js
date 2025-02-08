// firebase-init.js

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",  // Reemplaza con tu propia apiKey
    authDomain: "tu-auth-domain.firebaseapp.com",  // Reemplaza con tu propio dominio
    projectId: "tu-project-id",  // Reemplaza con tu propio projectId
    storageBucket: "tu-storage-bucket.appspot.com",  // Reemplaza con tu propio storageBucket
    messagingSenderId: "tu-sender-id",  // Reemplaza con tu propio senderId
    appId: "tu-app-id",  // Reemplaza con tu propio appId
    measurementId: "tu-measurement-id"  // Reemplaza con tu propio measurementId
  };
  
  // Inicializa Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  // Inicializa Firebase Analytics
  const analytics = firebase.analytics(app);
  
  // Registra un evento de prueba (puedes agregar más eventos según lo necesites)
  analytics.logEvent('page_view');  // Evento cuando la página se carga
  