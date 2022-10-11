import { servicioSpotify } from "../services/servicioSpotify.js"
import { useState } from "react"

export function Albumes (){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)

    servicioSpotify()
    .then(function(respuesta){
        setCanciones(respuesta.tracks)
    })
    console.log(canciones)
    
    return(
        <>

            <h1>HOLA ME LLAMO ALBUM Y SOY UN COMPONENTE</h1>
        
        </>
    )
    

    
}