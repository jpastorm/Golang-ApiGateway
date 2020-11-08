import styles from '@styles/access.module.css'

export default function Background ({ children, title }) {
    return (
        <div className={styles.background}>
            <div className="container d-flex justify-content-center">
                <div className={styles.wrapper}>
                    <div className="card mb-3">
                        <div className="card-header bg-transparent">
                            <strong>{ title }</strong>
                        </div>

                        { children }

                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center">
                <div className="text-center">
                    <p>
                        <a href='#' className={styles.link}>Términos y condiciones</a>
                        <a href='#' className={styles.link}>Política de privacidad</a>
                        <a href='#' className={styles.link}>Monitor</a>
                    </p>
                    <p className={styles.font}>© 2020 - 2021 Plagio SAC</p>
                </div>
            </div>
        </div>
    )
}