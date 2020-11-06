import Head from '@components/Head'
import Button from '@components/Button'
import Navigation from '@components/Navigation'
import styles from '@styles/Register.module.css'

const register = () => {
    return (
        <>
            <Head title="Api Plagio -- Register" />
            <Navigation />
            <div className={styles.background}>
                <div className="container d-flex justify-content-center">
                    <div className={styles.wrapper}>
                        <div className="card mb-3">
                            <div className="card-header bg-transparent">
                                <strong>Registrarse</strong>
                            </div>

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
                        </div>
                    </div>
                </div>

                <div className="container d-flex justify-content-center">
                    <div className="text-center">
                        <p><a href='#' className={styles.link}>Términos y condiciones</a> <a href='#' className={styles.link}>Política de privacidad</a> <a href='#' className={styles.link}>Monitor</a></p>
                        <p className={styles.font}>© 2020 - 2021 Plagio SAC</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default register
