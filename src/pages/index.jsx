import Head from '@components/Head'
import styles from '@styles/Home.module.css'
import Navigation from '@components/Navigation'

import { faPhoneSquareAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
      <div>
        <Head title="Api Plagio -- index" />
        <Navigation />
        <div className={styles.gradient}>
          <div className="d-flex flex-column justify-content-center text-center p-5">
           
            <h1 className={styles.font}>Api de plagios de documentos</h1>
            <h4 className={styles.fontp}>Funciona con distintos lenguajes de programacion y frameworks</h4>
            <h4 className={styles.fontp}>Cors habilitado para hacer consultas desde front-end</h4>
            <div className="mt-5">
            <button className="btn btn-primary">Comienza gratis</button>
            </div>
            </div>
            
          </div>
      
        <div className="container text-center d-flex justify-content-center flex-column backgroundcolor">
        <h3 className={styles.fontw}>Servicio de almacenamiento y deteccion de plagios</h3>
        <h5 className={styles.fontpw}>Acceso a todos los tipos de consulta en un mismo servicio</h5>
        <h5 className={styles.fontpw}>Una sola cuenta para múltiples dispositivos sin restricciones</h5>
        <div className={styles.sideright}>
          <img src="/image1.png" width="400px" className={styles.image}/>
          <div className={styles.siderightp}>
            <p className={styles.fontws}>Repositorio de documentos</p>
            <p>Servicio de repositorio de documentos en nuestros 
              servidores</p>

            <p className={styles.fontws}>Consulta de plagio</p>
            <p>Servicio analisis de plagio de un documento con su propio repositorio alojado en nuestros servidores</p>
          </div>
        </div>
        
        </div>

        <div className={styles.backgroundone}>
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
          <img src="/image2.png" width="600px"/>
          </div>
          </div>
        </div>

        <div className="container text-center d-flex justify-content-center flex-column backgroundcolor">
        <h3 className={styles.fontw}>Plan de precios simplificado</h3>
        <h5 className={styles.fontpw}>Elige el plan que más se adecúe a tus metas</h5>
        <h5 className={styles.fontpw}>Emitimos factura electrónica a nombre de su empresa</h5>
        <h5 className={styles.fontpw}>Aceptamos múltiples medios de pago y ofrecemos activación automática</h5>
        <h5 className={styles.fontpw}>Todos los precios incluyen IGV</h5>

        <div className={styles.cards}>
        <div className="card mb-3 mr-5" id={styles.cardid}>
          <div className="card-body">
             <h5 className="card-title">Gratis</h5>
             <div className="card-text text-center" className={styles.displaycenter}>
                <div className={styles.textoinline}>s/<p className="display-3">0</p>/mes</div>
                <p className="btn btn-primary">Gratis durante 30 dias</p>
                <p><strong>200</strong> consultas</p>
                <p>Aplicación multiplataforma</p>
                <p>Cifrado HTTPS</p>
                <p>Cifrado HTTPS</p>                
               </div>               
             </div>          
             <div className="card-footer bg-transparent">
               <button className="btn btn-success">Prueba gratis</button>
             </div>
        </div>
        <div className="card mb-3 mr-5" id={styles.cardid}>
          <div className="card-body">
             <h5 className="card-title">Basico</h5>
             <div className="card-text text-center" className={styles.displaycenter}>
                <div className={styles.textoinline}>s/<p className="display-3">15</p>/mes</div>
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
             <div className="card-footer bg-transparent">
               <button className="btn btn-success">INICIAR SESIÓN</button>
             </div>
        </div>
        <div className="card mb-3 mr-5" id={styles.cardid}>
          <div className="card-body">
             <h5 className="card-title">Empresa</h5>
             <div className="card-text text-center" className={styles.displaycenter}>
                <div className={styles.textoinline}>s/<p className="display-3">25</p>/mes</div>
                <p className="btn btn-primary">Pago semestral de S/ 125</p>
                <p>
                  <strong>400</strong> 40,000 consultas / mes
                </p>
                <p>
                  Acceso completo
                </p>
                <p>
                  Log de consultas
                </p>
                <p>
                  Aplicación multiplataforma
                </p>              
                <p>99% Uptime</p>
                <p>Cifrado HTTPS</p>
                <p>Soporte por correo</p>
               </div>               
             </div>          
             <div className="card-footer bg-transparent">
               <button className="btn btn-success">INICIAR SESIÓN</button>
             </div>
        </div>
       
        </div>
        </div>
        <div className={styles.backgroundone}>
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
          
        </div>
        <div className="bg-dark text-center pt-2">
          <div className={styles.footer} >
          <h5 className="text-white">
          Términos y condiciones Política de privacidad Monitor 
          </h5>
          <p className="text-white">© 2020 - 2021 Plagio SAC</p>
        </div>
        </div>
      </div>
  )
}
