import Image from '@components/Image'
import styles from '@styles/index.module.css'

export default function Features () {
    return (
        <>
            <section className="container text-center d-flex justify-content-center flex-column backgroundcolor">
                <h3 className={styles.fontw}>Servicio de almacenamiento y deteccion de plagios</h3>
                <h5 className={styles.fontpw}>Acceso a todos los tipos de consulta en un mismo servicio</h5>
                <h5 className={styles.fontpw}>Una sola cuenta para múltiples dispositivos sin restricciones</h5>
                <div className={styles.sideright}>
                    <Image name="searching" size="400" />
                    <div className={styles.siderightp}>
                        <p className={styles.fontws}>Repositorio de documentos</p>
                        <p>Servicio de repositorio de documentos en nuestros servidores</p>
                        <p className={styles.fontws}>Consulta de plagio</p>
                        <p>Servicio analisis de plagio de un documento con su propio repositorio alojado en nuestros servidores</p>
                    </div>
                </div>
            </section>

            <section className={styles.backgroundone}>
                <div className={styles.displaycenter}>
                    <h3>Caracteristicas adicionales</h3>
                    <h5>Nuestro servicio incluye beneficios adicionales y mejores constantes</h5>
                    <br/>
                </div>

                <div className={styles.wrapperdos}>
                    <div className={styles.wrappertres}>
                        <div className={styles.wrappercinco}>
                            <h5>Integración simple</h5>
                            <p>Fácil de integrar con distintos lenguajes de programación y frameworks</p>
                        </div>
                        <br/>

                        <div className={styles.wrappercinco}>
                            <h5>Actualizaciones frecuentes</h5>
                            <p>Actualizaciones frecuentes de nuestro servicio de plagio y opmitizacion del repositorio</p>
                        </div>
                        <br/>

                        <div className={styles.wrappercinco}>
                            <h5>Aplicación multiplataforma gratuita</h5>
                            <p>Aplicación gratuita para PC, Android y iOS, ideal para no programadores y pruebas.</p>
                        </div>
                        <br/>

                        <div className={styles.wrappercinco}>
                            <h5>Documentación</h5>
                            <p>Ofrecemos documentación y código de ejemplo para integrar su sistema o software con nuestra API.</p>
                        </div>
                    </div>

                    <div>
                        <Image name="reading-book" size="600" />
                    </div>
                </div>
            </section>
        </>
    )
}