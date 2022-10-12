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
            descripción:"Mediante un tuneado DeLorean, desde Binaural os invitamos a viajar atrás en el tiempo para asistir al primer concierto oficial de toda la historia de Gorillaz. Esto aconteció un 22 de marzo de 2001 en la sala Scala londinense, y sirvió a sus recién llegados fans para gozar en absoluta primicia de algunos de los imponentes, y un tanto revolucionarios cortes, que iban a acabar vertebrando aquella gema homónima del trip hop dosmilero.",
            foto:"https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/concierto1.jpg?alt=media&token=bbce3431-21bf-4e39-89de-cd621a7adfb7",
        },
        {
            fecha:"27 de marzo de 2006",
            país:"Inglaterra",
            descripción:"Demon Days Live at the Manchester Opera House es un DVD en vivo de la banda virtual, Gorillaz. Compila las presentaciones del 1 de noviembre al 5 de noviembre del año 2005, en la Manchester Opera House​ donde se interpretó el álbum Demon Days. Fue dirigido por David Barnard y Grant Gee.Casi todos los intérpretes del álbum pudieron participar en el evento, incluyendo a Neneh Cereza, Bootie Brown, Shaun Ryder e Ike Turner.",
            foto:"https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/concierto2.jpg?alt=media&token=b19de5b9-06c8-413a-a258-e42ba605ac72",
        },
        {
            fecha:"3 de octubre de 2010",
            país:"Canadá",
            descripción:"El Escape to Plastic Beach Tour fue una gira de conciertos de la banda virtual británica de rock alternativo Gorillaz . La gira fue en apoyo de su tercer álbum de estudio Plastic Beach . En particular, fue la primera gira mundial de la banda en su década de historia. Durante la gira, Damon Albarn grabó The Fall , descrito por Albarn como un diario de su experiencia durante la etapa estadounidense de la gira.",
            foto:"https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/concierto3.jpg?alt=media&token=ea9bef3a-1997-4cc6-9e7e-bd2834c38f8e",
        },
        {
            fecha:"24 de Octubre de 2018",
            país:"México",
            descripción:"Inmediatamente después de su nuevo álbum, Gorillaz ha anunciado que traerá The Now Now Tour a América del Norte este otoño, que culminará con el debut en los Estados Unidos del Festival Demon Dayz de Gorillaz, descrito por The Guardian como el apocalipsis alegre... y el festival carnavalesco. de grandes actuaciones”. Demon Dayz LA estará compuesto por invitados especiales y colaboradores del círculo privado y extendido de amigos de Gorillaz.",
            foto:"https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/concierto4.webp?alt=media&token=51736820-60e8-4206-9e28-706e13628b0d",
        },
        {
            fecha:"12 de diciembre de 2020",
            país:"Australia",
            descripción:"Song Machine Tour fue una breve gira de conciertos en vivo de Gorillaz. Comenzó con las presentaciones en línea de Song Machine Live el 12 y 13 de diciembre de 2020. La gira es en apoyo de su séptimo álbum, Song Machine, Season One: Strange Timez. A diferencia de Song Machine Live, el resto de conciertos fue presencial. La mayoría de los espectáculos se cancelaron o se trasladaron a Gorillaz World Tour 2022 debido a las limitaciones de la pandemia de COVID-19.",
            foto:"https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/concierto5.webp?alt=media&token=5f7372b2-d27d-4505-b1bf-eb38662ab817",
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