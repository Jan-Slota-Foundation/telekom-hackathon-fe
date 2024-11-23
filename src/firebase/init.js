import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { userState } from '@/store/userStore'

export const firebaseConfig = {
  apiKey: 'AIzaSyAEcdfG_ydCdgU16soCJHCTobGJFX9dloc',

  authDomain: 'telekom-hackathon-jsf.firebaseapp.com',

  projectId: 'telekom-hackathon-jsf',

  storageBucket: 'telekom-hackathon-jsf.firebasestorage.app',

  messagingSenderId: '281785502907',

  appId: '1:281785502907:web:1dbe2f43413db45ab72d9e',

  measurementId: 'G-LGFZGETDML'
}
