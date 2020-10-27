import Container from '../components/Container'
import styles from '../styles/Register.module.css'
import Head from 'next/head'
import axios from 'axios';
import { useState } from 'react';
const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm  = async (event)=> {
        event.preventDefault();
    
        axios.post(`http://localhost:1323/auth/login`, {email:email,password:password })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }
    return (
        <>
        <Head>
        <title>Api Plagio -- login</title>
        </Head>
        <Container>
            <div className={styles.background}>
        <div className="container d-flex justify-content-center">
            <div className={styles.wrapper}>
            <div className="card mb-3">
                <div className="card-header bg-transparent "><strong>Iniciar sesión </strong></div>
                    <div className="card-body text-dark">
                        <form onSubmit={submitForm}>
                        <div className="card-text">                        
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter email" 
                            onChange={e=>setEmail(e.target.value)}
                            autoComplete="off"/>                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="contrasenia">Contraseña</label>
                            <input 
                            type="password" 
                            className="form-control" 
                            id="contrasenia" 
                            placeholder="ingresa tu contraseña" 
                            onChange={e=>setPassword(e.target.value)}
                            autoComplete="off"/>                            
                        </div>                        
                        </div>
                        <button className="btn btn-info btn-block">Iniciar sesión</button>
                        </form>
                        <br></br>
                        <div>                            
                            <a href="#" className={styles.link}> ¿Olvidaste tu contraseña?</a>.
                        </div>
                            
                    </div>           
            </div>
            </div>
          
        </div>
        <div className="container d-flex justify-content-center">
            <div className="text-center">
                <p><a href='#' className={styles.link}>Términos y condiciones</a> <a href='#' className={styles.link}>Política de privacidad</a> <a href='#' className={styles.link}>Monitor</a></p>
                <p className={styles.font}>© 2020 - 2021 Plagio SAC</p></div>
        
        </div>
        </div>
        </Container>
        
        </>
    )
}

export default login
