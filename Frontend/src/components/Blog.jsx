import React from 'react'
import { Card, Container, img } from 'react-bootstrap'
import DoceConsejos from "../assets/DoceConsejos.PNG";
import "./Blog.css"

const Blog = () => {
    return (
        <Container id="blog-container">
        <div>
          <h2 id="titulo-principal" className="titulo">Nuestro Blog Saludable</h2>
          <img src={DoceConsejos} alt="DoceConsejos" class="center" height={450}
          width={1300}/>;
        </div>
    
        <Card>
          <h1>Cómo almacenar las frutas y verduras</h1>
          <div>
            <div>
              <h6>Posted in Saludable by Tu Tienda Cercana.com</h6>
              <b-card-group deck>
                <b-card
                  img-src="https://i.ibb.co/TwgYcmw/12-Consejos.png"
                  alt="12-Consejos"
                >
                  <b-card-text>
                    En estos tiempos, conservar adecuadamente los alimentos es
                    importante para evitar enfermedades, intoxicaciones, evitar el
                    desperdicio de comida y ahorrar dinero. En La Vaquita,
                    conversamos con un grupo de Ingenieros en Alimentos, quienes nos
                    comparten estos 12 consejos para preservar las frutas, verduras
                    y carnes de la forma adecuada.
                  </b-card-text>
                </b-card>
                <br />
    
                <b-card
                  img-src="https://i.ibb.co/KjZcd6h/Imagen1.png"
                  alt="Imagen1"
                  img-left
                  class="mb-3"
                >
                  <b-card-text>
                    <h6>Tips para almacenar alimentos correctamente:</h6>
                    <li>
                      Lava y desinfecta muy bien los alimentos perecederos como
                      frutas y vegetales, usando 500 ml de agua potable + 125 ml de
                      vinagre. Este te ayudará a eliminar las bacterias y cualquier
                      otro contaminante, debido a su grado de acidez. Si no tienes
                      vinagre, puedes reemplazarlo por limón. Debes remojar frutas y
                      verduras durante 10 minutos.
                    </li>
                    <li>
                      Cuando estés comprando tus productos, revisa muy bien las
                      fechas de vencimiento de los alimentos, elige los que tengan
                      fechas de vencimiento más lejanas.
                    </li>
                    <li>
                      Cuando vayas a preparar tus comidas, procura gastar primero
                      los alimentos que están más pronto a vencer.
                    </li>
                    <li>
                      Compra alimentos enlatados y en conservas, ya que tienen mayor
                      vida útil, y pueden ser utilizados para aquellos posibles
                      momentos en los cuales no podamos salir a los supermercados.
                    </li>
                    <li>
                      Para evitar ocasionar contaminación cruzada en tu refrigerador
                      o nevera, usa recipientes plásticos para guardar tus carnes.
                      Nunca pongas en un mismo recipiente carne de res, con carne de
                      cerdo y/o carnes de aves; todo debe estar separado.
                    </li>
                  </b-card-text>
                </b-card>
              </b-card-group>
            </div>
            <div class="mt-4">
              <br />
              <br />
              <div>
                <h4>Contaminación cruzada</h4>
                <p>
                  la contaminación cruzada, se da cuando dos alimentos de diferente
                  naturaleza se contaminan, esto sucede al tener en una misma parte
                  o recipiente carnes frescas con carnes cocidas. También puede ser
                  ocasionarse cuando cortas las verduras con el mismo cuchillo con
                  el cual cortaste la carne, sin haberlo lavado y desinfectado
                  previamente. Cada alimento tiene microorganismos diferentes que se
                  transmiten de uno a otro.
                  <br />
                  En el caso del almacenamiento en la nevera se recomienda separar
                  alimentos crudos o frescos de los alimentos cocidos. También es
                  importante separar la carne de cerdo de la de res para evitar la
                  contaminación cruzada, aunque son carnes, las dos tienen
                  microbiología diferente.
                </p>
                <li>
                  Para alargar la vida útil de la carne de res, puedes usar el
                  método de salado, y así te durará más. Recuerda que para personas
                  hipertensas y con otras afectaciones, no se recomienda el consumo
                  de alimentos con alto contenido de sal.
                </li>
              </div>
    
              <b-card
                img-src="https://i.ibb.co/2NFFLbJ/Imagen2.png"
                alt="Imagen2"
                img-alt="Card image"
              >
                <b-card-text>
                  <li>
                    Compra frutas frescas, despúlpalas, guárdalas en recipientes
                    plásticos o de vidrio que estén muy limpios y congela para mayor
                    conservación.
                  </li>
                  <li>
                    Si consumes huevos, procura lavarlos y desinfectarlos con agua
                    potable y vinagre, antes de su preparación y consumo.
                  </li>
                  <li>
                    Cocina los alimentos por encima de los 75°C, para reducir la
                    carga microbiana.
                  </li>
                  <li>
                    ¡Que no te falten los granos! los frijoles, las lentejas y los
                    garbanzos son gran fuente de proteína vegetal y pueden sustituir
                    las carnes (res, pollo y cerdo) en momentos de escasez.
                  </li>
                  <li>
                    Lava los utensilios como cuchillos y tablas de picar, cada vez
                    que vayas a cortar, pelar, picar alimentos diferentes.
                  </li>
                  <li>
                    No prepares más alimentos de lo que normalmente consumes, para
                    no generar desperdicios. Es muy importante que laves tus manos
                    frecuentemente durante la preparación de los alimentos.
                  </li>
                </b-card-text>
              </b-card>
              <br />
              <br />
    
              <div>
                <b-img
                  center
                  src="https://i.ibb.co/8MJs830/imagen3.jpg"
                  alt="imagen3"
                >
                </b-img>
              </div>
            </div>
          </div>
        </Card>
        </Container>
    )
}

export default Blog
