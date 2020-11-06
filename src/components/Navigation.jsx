import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar sticky-top navbar-light bg-light">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Api plagio</a>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/docs">
                                <a className="nav-link">Documentacion</a>
                            </Link>
                        </li>
                    </ul>

                    <span className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/login">
                                <a className="nav-link">Iniciar sesión</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/register">
                                <a className="nav-link">Registrarse</a>
                            </Link>
                        </li>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
