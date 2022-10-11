export function Musicos(){

    //UN ARREGLO DE OBJETOS ES FORMATO COMUN AL CONSUMIR UN API
    let musicos=[
        {
            nombre:"2D",
            rol:"Vocalista",
            url:"https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/2d.gif?alt=media&token=1cfa3d5d-791b-48f2-be27-e8019985c994",
        },
        {
            nombre:"Noodle",
            rol:"Guitarrista",
            url:"https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/noodle.gif?alt=media&token=6af508b3-02eb-4eb4-8170-a25277ea016b",
        },
        {
            nombre:"Murdoc Niccals",
            rol:"Bajista",
            url:"https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/murdoc.gif?alt=media&token=9dc51968-8fd3-4999-9e0d-7602f325b3e7",
        },
        {
            nombre:"Russel Hobbs",
            rol:"Baterista",
            url:"https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/russel.gif?alt=media&token=8c635582-c9aa-4c74-8045-661670a9588a",
        },
    ]

    let conciertosMemorables=[
        {
            fecha:"22 de marzo de 2001",
            país:"Reino Unido",
            descripción:"Hoy, al menos esta noche, toca abstraerse de este extraño contexto social que nos ha tocado vivir. Mediante un tuneado DeLorean, desde Binaural os invitamos a viajar atrás en el tiempo para asistir al primer concierto oficial de toda la historia de Gorillaz. Esto aconteció un 22 de marzo de 2001 en la sala Scala londinense, y sirvió a sus recién llegados fans para gozar en absoluta primicia de algunos de los imponentes, y un tanto revolucionarios cortes, que iban a acabar vertebrando aquella gema homónima del trip hop dosmilero.",
            foto:"https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/concierto1.jpg?alt=media&token=138ea756-dbc6-4380-9e95-611e8ba45577",
        },
        {
            fecha:"27 de marzo de 2006",
            país:"Inglaterra",
            descripción:"Demon Days Live at the Manchester Opera House es un DVD en vivo de la banda virtual, Gorillaz. Compila las presentaciones del 1 de noviembre al 5 de noviembre del año 2005, en la Manchester Opera House​ donde se interpretó el álbum Demon Days. Fue dirigido por David Barnard y Grant Gee.Casi todos los intérpretes del álbum pudieron participar en el evento, incluyendo a Neneh Cereza, Bootie Brown, Shaun Ryder e Ike Turner. MF HADO y Dennis Hoopper aparecieron a través de vídeo y audio, respectivamente. Coros locales de Mánchester fueron contratados para las presentaciones.Fueron incluidas las canciones: Hong Kong, la cual fue escrita para la War Child y pertenece al álbum Help!: A Day in the Life; y Latin Simone (¿Qué Pasa Contigo?) del álbum Gorillaz, añadido como tributo a la memoria de Ibrahim Ferrer, quién falleció ese año.",
            foto:"https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/concierto2.jpg?alt=media&token=b19de5b9-06c8-413a-a258-e42ba605ac72",
        },
        {
            fecha:"",
            país:"",
            descripción:"",
            foto:"",
        },
        {
            fecha:"",
            país:"",
            descripción:"",
            foto:"",
        },
        {
            fecha:"",
            país:"",
            descripción:"",
            foto:"",
        }
    ]

    //MAPEANDO UN ARREGLO PARA HACER RENDER
    return(
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {
            musicos.map(function(musico){
                    return(
                        <>
                        <div className="col">
                            <div className="card h-100">
                            <img src={musico.url} className="img-fluid w-100 h-100" alt="foto"/>
                            <h1 className="text-center">{musico.nombre}</h1>
                            <h2 className="text-center">{musico.rol}</h2>
                            </div>

                        </div>
                        </>
                    )
                })
            }
            {
            conciertosMemorables.map(function(conciertoMemorable){
                    return(
                        <>
                        <div className="col">
                            <div className="card h-100">
                            <img src={conciertoMemorable.foto} className="img-fluid w-100 h-100" alt="foto"/>
                            <h3 className="text-center">{conciertoMemorable.fecha}</h3>
                            <h2 className="text-center">{conciertoMemorable.país}</h2>
                            <h3 className="text-center">{conciertoMemorable.descripción}</h3>
                            </div>

                        </div>
                        </>
                    )
                })
            }
        </div>
    )

}