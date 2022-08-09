import styles from '../styles/Home.module.css'
import Head from 'next/head'
import {app} from '../firebaseConfig'
import { useState ,useEffect} from 'react'
import {getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,GithubAuthProvider, signInWithPopup} from 'firebase/auth'
import { useRouter } from 'next/router'


const Resister = () => {
  const auth = getAuth();
  // console.log(auth)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('')

  const signUp = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
      router.push('/home');
      console.log('회원가입 완료')
    })
  }
  
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((res)=> sessionStorage.setItem('Token', res.user.accessToken))
   
    router.push('/home');
  }
  
  const signUpWithGithub = () => {
    signInWithPopup(auth, githubProvider).then((res)=>sessionStorage.setItem('Token', res.user.accessToken) )
    router.push('/home');
  }

  useEffect(()=>{
    let token = sessionStorage.getItem('Token')

    if(token){
      router.push('/home');
    }
  },[])
  
  return (
    <div>
      <Head>
      <title>Next CRUD AUTH</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1>Resister</h1>

       <input 
       placeholder='email' 
       className={styles.inputBox} 
       onChange={(e)=>setEmail(e.target.value)} 
       value={email}
       type='email'
       />
       <input 
       placeholder='password' 
       className={styles.inputBox} 
       onChange={(e)=>setPassword(e.target.value)} 
       value={password}
       type='password'
       />

       <button className={styles.button} onClick={signUp}>SignUp</button>
        <hr/>
       <button
        className={styles.button}
        onClick={signUpWithGoogle}
       >SignUp with Google</button>
       <hr/>
       <button
        className={styles.button}
        onClick={signUpWithGithub}
       >SignUp with Github</button>
      </main>
    </div>
  )
}

export default Resister