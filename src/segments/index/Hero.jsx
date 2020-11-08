import Button from '@components/Button'
import styles from '@styles/index.module.css'

export default function Hero() {
    return (
        <section className={styles.gradient}>
            <div className="p-5 text-center d-flex flex-column justify-content-center">
                <h1 className={styles.font}>Api de plagios de documentos</h1>
                <h4 className={styles.fontp}>Funciona con distintos lenguajes de programacion y frameworks</h4>
                <h4 className={styles.fontp}>Cors habilitado para hacer consultas desde front-end</h4>
                <div className="mt-5">
                    <Button color="black">Comienza gratis</Button>
                </div>
            </div>
        </section>
    )
}