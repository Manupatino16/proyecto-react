export async function servicioSpotify(){
    const URI="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=US"

    const TOKEN="Bearer BQC4r8v-tjfc4FEwzOnTeyktFfCwLQo6IMmPU43nRFRwkiF0fYB2h89zs_qNOj87beAnICCao7RLd53D1wE3v9IvbgrGq-4_mVphRIWQ4WRhpYiG24Flv_I0OCitrceyhigXqOzfW68MirAjcHibOpG3afNTJctnubGVQnLUaHydzQNFZN4SpxMcQGgXjO91Vk8"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos
}