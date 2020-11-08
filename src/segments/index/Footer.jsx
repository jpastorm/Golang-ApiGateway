import styles from '@styles/index.module.css'

export default function Footer () {
    return (
        <footer className="pt-2 text-center bg-dark">
            <div className={styles.footer} >
                <h5 className="text-white">
                    Términos y condiciones Política de privacidad Monitor 
                </h5>
                <p className="text-white">© 2020 - 2021 Plagio SAC</p>
            </div>
        </footer>
    )
}