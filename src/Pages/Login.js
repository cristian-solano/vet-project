import React from 'react'
import '../Style/login.css'
import logo from '../Images/logo.png'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import getInLogin from '../Services/getInLogin'

const Login = () => {

    const {register, handleSubmit, formState: {errors, isValid}} = useForm()
    const navigate = useNavigate()

      const onSubmit = (res) => {
           getInLogin(res)
           .then(() => {
            navigate("/home")
           })
           .catch((err) => {
            console.log(err)
           })
      }
    
        
    

  return (
    <div className='login-container'>
        <div className='login-content'>
            <div className='login-shadow'></div>
            <div className='login-shadow2'></div>
            <div className='login-image'>
                <img src={logo} alt="logo"/>
            </div>
        </div>
        <div className='login-form-content'>
            <h2>Bienvenido</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
                <div className='login-content-inputs'>
                    <div className='login-inputs'>
                        <input type='email' placeholder='EMAIL' {...register("email", {
                            required: true,
                        })}/>
                    </div>
                    {errors?.email?.type === "required" && <p className='login-error'>Este campo no debe estar vacío</p>}
                    <div className='login-inputs'>
                        <input type='password' placeholder='CONTRASEÑA' {...register("password", {
                            required: true,
                        })}/>
                    </div>
                    {errors?.password?.type === "required" && <p className='login-error'>Este campo no debe estar vacío</p>}
                    <div className='link-forget-password'>
                        <Link to="/">¿Olvidaste tu contraseña?</Link>
                    </div>
                </div>  
                <div className='login-buttons'>
                    <button type="submit">Iniciar sesión</button>
                    <p>Aun no tengo cuenta <Link to="/register"> Registrarse</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login