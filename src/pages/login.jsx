import axios from 'axios'
import { useState } from 'react'
import Head from '@components/Head'
import Button from '@components/Button'
import Navigation from '@components/Navigation'
import Background from '@segments/access/Background'
import styles from '@styles/access.module.css'

const login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const submitForm  = async (event) => {
        event.preventDefault()

        axios.post('http://localhost:1323/auth/login', { email, password })
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
    }

    return (
        <>
            <Head title="Api Plagio -- login" />
            <Navigation />

            <Background title="Iniciar sesión">
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
                        <Button block color="blue">Iniciar sesión</Button>
                    </form>
                    <br></br>
                    <div>                            
                        <a href="#" className={styles.link}> ¿Olvidaste tu contraseña?</a>.
                    </div>
                </div>  
            </Background>
        </>
    )
}

export default login
