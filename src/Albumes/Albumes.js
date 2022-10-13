import { servicioSpotify } from "../services/servicioSpotify.js"
import { servicioTOKEN } from "../services/servicioTOKEN.js"
import { useState, useEffect } from "react"

export function Albumes (){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)

    //useState para la carga de datos
    const[carga,setCarga]=useState(true)

    //usando el useEffect
    useEffect(function(){
        servicioSpotify()
        .then(function(respuesta){
        console.log(respuesta)
        setCanciones(respuesta.tracks)
        setCarga(false)
        })
        console.log(canciones)
    },[])

    if(carga==true){

        return(
            <>
                <h1>Estoy cargando...</h1>
            </>
        )

    }else{

        return(
            <>
    
                {
                    canciones.map(function(cancion){
                        return(
                            <>
                                 <div className="col mt-5">
                                    <div className="card w-50 h-50 aling-content-center border-5 border-dark">
                                        <img src={cancion.album.images[0].url} className="img-fluid w-25 p-1 h-25" alt="foto"/>
                                        <h1 className="text-left">{cancion.name}</h1>
                                        <audio controls src={cancion.preview_url}></audio>
                                    </div>
                                </div>
                            </>
                        )
                    })
                 }
            
            </>
        )

    }

    

    
   
    

    
}