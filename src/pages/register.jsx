import Head from '@components/Head'
import Button from '@components/Button'
import Navigation from '@components/Navigation'
import Background from '@segments/access/Background'
import styles from '@styles/access.module.css'

const register = () => {
    return (
        <>
            <Head title="Api Plagio -- Register" />
            <Navigation />
            
            <Background title="Registrarse">
                <div className="card-body text-dark">
                    <form>
                        <div className="card-text">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className="form-control" id="nombre"  placeholder="ingresa tu nombre"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">Enviaremos un correo electronico para verificar tu cuenta.</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contrasenia">Contraseña</label>
                                <input type="password" className="form-control" id="contrasenia" aria-describedby="contraseniaHelp" placeholder="ingresa tu contraseña"/>
                                <small id="contraseniaHelp" className="form-text text-muted">Asegúrese de que tenga al menos 8 caracteres, incluido un número y una letra minúscula.</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contraseniados">Confirmar contraseña</label>
                                <input type="password" className="form-control" id="contraseniados" placeholder="repite tu contraseña"/>                            
                            </div>
                        </div>
                        <Button block color="blue">Registrarse</Button>
                    </form>
                    <br></br>
                    <div>Al hacer clic en "Registrarse", 
                        <a href="#" className={styles.link}>acepta nuestros Términos y condiciones de Servicio</a> y 
                        <a href="#" className={styles.link}> Política de Privacidad</a>.
                    </div>
                </div>  
            </Background>
        </>
    )
}

export default register
