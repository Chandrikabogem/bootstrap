import React from 'react'
import './Techwind.css'
/* import './Experience.css' */
/* import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'; */
/* import Stepper  from 'react-form-stepper'; */

{/* <link href="css/addons-pro/steppers.css" rel="stylesheet">

<link href="css/addons-pro/steppers.min.css" rel="stylesheet">


<script type="text/javascript" src="js/addons-pro/steppers.js"></script>

<script type="text/javascript" src="js/addons-pro/steppers.min.js"></script> */}


const Techwind = () => {
    return (
        <>
            <div className='container-fluid'>
                <nav className="navbar fixed-top bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Fixed top</a>
                    </div>
                </nav>

                <nav className="navbar navbar-expand-lg navbar-light mx-5 fixed-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(110, 97, 143)" className="bi bi-box-seam" viewBox="0 0 16 16">
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                    </svg>
                    TechWind



                    <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link px-3 navhead" href="#">HOME <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link px-3 navhead" href="#">LANDINGS <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 navhead" href="#">PAGES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 navhead" href="#">PORTOFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 navhead" href="#">DOCS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 navhead" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>

                    <div className="justify-content-end disp mx-5">
                        <div className='setcon mx-2 justify-content-center'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                            </svg>
                        </div>
                        <div className='cartcon justify-content-center my-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </div>

                    </div>

                </nav>
                <div className='container techwindcon'>



                    <nav className="navbar navbar-expand-lg navbar-light mx-5 fixed-top">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(110, 97, 143)" className="bi bi-box-seam" viewBox="0 0 16 16">
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                        </svg>
                        TechWind



                        <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link px-3 navhead" href="#">HOME <span className="sr-only"></span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link px-3 navhead" href="#">LANDINGS <span className="sr-only"></span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3 navhead" href="#">PAGES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3 navhead" href="#">PORTOFOLIO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3 navhead" href="#">DOCS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3 navhead" href="#">CONTACT</a>
                                </li>
                            </ul>
                        </div>

                        <div className="justify-content-end disp mx-5">
                            <div className='setcon mx-2 justify-content-center'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                </svg>
                            </div>
                            <div className='cartcon justify-content-center my-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" className="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </div>

                        </div>

                    </nav>




                    <div className='d-flex justify-content-center'>
                        <div className='bgcon justify-content-center'>
                            <img src="https://yoky.io/assets/glo/img_excited_mobile.png" alt="" className='contimg' />
                            {/*      
                           <div className="card bg-dark text-white">
  <img className="card-img" src="https://yoky.io/assets/glo/img_excited_mobile.png" alt="Card image"/>
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div> */}
                        </div>
                    </div>

                    {/* <div className='imgcon justify-content-center'>
                        <img src="https://yoky.io/assets/glo/img_excited_mobile.png" alt="" className='img' />
                    </div> */}
                    <div className='d-flex justify-content-center top:50%'>
                        <div className="card cardcon" style={{ width: "20rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">I'm Professional Web Developer</h5>
                                <h6 className="card-subtitle mb-2 text-muted"></h6>
                                <p className="card-text">Obviously I'm a Web Designer. web developer over 3 years of experience .</p>
                                <button className='btn btn-primary'>Hire Me</button>
                            </div>
                        </div>
                    </div>

                    <div className='namecon'>
                        <p style={{ fontSize: "30px" }}>John <br />Stradfo</p>

                    </div>
                    {/*  <div className='d-flex justify-content-center top:50%'>
                    <div className="card cardcon" style={{ width: "20rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">I'm Professional Web Developer</h5>
                            <h6 className="card-subtitle mb-2 text-muted"></h6>
                            <p className="card-text">Obviously I'm a Web Designer. web developer over 3 years of experience .</p>
                            <button className='btn btn-primary'>Hire Me</button>
                        </div>
                    </div>
                    </div> */}


                    <div className='arrcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                        </svg>
                    </div>
                </div>
                <div className='container'>
                    <div className='row align-items-center justify-content-center ficon'>
                        <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0  iconcontainer py-3 '>

                            <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png" className='amazonimg mx-5' alt="" />
                        </div>
                        <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0  iconcontainer py-3 '>

                            <img src="data:image/png;base64,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" alt="" className='amazonimg mx-5' />
                        </div>


                        <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0  iconcontainer py-3 '>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vX6ZaAuRqZHfExAWF1Nqb6r99KjjC6NgQJU2O9sJ-GSmZ6v3K2iU9TERQyaoKVm3oP0&usqp=CAU" alt="" className='amazonimg mx-5' />
                        </div>
                        <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0  iconcontainer py-3 '>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9H8C_GAmfYY0XP3y_4sJDSTAGKfBe5_BxxA&usqp=CAU" alt="" className='amazonimg mx-5' />
                        </div>
                        <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0  iconcontainer py-3 '>
                            <img src="https://www.citypng.com/public/uploads/preview/-11597191761n5ghafjnrt.png" alt="" className='amazonimg mx-5' />
                        </div>
                        <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0  iconcontainer py-3 '>
                            <img src="https://image.similarpng.com/thumbnail/2020/06/3D-spotify-name-transparent-PNG.png" alt="" className='amazonimg mx-5' />
                        </div>
                    </div>
                </div>
                <div>

                </div>


                <div className="d-flex">
                    <div className='row'>
                        {/*  <div className='col-lg-7  col-md-5 order-1'> */}
                        <div>
                            <img src="https://shreethemes.in/techwind/layouts/assets/images/personal/hero.jpg" alt="" className='aboutimg' />
                            {/*  <div className='justify-content-center'> */}
                            {/*  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg> */}
                            {/* </div> */}
                        </div>
                        {/*  <div className='setcon caretcon justify-content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                        </div> */}




                        {/*  <div className='col-md-5   col-lg-7  order-2 py-5 order-2'> */}
                        <div className='justify-content-center'>
                            <p style={{ color: "blue", fontSize: "20px" }}>About us</p>
                            <h4>Better Design</h4>
                            <h4>Better Experience</h4>
                            <p style={{ color: "rgb(63, 62, 62)" }}>Obviously I'm a Web Designer. web developer over 3 years of experience .</p>
                            <p style={{ color: "rgb(63, 62, 62)" }}>WordPress</p>
                            <div className='ds'>
                                <hr className='hrline' />
                                84%
                            </div>
                            <p style={{ color: "rgb(63, 62, 62)" }}>Javascript</p>
                            <div className='ds'>
                                <hr className='hrline1' />
                                78%
                            </div>
                            <p style={{ color: "rgb(63, 62, 62)" }}>HTML</p>
                            <div className='ds'>
                                <hr className='hrline2' />
                                94%
                            </div>
                        </div>


                    </div>

                </div>

                <div className='servivecon justify-content-center'>
                    <p style={{ color: "blue", fontSize: "20px" }}>SERVICES</p>
                    <h4>What do i offer?</h4>
                    <p style={{ color: "rgb(63, 62, 62)" }}>Obviously I'm a Web Designer. web developer over 3 years of experience .</p>
                </div>


                <div className='skillcon  my-3'>
                    <div className='carddes  px-3'>
                        <div className='uicon justify-content-center my-4'>
                            <img className='imgi' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-ui-marketing-agency-flaticons-lineal-color-flat-icons.png" alt="" />

                        </div>

                        <h5 className='my-3'>UI/UX design</h5>
                        <p style={{ color: "rgb(63, 62, 62)" }} className="my-3">The phrasel sequence of the is now so  <br />the many compaign and grow</p>
                        <p style={{ color: "blue" }}>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></span></p>

                    </div>



                    <div className='carddes mx-3 px-3'>
                        <div className='uicon justify-content-center my-4'>
                            <img className='imgi' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-ui-marketing-agency-flaticons-lineal-color-flat-icons.png" alt="" />

                        </div>

                        <h5 className='my-3'>UI/UX design</h5>
                        <p style={{ color: "rgb(63, 62, 62)" }} className="my-3">The phrasel sequence of the is now so  <br />the many compaign and grow</p>
                        <p style={{ color: "blue" }}>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></span></p>

                    </div>



                    <div className='carddes mx-3 px-3'>
                        <div className='uicon justify-content-center my-4'>
                            <img className='imgi' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-ui-marketing-agency-flaticons-lineal-color-flat-icons.png" alt="" />

                        </div>

                        <h5 className='my-3'>UI/UX design</h5>
                        <p style={{ color: "rgb(63, 62, 62)" }} className="my-3">The phrasel sequence of the is now so  <br />the many compaign and grow</p>
                        <p style={{ color: "blue" }}>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></span></p>

                    </div>
                </div>

                <div className='skillcon2  my-3'>
                    <div className='carddes  px-3'>
                        <div className='uicon justify-content-center my-4'>
                            <img className='imgi' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-ui-marketing-agency-flaticons-lineal-color-flat-icons.png" alt="" />

                        </div>

                        <h5 className='my-3'>UI/UX design</h5>
                        <p style={{ color: "rgb(63, 62, 62)" }} className="my-3">The phrasel sequence of the is now so  <br />the many compaign and grow</p>
                        <p style={{ color: "blue" }}>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></span></p>

                    </div>



                    <div className='carddes mx-3 px-3'>
                        <div className='uicon justify-content-center my-4'>
                            <img className='imgi' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-ui-marketing-agency-flaticons-lineal-color-flat-icons.png" alt="" />

                        </div>

                        <h5 className='my-3'>UI/UX design</h5>
                        <p style={{ color: "rgb(63, 62, 62)" }} className="my-3">The phrasel sequence of the is now so  <br />the many compaign and grow</p>
                        <p style={{ color: "blue" }}>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></span></p>

                    </div>



                    <div className='carddes mx-2 px-3'>
                        <div className='uicon justify-content-center my-4'>
                            <img className='imgi' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-ui-marketing-agency-flaticons-lineal-color-flat-icons.png" alt="" />

                        </div>

                        <h5 className='my-3'>UI/UX design</h5>
                        <p style={{ color: "rgb(63, 62, 62)" }} className="my-3">The phrasel sequence of the is now so  <br />the many compaign and grow</p>
                        <p style={{ color: "blue" }}>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></span></p>

                    </div>
                </div>
            </div>

            {/* 
            <section className="md:h-screen py-36 h-auto relative flex items-center background-effect overflow-hidden 
            before:content-[''] before:absolute before:-z-1 sm:before:-bottom-80 before:-bottom-40 before:right-36 before:left-0 before:mx-auto before:rounded-full before:bg-indigo-600 sm:before:w-[50rem] before:w-[30rem] sm:before:h-[50rem] before:h-[30rem]">
            <div className="container-fluid">
                <div className="absolute inset-0" data-jarallax="{&quot;speed&quot;: 0.5}" style="background: none center top; z-index: 0;" data-jarallax-original-styles="background: url('assets/images/personal/hero-overlay.png') top center;"><div id="jarallax-container-0" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; z-index: -100; clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%);"><div style="background-position: 50% 50%; background-size: cover; background-repeat: no-repeat; background-image: url(&quot;https://shreethemes.in/techwind/layouts/assets/images/personal/hero-overlay.png&quot;); position: fixed; top: 0px; left: 0px; width: 1504px; height: 887px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; will-change: transform, opacity; margin-top: 0px; transform: translate3d(0px, 0px, 0px);"></div></div></div>
            </div>

            <div className="container relative z-1">
                <div className="grid grid-cols-1 mt-5">
                    <div className="title-heading">
                        <div className="grid md:grid-cols-12 mt-12">
                            <div className="lg:col-span-4 md:col-span-6 order-2 lg:order-1 mt-6 md:mt-0 relative">
                                <div className="rounded-md lg:shadow-md lg:dark:shadow-gray-700 lg:absolute lg:top-14 lg:bg-white lg:dark:bg-slate-900 lg:p-6">
                                    <h5 className="mb-3 text-2xl font-bold lg:text-black lg:dark:text-white text-white">I'm Professional Web Developer</h5>

                                    <p className="para-desc lg:text-slate-400 text-slate-200 dark:text-slate-200 mb-0">Obviously I'm a Web Designer. Web Developer with over 3 years of experience.</p>

                                    <div className="mt-4">
                                        <a href="#portfolio" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Hire me</a>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->

                            <div className="lg:col-span-4 lg:block hidden lg:order-2"></div>

                            <div className="lg:col-span-4 md:col-span-6 order-1 lg:order-3">
                                <h4 className="lg:text-[64px] lg:leading-[1.1] text-[40px] font-bold lg:text-black lg:dark:text-white text-white mb-0">John <br> S<span className="typewrite" data-period="2000" data-type="[ &quot;tradford!&quot;]"><span className="wrap">tradfor</span></span></h4>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end grid-->
                    </div>
                </div>
                <!--end grid-->
            </div>
            <!--end container-->

            <div className="absolute inset-0 bg-gradient-to-b lg:from-indigo-600/5 lg:to-indigo-600/20 from-indigo-600/10 to-indigo-600 lg:-z-2"></div>
            <ul className="circles p-0 mb-0"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
        </section>
 */}








            <div className="card df">


                <div className="card-body">
                <div className='justify-content-left '>
                <div className='content21 mb-5'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-person-circle content21" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />

                            </svg>


                            <h5 className='content21'>Self Employed</h5>
                            <p className='content21'>2019-21</p>
                        </div>

                       
                        <div className='content21 mb-5'>

                            <h5 className='content21'>Senior UI/UX Developer</h5>
                            <p className='content21 '>CSS is a language that describes how HTML elements are to be displayed<br /> on screen, paper, or in other media. CSS saves a lot of work,<br /> because it can control the layout of multiple web pages all at once</p>
                        </div>

                        <div className='content21 mb-5'>
                            <img alt="" className='lenovoimg content21' src="data:image/jpeg;base64,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" />

                            <h5 className='content21'>Lenovo Ltd</h5>
                            <p className=' content21'>2016-18</p>
                        </div>
                       

                        <div className='content21 '>

                            <h5 className='content21'>Front end Web Designer</h5>
                            <p className='content21'>CSS is a language that describes how HTML elements are to be displayed<br /> on screen, paper, or in other media. CSS saves a lot of work,<br /> because it can control the layout of multiple web pages all at once</p>
                        </div>
                    
                
</div>

                </div>

                <div className="card-body tr">

                    <ol className="progress-list mb-0 mb-sm-4">
                        <li className="success">
                            <button type="button">
                                <span className="progress-indicator"></span></button>

                        </li>
                        <li className="success">
                            <button type="button">

                                <span className="progress-indicator"></span></button>
                        </li>
                         <li className="active error">
                            <button type="button">

                                <span className="progress-indicator"></span></button>
                        </li>  
                        <li className="active error">
                            <button type="button">

                                <span className="progress-indicator"></span></button>
                        </li>  

                    </ol>
                </div>

                <div className="card-body">
                <div className='justify-content-right '>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
</svg>

<h5 className='content12'>UX/UI DESIGNER</h5>
<p className='mb-5'>2019-21</p>



<img alt="" className='lenovoimg2' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" />

<h5>Google Tech</h5>
<p className='mb-5'>2018-19</p>

<h5 className='content12'>Junior UI/UX Developer</h5>
<p className='content12 mb-5'>CSS is a language that describes how HTML elements are to be displayed<br /> on screen, paper, or in other media. CSS saves a lot of work,<br /> because it can control the layout of multiple web pages all at once</p>

<img alt="" className='lenovoimg2' src="https://avatars.githubusercontent.com/u/1231870?s=280&v=4" />
<h5>Circle Ci</h5>
<p>2015-16</p>
</div>
                </div>
            </div>





            {/* 
            <div class="stepper stepper-pills stepper-column d-flex flex-column flex-lg-row" id="kt_stepper_example_vertical">

                <div class="d-flex flex-row-auto w-100 w-lg-300px">

                    <div class="stepper-nav flex-cente">

                        <div class="stepper-item me-5 current" data-kt-stepper-element="nav">

                            <div class="stepper-line w-40px"></div>



                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">1</span>
                            </div>


                            <div class="stepper-label">
                                <h3 class="stepper-title">
                                    Step 1
                                </h3>

                                <div class="stepper-desc">
                                    Description
                                </div>
                            </div>

                        </div>

                        <div class="stepper-item me-5" data-kt-stepper-element="nav">

                            <div class="stepper-line w-40px"></div>

                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">2</span>
                            </div>

                            <div class="stepper-label">
                                <h3 class="stepper-title">
                                    Step 2
                                </h3>

                                <div class="stepper-desc">
                                    Description
                                </div>
                            </div>

                        </div>

                        <div class="stepper-item me-5" data-kt-stepper-element="nav">

                            <div class="stepper-line w-40px"></div>

                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">3</span>
                            </div>

                            <div class="stepper-label">
                                <h3 class="stepper-title">
                                    Step 3
                                </h3>

                                <div class="stepper-desc">
                                    Description
                                </div>
                            </div>

                        </div>

                        <div class="stepper-item me-5" data-kt-stepper-element="nav">

                            <div class="stepper-line w-40px"></div>

                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">4</span>
                            </div>

                            <div class="stepper-label">
                                <h3 class="stepper-title">
                                    Step 4
                                </h3>

                                <div class="stepper-desc">
                                    Description
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="flex-row-fluid">

                    <form class="form w-lg-500px mx-auto" novalidate="novalidate">

                        <div class="mb-5">

                            <div class="flex-column current" data-kt-stepper-element="content">

                                <div class="fv-row mb-10">

                                    <label class="form-label">Example Label 1</label>

                                    <input type="text" class="form-control form-control-solid" name="input1" placeholder="" value="" />

                                </div>

                                <div class="fv-row mb-10">

                                    <label class="form-label">Example Label 2</label>

                                    <input type="text" class="form-control form-control-solid" name="input2" placeholder="" value="" />

                                </div>

                                <div class="fv-row mb-10">

                                    <label class="form-label">Example Label 3</label>

                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" checked="checked" value="1" />
                                        <span class="form-check-label">
                                            Switch
                                        </span>
                                    </label>

                                </div>

                            </div>

                            <div class="flex-column" data-kt-stepper-element="content">

                                <div class="fv-row mb-10">

                                    <label class="form-label">Example Label 1</label>

                                    <input type="text" class="form-control form-control-solid" name="input1" placeholder="" value="" />

                                </div>

                                <div class="fv-row mb-10">

                                    <label class="form-label">Example Label 2</label>

                                    <textarea class="form-control form-control-solid" rows="3" name="input2" placeholder=""></textarea>

                                </div>

                                <div class="fv-row mb-10">

                                    <label class="form-label">Example Label 3</label>

                                    <label class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" checked="checked" type="checkbox" value="1" />
                                        <span class="form-check-label">
                                            Checkbox
                                        </span>
                                    </label>

                                </div>

                            </div>

                            <div class="flex-column" data-kt-stepper-element="content">

                                <div class="fv-row mb-10">

                                    <label class="form-label d-flex align-items-center">
                                        <span class="required">Input 1</span>
                                        <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Example tooltip"></i>
                                    </label>

                                    <input type="text" class="form-control form-control-solid" name="input1" placeholder="" value="" />

                                </div>

                                <div class="fv-row mb-10">

                                    <label class="form-label">
                                        Input 2
                                    </label>



                                    <input type="text" class="form-control form-control-solid" name="input2" placeholder="" value="" />

                                </div>

                            </div>

                            <div class="flex-column" data-kt-stepper-element="content">

                                <div class="fv-row mb-10">

                                    <label class="form-label d-flex align-items-center">
                                        <span class="required">Input 1</span>
                                        <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Example tooltip"></i>
                                    </label>

                                    <input type="text" class="form-control form-control-solid" name="input1" placeholder="" value="" />


                                    <div class="fv-row mb-10">

                                        <label class="form-label">
                                            Input 2
                                        </label>

                                        <input type="text" class="form-control form-control-solid" name="input2" placeholder="" value="" />

                                    </div>

                                    <div class="fv-row mb-10">

                                        <label class="form-label">
                                            Input 3
                                        </label>

                                        <input type="text" class="form-control form-control-solid" name="input3" placeholder="" value="" />

                                    </div>

                                </div>

                            </div>

                            <div class="d-flex flex-stack">

                                <div class="me-2">
                                    <button type="button" class="btn btn-light btn-active-light-primary" data-kt-stepper-action="previous">
                                        Back
                                    </button>
                                </div>

                                <div>
                                    <button type="button" class="btn btn-primary" data-kt-stepper-action="submit">
                                        <span class="indicator-label">
                                            Submit
                                        </span>
                                        <span class="indicator-progress">
                                            Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                        </span>
                                    </button>

                                    <button type="button" class="btn btn-primary" data-kt-stepper-action="next">
                                        Continue
                                    </button>
                                </div>

                            </div>
</div>
                    </form>

                </div>

            </div>
 */}




        </>
    )
}

export default Techwind
