import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import router from '../router'
import { bottomAlert } from '@/store/bottomAlert'

const auth = getAuth()
const provider = new GoogleAuthProvider()
const ghProvider = new GithubAuthProvider()

const handleErrors = (error) => {
  let errorMessage = ''
  switch (error.code) {
    case 'auth/invalid-credential':
      errorMessage = 'Invalid credentials'
      break

    case 'auth/wrong-password':
      errorMessage = 'Wrong password'
      break

    default:
      errorMessage = 'Login incorrect'
      break
  }
  bottomAlert.openAsError(errorMessage)
}

export const signInUsingEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    bottomAlert.openAsSuccess('Signed in successfully')
    router.push('/')
  } catch (error) {
    handleErrors(error)
  }
}

export const signInWithGoogle = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
      bottomAlert.openAsSuccess('Signed into Google successfully')
      router.push('/')
    })
    .catch((error) => {
      handleErrors(error)
    })
}

export const signInWithGithub = async () => {
  signInWithPopup(auth, ghProvider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
      bottomAlert.openAsSuccess('Signed into GitHub successfully')
      router.push('/')
    })
    .catch((error) => {
      handleErrors(error)
    })
}

export const createAnAccount = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    const user = userCredential.user

    //TODO: create a user in the firebase database
  } catch (error) {
    handleErrors(error)
  }
}
