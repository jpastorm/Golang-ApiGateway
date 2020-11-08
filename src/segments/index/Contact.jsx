import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/index.module.css'

export default function Contact () {
    return (
        <section className={styles.backgroundone}>
            <h2 className={styles.fontc}>Contacto</h2>
            <p className={styles.fontww}> Contáctenos para consultas de integración, planes, facturación y formas de pago </p>
            <p className={styles.fontww}>Horario de atención: lunes a viernes 09:00 a 18:00 horas</p>
            <div className={styles.wrappercuatro}>
                <div className={styles.displaycenter}>
                    <FontAwesomeIcon icon={faPhoneSquareAlt} size={"6x"}></FontAwesomeIcon>
                    <p className={styles.fontcontacto}>Envíenos un email para atender sus dudas o consultas.</p>
                    <p className={styles.fontcontacto}>soporte@plagios.pe</p>
                </div>

                <div className={styles.displaycenter}>
                    <FontAwesomeIcon icon={faEnvelopeSquare} size={"6x"}></FontAwesomeIcon>
                    <p className={styles.fontcontacto}>Llámenos para hablar con un miembro de nuestro equipo.</p>
                    <p className={styles.fontcontacto}>+51970410967</p>
                </div>
            </div>
        </section>
    )
}