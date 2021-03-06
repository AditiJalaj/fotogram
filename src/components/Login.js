import React, { useState } from 'react'

const Login=(props)=>{
    const {email,setEmail,password,
        setPassword,handleLogin,handleSignUp,
        hasAccount,setHasAccount, emailError,
        passwordError}=props
    
        const [guestBtnClicked,setguestBtnClicked]=useState(false)

         const handleGuestLogin=()=>{
             setguestBtnClicked(!guestBtnClicked)
             setHasAccount(true)
             setEmail('test@test.com')
             setPassword('Test@1234')
             
         }

     return(
        <section className="login">
        <div className="loginContainer">
        <label>Username</label>
        <input type="text" 
        autoFocus required 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}
        </p>

        <label>Password</label>
        <input type="password" 
        
        required
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>

        <p className="errorMsg">{passwordError}</p>

        <div className="btnContainer">
        {hasAccount ? (
            <>
            <button onClick={handleLogin}>Sign In</button>
            <p>Don't have An Account? <span onClick={()=>
                setHasAccount(!hasAccount)
            }>Sign Up</span></p>
            </>
        ):(
            <>
            <button onClick={handleSignUp}>Sign up</button>
            <p>Have an account?
            <span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span></p>
            </>
        )}
       {!guestBtnClicked &&  <div className="btnContainer">
        <button onClick={handleGuestLogin}>Guest Login</button>
        </div>
        }
        </div>
        </div>

        </section>
    )
}

export default Login