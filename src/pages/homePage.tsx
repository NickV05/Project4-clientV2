import '../LineIcons.css'
import '../animate.css'
import '../tiny-slider.css'

const homePage = () => {

  return (
    <div>
    <div className="preloader">
        <div className="loader">
            <div className="ytp-spinner">
                <div className="ytp-spinner-container">
                    <div className="ytp-spinner-rotator">
                        <div className="ytp-spinner-left">
                            <div className="ytp-spinner-circle"></div>
                        </div>
                        <div className="ytp-spinner-right">
                            <div className="ytp-spinner-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="header_area">
        <div className="navbar-area bg-white">
            <div className="container relative">
                <div className="row items-center">
                    <div className="w-full">
                        <nav className="flex items-center justify-between py-4 navbar navbar-expand-lg">
                            <a className="navbar-brand mr-5" href="index.html">
                                <img src="/public/logo.svg" alt="Logo"/>
                            </a>
                            <button className="block navbar-toggler focus:outline-none lg:hidden" 
                            type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" 
                            aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 
                            bg-white lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static 
                            lg:bg-transparent shadow lg:shadow-none" id="navbarOne">
                                <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                    <li className="nav-item ml-5 lg:ml-11">
                                        <a className="page-scroll active" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item ml-5 lg:ml-11">
                                        <a className="page-scroll" href="#about">About</a>
                                    </li>
                                    <li className="nav-item ml-5 lg:ml-11">
                                        <a className="page-scroll" href="#services">Services</a>
                                    </li>
                                    <li className="nav-item ml-5 lg:ml-11">
                                        <a className="page-scroll" href="#work">Projects</a>
                                    </li>
                                    <li className="nav-item ml-5 lg:ml-11">
                                        <a className="page-scroll" href="#pricing">Pricing</a>
                                    </li>
                                    <li className="nav-item ml-5 lg:ml-11">
                                        <a className="page-scroll" href="#blog">Blog</a>
                                    </li>
                                    <li className="nav-item ml-5 lg:ml-11">
                                        <a className="page-scroll" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div> 
                        </nav> 
                    </div>
                </div> 
            </div> 
        </div> 

        <div id="home" className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">
            <div className="hero_shape shape_1">
                <img src="/public/shape/shape-1.svg" alt="shape"/>
            </div>
            <div className="hero_shape shape_2">
                <img src="/public/shape/shape-2.svg" alt="shape"/>
            </div>
            <div className="hero_shape shape_3">
                <img src="/public/shape/shape-3.svg" alt="shape"/>
            </div>
            <div className="hero_shape shape_4">
                <img src="/public/shape/shape-4.svg" alt="shape"/>
            </div>
            <div className="hero_shape shape_6">
                <img src="/public/shape/shape-1.svg" alt="shape"/>
            </div>
            <div className="hero_shape shape_7">
                <img src="/public/shape/shape-4.svg" alt="shape"/>
            </div>
            <div className="hero_shape shape_8">
                <img src="/public/shape/shape-3.svg" alt="shape"/>
            </div>
            <div className="hero_shape shape_9">
                <img src="/public/shape/shape-2.svg" alt="shape"/>
            </div>
            <div className="hero_shape shape_10">
                <img src="/public/shape/shape-4.svg" alt="shape"/>
            </div>
            <div className="hero_shape shape_11">
                <img src="/public/shape/shape-1.svg" alt="shape"/>
            </div>
            <div className="hero_shape shape_12">
                <img src="/public/shape/shape-2.svg" alt="shape"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="w-full lg:w-1/2">
                        <div className="header_hero_content pt-150 lg:pt-0">
                            <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 
                            font-extrabold">Creative Multipurpose Tailwind CSS <span className="text-theme-color">Template</span></h2>
                            <p className="mt-8 lg:mr-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                            <div className="hero_btn mt-10">
                                <a className="main-btn" href="#0">Get Started</a>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
            <div className="header_shape hidden lg:block"></div>

            <div className="header_image flex items-center">
                <div className="image 2xl:pl-25">
                    <img src="/public/header-image.svg" alt="Header Image"/>
                </div>
            </div> 
        </div> 
    </section>

    <section className="services_area pt-120" id="about">
        <div className="container">
            <div className="row justify-center">
                <div className="w-full lg:w-1/2">
                    <div className="section_title text-center pb-6">
                        <h5 className="sub_title">About</h5>
                        <h4 className="main_title">Work Process</h4>
                    </div> 
                </div>
            </div> 
            <div className="row justify-center">
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                    <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                            <i className="lni lni-write"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <div className="services_content mt-5">
                            <h3 className="services_title text-black font-semibold text-xl md:text-3xl">Research</h3>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                        </div>
                    </div> 
                </div>
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                    <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                            <i className="lni lni-bulb"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <div className="services_content mt-5">
                            <h3 className="services_title text-black font-semibold text-xl md:text-3xl">Prototype</h3>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                        </div>
                    </div> 
                </div>
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                    <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                            <i className="lni lni-checkmark-circle"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <div className="services_content mt-5">
                            <h3 className="services_title text-black font-semibold text-xl md:text-3xl">Build</h3>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>


    <section id="why" className="about_area pt-120 relative">
        <div className="about_image flex items-end justify-end">
            <div className="image lg:pr-13">
                <img src="/public/about.svg" alt="about"/>
            </div>
        </div> 
        <div className="container">
            <div className="row justify-end">
                <div className="w-full lg:w-1/2">
                    <div className="about_content mx-4 pt-11 lg:pt-15 lg:pb-15">
                        <div className="section_title pb-9">
                            <h5 className="sub_title">Why Choose Us</h5>
                            <h4 className="main_title">Your Goal is Our Achievement</h4>
                        </div> 
                        <p>Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergren, no sea takimata sanctus. </p>
                        <ul className="about_list pt-3">
                            <li className="flex mt-5">
                                <div className="about_check">
                                    <i className="lni lni-checkmark-circle"></i>
                                </div>
                                <div className="about_list_content pl-5 pr-2">
                                    <p>Vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv</p>
                                </div>
                            </li>
                            <li className="flex mt-5">
                                <div className="about_check">
                                    <i className="lni lni-checkmark-circle"></i>
                                </div>
                                <div className="about_list_content pl-5 pr-2">
                                    <p>At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv</p>
                                </div>
                            </li>
                            <li className="flex mt-5">
                                <div className="about_check">
                                    <i className="lni lni-checkmark-circle"></i>
                                </div>
                                <div className="about_list_content pl-5 pr-2">
                                    <p>Dvero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv</p>
                                </div>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>

    <section id="services" className="services_area pt-120 pb-120">
        <div className="container">
            <div className="row justify-center">
                <div className="w-full lg:w-1/2">
                    <div className="section_title text-center pb-6">
                        <h5 className="sub_title">What We Do</h5>
                        <h4 className="main_title">Our Services</h4>
                    </div> 
                </div>
            </div> 
            <div className="row justify-center">
                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                    <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                            <i className="lni lni-layout"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <div className="services_content mt-5 xl:mt-10">
                            <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">Web Design</h3>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                        </div>
                    </div> 
                </div>

                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                    <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                            <i className="lni lni-bullhorn"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <div className="services_content mt-5 xl:mt-10">
                            <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">Digital Marketing</h3>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                        </div>
                    </div> 
                </div>

                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                    <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                            <i className="lni lni-mobile"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <div className="services_content mt-5 xl:mt-10">
                            <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">Mobile Apps</h3>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                        </div>
                    </div> 
                </div>

                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                    <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                            <i className="lni lni-seo"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <div className="services_content mt-5 xl:mt-10">
                            <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">SEO Consultancy</h3>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                        </div>
                    </div> 
                </div>

                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                    <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                            <i className="lni lni-layers"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <div className="services_content mt-5 xl:mt-10">
                            <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">Graphic Design</h3>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                        </div>
                    </div> 
                </div>

                <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                    <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                            <i className="lni lni-briefcase"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                            </svg>
                        </div>
                        <div className="services_content mt-5 xl:mt-10">
                            <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">Business Consultancy</h3>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>


    <section id="work" className="work_area bg-gray pt-120 pb-120">
        <div className="container">
            <div className="row justify-center">
                <div className="w-ull lg:w-1/2">
                    <div className="section_title text-center pb-6">
                        <h5 className="sub_title">Works</h5>
                        <h4 className="main_title">Some of Our Recent Works</h4>
                    </div> 
                </div>
            </div> 
        </div> 
        <div className="container-fluid">
            <div className="work_wrapper relative">
                <div className="row work_active">
                    <div className="w-full lg:w-3/12">
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_image">
                                    <img src="/public/work-1.jpg" alt="work" className="w-full"/>
                                </div>
                                <div className="work_content">
                                    <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Marketing</a></h4>
                                    <p className="mt-2">NoCodeAPI</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="w-full lg:w-3/12">
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_image">
                                    <img src="/public/work-2.jpg" alt="work" className="w-full"/>
                                </div>
                                <div className="work_content">
                                    <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Creative Design</a></h4>
                                    <p className="mt-2">UIdeck</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="w-full lg:w-3/12">
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_image">
                                    <img src="/public/work-3.jpg" alt="work" className="w-full"/>
                                </div>
                                <div className="work_content">
                                    <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Web Design</a></h4>
                                    <p className="mt-2">GrayGrids</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="w-full lg:w-3/12">
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_image">
                                    <img src="/public/work-4.jpg" alt="work" className="w-full"/>
                                </div>
                                <div className="work_content">
                                    <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Analysis</a></h4>
                                    <p className="mt-2">Ayro UI</p>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="w-full lg:w-3/12">
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_image">
                                    <img src="/public/work-4.jpg" alt="work" className="w-full"/>
                                </div>
                                <div className="work_content">
                                    <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Analysis</a></h4>
                                    <p className="mt-2">Ayro UI</p>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="w-full lg:w-3/12">
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_image">
                                    <img src="/public/work-5.jpg" alt="work" className="w-full"/>
                                </div>
                                <div className="work_content">
                                    <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                    <h4 className="work_title text-xl md:text-2xl"><a href="#">SMM</a></h4>
                                    <p className="mt-2">LineIcons</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="w-full lg:w-3/12">
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_image">
                                    <img src="/public/work-2.jpg" alt="work" className="w-full"/>
                                </div>
                                <div className="work_content">
                                    <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                    <h4 className="work_title text-xl md:text-2xl"><a href="#">SEO</a></h4>
                                    <p className="mt-2">PageBulb</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="w-full lg:w-3/12">
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_image">
                                    <img src="/public/work-4.jpg" alt="work" className="w-full"/>
                                </div>
                                <div className="work_content">
                                    <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                    <h4 className="work_title text-xl md:text-2xl"><a href="#">Mobile App</a></h4>
                                    <p className="mt-2">Rocket Internet LTD</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div>
        </div> 
    </section>

    <section id="team" className="team_area bg-gray pt-120 pb-120">
        <div className="container">
            <div className="row justify-center">
                <div className="w-full lg:w-1/2">
                    <div className="section_title text-center pb-6">
                        <h5 className="sub_title">Team</h5>
                        <h4 className="main_title">Meet Our Team Members</h4>
                    </div> 
                </div>
            </div> 
            <div className="team-wrapper relative">
                <div className="row team_active">
                    <div className="w-full lg:w-4/12">
                        <div className="single_team_item mx-auto">
                            <div className="single_team mx-3">
                                <div className="team_image relative">
                                    <img src="/public/team-1.jpg" alt="team" className="w-full"/>
                                    <ul className="social absolute top-4 right-8">
                                        <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team_content py-5 px-8 relative">
                                    <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Chris Dave</a></h4>
                                    <p className="mt-2 transition-all duration-300 group-hover:text-white">Founder and CEO</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12">
                        <div className="single_team_item mx-auto">
                            <div className="single_team mx-3">
                                <div className="team_image relative">
                                    <img src="/public/team-3.jpg" alt="team" className="w-full"/>
                                    <ul className="social absolute top-4 right-8">
                                        <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team_content py-5 px-8 relative">
                                    <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Sarah Doe</a></h4>
                                    <p className="mt-2 transition-all duration-300 group-hover:text-white">UI Designer</p>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12">
                        <div className="single_team_item mx-auto">
                            <div className="single_team mx-3">
                                <div className="team_image relative">
                                    <img src="/public/team-3.jpg" alt="team" className="w-full"/>
                                    <ul className="social absolute top-4 right-8">
                                        <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team_content py-5 px-8 relative">
                                    <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Sarah Doe</a></h4>
                                    <p className="mt-2 transition-all duration-300 group-hover:text-white">UI Designer</p>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12">
                        <div className="single_team_item mx-auto">
                            <div className="single_team mx-3">
                                <div className="team_image relative">
                                    <img src="/public/team-3.jpg" alt="team" className="w-full"/>
                                    <ul className="social absolute top-4 right-8">
                                        <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team_content py-5 px-8 relative">
                                    <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Sarah Doe</a></h4>
                                    <p className="mt-2 transition-all duration-300 group-hover:text-white">UI Designer</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-4/12">
                        <div className="single_team_item mx-auto">
                            <div className="single_team mx-3">
                                <div className="team_image relative">
                                    <img src="/public/team-5.jpg" alt="team" className="w-full"/>
                                    <ul className="social absolute top-4 right-8">
                                        <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team_content py-5 px-8 relative">
                                    <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Rob Hope</a></h4>
                                    <p className="mt-2 transition-all duration-300 group-hover:text-white">Dr. Software Engineer</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12">
                        <div className="single_team_item mx-auto">
                            <div className="single_team mx-3">
                                <div className="team_image relative">
                                    <img src="/public/team-2.jpg" alt="team" className="w-full"/>
                                    <ul className="social absolute top-4 right-8">
                                        <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team_content py-5 px-8 relative">
                                    <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">Micheal Jordan</a></h4>
                                    <p className="mt-2 transition-all duration-300 group-hover:text-white">Business Development Manager</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div> 
            </div>
        </div> 
    </section>

    <section id="blog" className="blog_area pt-120">
        <div className="container">
            <div className="row justify-center">
                <div className="w-full lg:w-1/2">
                    <div className="section_title text-center pb-6">
                        <h5 className="sub_title">Blog</h5>
                        <h4 className="main_title">From The Blog</h4>
                    </div> 
                </div>
            </div> 
            <div className="row justify-center lg:justify-start">
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
                    <div className="single_blog mx-3 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                        <div className="blog_image">
                            <img src="/public/blog-1.jpg" alt="blog" className="w-full"/>
                        </div>
                        <div className="blog_content p-4 md:p-5">
                            <ul className="blog_meta flex justify-between">
                                <li className="text-body-color text-sm md:text-base">By: <a href="#" className="text-body-color hover:text-theme-color">Musharof Chowdury</a></li>
                                <li className="text-body-color text-sm md:text-base">15 June 2024</li>
                            </ul>
                            <h3 className="blog_title"><a href="#">How to track your business revenue</a></h3>
                            <a href="#" className="more_btn">Read More</a>
                        </div>
                    </div> 
                </div>
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
                    <div className="single_blog mx-3 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                        <div className="blog_image">
                            <img src="/public/blog-2.jpg" alt="blog" className="w-full"/>
                        </div>
                        <div className="blog_content p-4 md:p-5">
                            <ul className="blog_meta flex justify-between">
                                <li className="text-body-color text-sm md:text-base">By: <a href="#" className="text-body-color hover:text-theme-color">Musharof Chowdury</a></li>
                                <li className="text-body-color text-sm md:text-base">15 June 2024</li>
                            </ul>
                            <h3 className="blog_title"><a href="#">Improving products depending on feedback</a></h3>
                            <a href="#" className="more_btn">Read More</a>
                        </div>
                    </div> 
                </div>
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
                    <div className="single_blog mx-3 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                        <div className="blog_image">
                            <img src="/public/blog-3.jpg" alt="blog" className="w-full"/>
                        </div>
                        <div className="blog_content p-4 md:p-5">
                            <ul className="blog_meta flex justify-between">
                                <li className="text-body-color text-sm md:text-base">By: <a href="#" className="text-body-color hover:text-theme-color">Musharof Chowdury</a></li>
                                <li className="text-body-color text-sm md:text-base">15 June 2024</li>
                            </ul>
                            <h3 className="blog_title"><a href="#">How to diversify your audience</a></h3>
                            <a href="#" className="more_btn">Read More</a>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>

    <section id="contact" className="contact_area relative pt-18 pb-120">
        <div className="contact_image flex items-center justify-end">
            <div className="image lg:pr-13">
                <img src="/public/contact.svg" alt="about"/>
            </div>
        </div> 
        
        <div className="container">
            <div className="row justify-end">
                <div className="w-full lg:w-1/2">
                    <div className="contact_wrapper mt-11">
                        <div className="section_title pb-4">
                            <h5 className="sub_title">Contact</h5>
                            <h4 className="main_title">Get In Touch</h4>
                            <p>Lorem ipsum dolor sitrg amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                        </div> 
                        
                        <div className="contact_form">
                            <form id="contact-form" action="assets/php/contact.php" method="POST">
                                <div className="row">
                                    <div className="w-full md:w-1/2">
                                        <div className="mx-3">
                                            <div className="single_form mt-8">
                                                <input name="name" id="name" type="text" placeholder="Name" className="w-full rounded-md py-4 px-6 border border-solid border-body-color"/>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="mx-3">
                                            <div className="single_form mt-8">
                                                <input name="email" id="email" type="email" placeholder="Email" className="w-full rounded-md py-4 px-6 border border-solid border-body-color"/>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="mx-3">
                                            <div className="single_form mt-8">
                                                <textarea name="message" id="message" placeholder="Message" rows="5" className="w-full rounded-md py-4 px-6 border border-solid border-body-color resize-none"></textarea>
                                            </div> 
                                        </div>
                                    </div>
                                    <p className="form-message mx-3"></p>
                                    <div className="w-full">
                                        <div className="mx-3">
                                            <div className="single_form mt-8">
                                                <button type="submit" className="main-btn contact-btn">Submit</button>
                                            </div> 
                                        </div>
                                    </div>
                                </div> 
                            </form>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
    </section>

    <footer id="footer" className="footer_area bg-black relative z-10">
        <div className="shape absolute left-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
            <img src="/public/footer-shape-left.png" alt=""/>
        </div>
        <div className="shape absolute right-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
            <img src="/public/footer-shape-right.png" alt=""/>
        </div>
        <div className="container">
            <div className="footer_widget pt-18 pb-120">
                <div className="row justify-center">
                    <div className="w-full md:w-1/2 lg:w-3/12">
                        <div className="footer_about mt-13 mx-3">
                            <div className="footer_logo">
                                <a href="#"><img src="/public/logo-footer.svg" alt=""/></a>
                            </div>
                            <div className="footer_content mt-8">
                                <p className="text-white">Lorem ipsum dolor sitco nsetetu nonumy eirmod tempor invidunt ut labore et dolore magna uyam erat, sed diam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-5/12">
                        <div className="footer_link_wrapper flex flex-wrap mx-3">
                            <div className="footer_link w-1/2 md:pl-13 mt-13">
                                <h2 className="footer_title text-xl font-semibold text-white">Quick Links</h2>
                                <ul className="link pt-4">
                                    <li><a href="#" className="text-white mt-4 hover:text-theme-color">Company</a></li>
                                    <li><a href="#" className="text-white mt-4 hover:text-theme-color">Privacy Policy</a></li>
                                    <li><a href="#" className="text-white mt-4 hover:text-theme-color">About</a></li>
                                </ul>
                            </div> 
                            <div className="footer_link w-1/2 md:pl-13 mt-13">
                                <h2 className="footer_title text-xl font-semibold text-white">Resources</h2>
                                <ul className="link pt-4">
                                    <li><a href="#" className="text-white mt-4 hover:text-theme-color">Support</a></li>
                                    <li><a href="#" className="text-white mt-4 hover:text-theme-color">Contact</a></li>
                                    <li><a href="#" className="text-white mt-4 hover:text-theme-color">Terms</a></li>
                                </ul>
                            </div> 
                        </div> 
                    </div>
                    <div className="w-full md:w-2/3 lg:w-4/12">
                        <div className="footer_subscribe mt-13 mx-3">
                            <h2 className="footer_title text-xl font-semibold text-white">Newsletter</h2>
                            <div className="subscribe_form text-right mt-9 relative">
                                <form action="#">
                                    <input type="text" placeholder="Enter email" className="w-full py-5 px-6 bg-white text-black rounded-full border-none"/>
                                    <button className="main-btn subscribe-btn">Subscribe</button>
                                </form>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
            <div className="footer_copyright pt-3 pb-6 border-t-2 border-solid border-white border-opacity-10 sm:flex justify-between">
                <div className="footer_social pt-4 mx-3 text-center">
                    <ul className="social flex justify-center sm:justify-start">
                        <li className="mr-3"><a href="https://facebook.com/uideckHQ"><i className="lni lni-facebook-filled"></i></a></li>
                        <li className="mr-3"><a href="https://twitter.com/uideckHQ"><i className="lni lni-twitter-filled"></i></a></li>
                        <li className="mr-3"><a href="https://instagram.com/uideckHQ"><i className="lni lni-instagram-original"></i></a></li>
                        <li className="mr-3"><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                    </ul>
                </div> 
                <div className="footer_copyright_content pt-4 text-center">
                    <p className="text-white">Designed and Developed by <a href="https://uideck.com" rel="nofollow" className="text-white hover:text-theme-color">UIdeck</a> and <a href="https://tailwindtemplates.co" rel="nofollow" className="text-white hover:text-theme-color">Tailwind Templates</a></p>
                </div> 
            </div> 
        </div> 
    </footer>

    <a href="#" className="scroll-top"><i className="lni lni-chevron-up"></i></a>

    </div>
    
  )
}

export default homePage
