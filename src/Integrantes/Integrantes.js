import './Integrantes.css'
import 'animate.css';
import WOW from 'wowjs';
import {useEffect} from 'react';

export function Integrantes (){

    useEffect(()=>{
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    
    return(
        <>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/integrante1.jpg?alt=media&token=d495a9d8-6565-4143-970e-7abb9e0eefd7" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInLeft wow'>
                    <h2>Damon Albarn</h2>
                    <h3>Musico</h3>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                 Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInRight wow'>
                    <h2>Jamie Hewlett</h2>
                    <h3>Historietista</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/integrante2.jpg?alt=media&token=38322854-4064-4d73-ab00-af214d628f62" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                     Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/2d.png?alt=media&token=a494ae51-327e-4872-8f9a-4e2bce1c86d4" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInLeft wow'>
                    <h2>2D</h2>
                    <h3>Vocalista</h3>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                            Stuart Harold Pot es un personaje ficticio británico y vocalista principal de la banda virtual, Gorillaz. Fue creado por Damon Albarn y Jamie Hewlett. De carácter amable pero muy torpe, inocente y distraído.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInRight wow'>
                    <h2>Noodle</h2>
                    <h3>Guitarrista</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/noodle.jpg?alt=media&token=f1e4b278-3409-4d5b-99eb-432a6745c436" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                Noodle es un personaje femenino ficticio y guitarrista de la banda virtual actualmente tiene 31 años Gorillaz. Fue creada por Jamie Hewlett y Damon Albarn. Llegó a la banda siendo una niña muy pequeña sin recordar nada de su pasado, y obtuvo el puesto por ser una excelente guitarrista.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/Murdoc.webp?alt=media&token=ab375278-f0d7-475b-b948-84e286b356ff" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInLeft wow'>
                    <h2>Murdoc Niccals</h2>
                    <h3>Bajista</h3>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                            Murdoc Niccals es un personaje ficticio, bajista de la banda virtual Gorillaz. Fue creado por Jamie Hewlett y Damon Albarn
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInRight wow'>
                    <h2>Russel Hobbs</h2>
                    <h3>Baterista</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/russel.jpg?alt=media&token=c5050e19-793d-4321-baab-06c7dc7dc051" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                Russel Hobbs es un músico ficticio estadounidense y miembro de la banda virtual Gorillaz. Expresado por Remi Kabaka Jr. Fue creado por Damon Albarn y Jamie Hewlett. 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
    

    
}