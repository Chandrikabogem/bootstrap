import React from 'react'

const FixedNav = () => {
  return (
    <div className=''>
          <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
                    <div class="container">
                        <div class="collapse navbar-collapse ml-5" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active colors mx-1" aria-current="page" href="aboutus">ABOUT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link colors mx-1" href="menu">MENU</a>
                                </li>
                                <li class="nav-item mx-1">
                                    <a class="nav-link colors" href="reservation">RESERVATION</a>
                                </li>

                            </ul>

                        </div>

                        <a class="navbar-brand fo  mr-5 justify-content-center cafe" href="#">Touché</a>




                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse ml-5 pl-5" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active colors mx-1" aria-current="page" href="news">NEWS & EVENTS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link colors mx-1" href="gallery">GALLERY</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link colors mx-1" href="#">CONTACT</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
      
    </div>
  )
}

export default FixedNav
