export function Carousel(){
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/gorillaz2.jpg?alt=media&token=5a75b5d8-c398-453d-a8e5-b2c8ccdaa3f3" class="d-block w-100" className="w-100" height="800" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/gorillaz3.jpg?alt=media&token=b8007f8c-09e4-498d-b01a-87366508e9d5" class="d-block w-100" className="w-100" height="800" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/gorillaz.jpg?alt=media&token=387dfbc9-2490-4557-a833-4bf12269f041" class="d-block w-100" className="w-100" height="800" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </>
    )
}