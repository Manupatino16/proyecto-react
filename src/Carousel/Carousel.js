export function Carousel(){
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/gorillaz1.jpg?alt=media&token=5da1a0f0-dbdf-4939-aa68-e2f873b777cc" class="d-block w-100" className="w-100" height="800" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/gorillazzz.jpg?alt=media&token=46e99209-5911-444a-9113-3a67a2a76c77" class="d-block w-100" className="w-100" height="800" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/react-proyecto-8c9f3.appspot.com/o/gorillaz3.jpg?alt=media&token=4397df2d-21a4-4fed-9b0d-d898c11256f2" class="d-block w-100" className="w-100" height="800" alt="..."/>
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