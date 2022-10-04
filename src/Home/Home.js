import './Home.css'

import {SubMenu} from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js'

export function Home (){

    let descripcionBanda="Gorillaz es una banda virtual inglesa creada en 1998 por Damon Albarn y Jamie Hewlett. La banda está compuesta por cuatro miembros ficticios: 2-D, Noodle, Murdoc Niccals y Russel Hobbs. La mayoría de sus canciones junto con todo su universo ficticio, se presentan a través de vídeos musicales animados, de animación tradicional y animación por computadora, entrevistas y pequeños cortos animados. En la realidad, Albarn es el único miembro permanente de la banda. El productor y ejecutivo Remi Kabaka Jr. empezaría a colaborar con el grupo en 2016 después de proveer por varios años la voz de Russel Hobbs y sería nombrado miembro oficial junto a Albarn y Hewlett en 2019 en el documental de Gorillaz, Gorillaz: Reject False Icons."
    
    return(
        <>

            <div className="banner">

            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">GORILLAZ</h1>
                        <p className="text-center">{descripcionBanda}</p>
                    </div>
                </div>
            </div>
            <div>
                <SubMenu></SubMenu>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )
    

    
}