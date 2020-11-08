import Button from '@components/Button'
import styles from '@styles/index.module.css'

export default function Pricing () {
    return (
        <section className="container text-center d-flex justify-content-center flex-column backgroundcolor">
            <h3 className={styles.fontw}>Plan de precios simplificado</h3>
            <h5 className={styles.fontpw}>Elige el plan que más se adecúe a tus metas</h5>
            <h5 className={styles.fontpw}>Emitimos factura electrónica a nombre de su empresa</h5>
            <h5 className={styles.fontpw}>Aceptamos múltiples medios de pago y ofrecemos activación automática</h5>
            <h5 className={styles.fontpw}>Todos los precios incluyen IGV</h5>

            <div className={styles.cards}>
                <div className="mb-3 mr-5 card" id={styles.cardid}>
                    <div className="card-body">
                        <h5 className="card-title">Gratis</h5>
                        <div className="text-center card-text" className={styles.displaycenter}>
                            <div className={styles.textoinline}>
                                s/<p className="display-3">0</p>/mes
                            </div>
                            <p className="btn btn-primary">Gratis durante 30 dias</p>
                            <p><strong>200</strong> consultas</p>
                            <p>Aplicación multiplataforma</p>
                            <p>Cifrado HTTPS</p>
                            <p>Cifrado HTTPS</p>
                        </div>
                    </div>
                    <div className="bg-transparent card-footer">
                        <Button color="green">Prueba gratis</Button>
                    </div>
                </div>

                <div className="mb-3 mr-5 card" id={styles.cardid}>
                    <div className="card-body">
                        <h5 className="card-title">Basico</h5>
                        <div className="text-center card-text" className={styles.displaycenter}>
                            <div className={styles.textoinline}>
                                s/<p className="display-3">15</p>/mes
                            </div>

                            <p className="btn btn-primary">Pago semestral de S/ 75</p>
                            <p><strong>200</strong>200 consultas / mes</p>
                            <p>Acceso completo</p>
                            <p>Log de consultas</p>
                            <p>Aplicación multiplataforma</p>        
                            <p>99% Uptime</p>        
                            <p>Cifrado HTTPS</p>
                            <p>Soporte por correo</p>
                        </div>               
                    </div>          
                    <div className="bg-transparent card-footer">
                        <Button color="green">INICIAR SESIÓN</Button>
                    </div>
                </div>
                <div className="mb-3 mr-5 card" id={styles.cardid}>
                    <div className="card-body">
                        <h5 className="card-title">Empresa</h5>

                        <div className="text-center card-text" className={styles.displaycenter}>
                            <div className={styles.textoinline}>
                                s/<p className="display-3">25</p>/mes
                            </div>

                            <p className="btn btn-primary">Pago semestral de S/ 125</p>
                            <p><strong>400</strong> 40,000 consultas / mes</p>
                            <p>Acceso completo</p>
                            <p>Log de consultas</p>
                            <p>Aplicación multiplataforma</p>              
                            <p>99% Uptime</p>
                            <p>Cifrado HTTPS</p>
                            <p>Soporte por correo</p>
                        </div>               
                    </div>          
                    <div className="bg-transparent card-footer">
                        <Button color="green">INICIAR SESIÓN</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}