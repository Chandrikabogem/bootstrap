import React from 'react'
import './Gallery.scss'

const Gallery = () => {
    return (
        <div>
            <div className='galleryContainer'>

                <div className='tc'>


                    <h1 className='au'>Gallery</h1>
                </div>
            </div>


            <div className='text-center my-5'>
                <h2>Take a sneak peek</h2>
                <p className='p'>Asperiores temporibus fuga possimus labore ex porro pariatur sed, nisi dolor, <br /> nobis architecto. Placeat facilis voluptas alias ducimus.</p>
            </div>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 imgfluid" src="https://yevgenysim-turkey.github.io/touche/assets/img/33.jpg" alt="First slide"/>
      <p className='p text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 imgfluid" src="https://yevgenysim-turkey.github.io/touche/assets/img/35.jpg" alt="Second slide"/>
      <p className='p text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 imgfluid" src="https://yevgenysim-turkey.github.io/touche/assets/img/36.jpg" alt="Third slide"/>
      <p className='p text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div className='text-center mt-5'>
                <h2>Our gallery</h2>
                <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            </div>

<div className='container my-5'>
                <div className='row'>
                    <div className='col-6 col-md-4 cn'>
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/11.jpg" className='imgz mb-3' />
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/15.jpg" className='imgz mb-3' />
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/18.jpg" className='imgz mb-3' />
                    </div>
                    <div className='col-6 col-md-4 cn'>

                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/16.jpg" className='imgz1 mb-3' />
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/12.jpg" className='imgz mb-3' />
                    </div>
                    <div className='col-6 col-md-4 cn'>
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/13.jpg" className='imgz mb-3' />
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/14.jpg" className='imgz mb-3' />
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/17.jpg" className='imgz mb-3' />
                    </div>



                </div>

            </div>


            <div className='newscon text-center p-5 mt-5'>
                <h2 className='mb-3 mt-5'>Newsletter</h2>

                <p className='p mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illo <br /> praesentium sequi in cum, beatae maiores quae qui.</p>
                <div className='d-flex justify-content-center mb-5'>
                    <input className='ic2 mr-5' type="text" />
                    <button className='btn bw1 px-3 mt-2'>Reserve Table</button>
                </div>

            </div>

        </div>
    )
}

export default Gallery
