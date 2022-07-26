import React from 'react'
import './Experience.css'

const Experience = () => {
    return (
        <>
        <div className='container'>
            <div className='justify-content-center expcon'>
                <p style={{ color: "blue" }} className="my-3">Experience</p>
                <h5 className='my-3'>Work Experience</h5>
                <p style={{ color: "rgb(63, 62, 62)" }} className="my-3">Obviously I'm a Web Designer.Experience with all stages of development cycle <br />for dynamic web projects. web developer over 3 years of experience .</p>

                <div className='vrline'></div>
                <div className='employcon expcon'>

                    <div className='justify-content-left svgconi'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>

                        <h5 className='content21'>Self Employed</h5>
                        <p className='mb-5'>2019-21</p>

                        <h5 className='content21'>Senior UI/UX Developer</h5>
                        <p className='content21 mb-5'>CSS is a language that describes how HTML elements are to be displayed<br /> on screen, paper, or in other media. CSS saves a lot of work,<br /> because it can control the layout of multiple web pages all at once</p>

                        <img alt="" className='lenovoimg' src="data:image/jpeg;base64,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" />

                        <h5>Lenovo Ltd</h5>
                        <p className='mb-5'>2016-18</p>


                        <h5>Front end Web Designer</h5>
                        <p className='content21'>CSS is a language that describes how HTML elements are to be displayed<br /> on screen, paper, or in other media. CSS saves a lot of work,<br /> because it can control the layout of multiple web pages all at once</p>
                    </div>


                    <div className='justify-content-right svgcon1'>

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
                {/*   </div> */}


            </div>




        </div>

       
        <div className='container bgicon'>
            <img className='bgi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aUnCPA5__jWlQbf6-yfAij_WOhLFKNaBPQ&usqp=CAU" alt=""/>

</div>
<div className='carddesc content1'>
    <h1 style={{color:"white",fontSize:"25px"}} className="content1 my-3">I am available for Freelancer Projects</h1>
    <p style={{ color: "white" }} className="content1 my-3">Obviously I'm a Web Designer.Experience with all stages of development cycle <br />for dynamic web projects. web developer over 3 years of experience .</p>
<button className='btn btn-primary my-3 justify-content-center mx-5'>Hire Me</button>
</div>








        </>
    )
}

export default Experience
