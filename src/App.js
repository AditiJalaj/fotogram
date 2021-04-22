import React from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm'
import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'
import {useState,useEffect} from 'react'
import {fire} from './firebase/config'
import Login from './components/Login'
import { auth } from './firebase/config';

function App() {
  const [user,setUser]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [emailError,setEmailError]=useState('')
  const [passwordError,setPasswordError]=useState('')
  const [hasAccount,setHasAccount]=useState(false)
  const clearInputs=()=>{
    setEmail('')
    setPasswordError('')
  }

  const clearErrors=()=>{
    setEmailError('')
    setPasswordError('')
  }

  const [selectedImg, setSelectedImg]=useState(null)


  const handleLogin=()=>{
    clearErrors();

    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message)
          break;
      }
    })
  }

  const handleSignUp=()=>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err=>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message)
          break;
      }
    })
  }

  const handleLogOut=()=>{
    fire.auth().signOut();
  }

  const authListener=()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        clearInputs();
        setUser(user)
      }
      else{
        setUser("")
      }
    });
  };

  useEffect(()=>{
    authListener();
  },[])

    return (
    <div className="App">
   {
     user? (
      <div>
      <Title handleLogOut={handleLogOut}/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
     {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
     </div>

      ):
     (
      <Login email={email} setEmail={setEmail} 
      password={password} setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      />
     )
   }
    
     
 
    </div>
  );
}

export default App;
