import CounterUp from "../components/elements/Counterup"
import TextEffect from "../components/elements/TextEffect"
import Layout from "../components/layout/Layout"
import Slider1 from "../components/slider/Slider1"

function Home() {
    return (
        <>
            <Layout>
                <section className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="pt-12 text-center">
                            <div className="max-w-2xl mx-auto mb-8">
                                <h2 className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                    Analyze your competitors Shopify products closely <br/>
                                    <span className="text-blue-500">Be aware of product price changes</span>
                                </h2>
                                <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                                    We are <strong className="text-blue-500">Procut Comparify</strong>
                                    <span className="typewrite d-inline text-brand">
                                        <TextEffect text1=" Web Agency" text2="Social Marketing" />
                                    </span>
                                </p>
                            </div>
                            <div>
                                <a className="btn-primary py-4 px-8 mr-2 wow animate__animated animate__fadeIn hover-up-2" href="#key-features">
                                    Key Features
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
                        <img src="/assets/imgs/elements/pattern.png" alt="Product Comparify" />
                        <div className="absolute" style={{ top: "-5%", left: "14%", width: "72%", height: "66%" }}>
                            <img className="jump rounded wow animate__animated animate__fadeIn" src="/assets/imgs/placeholders/alarm-mail.png" alt="Product Comparify" />
                        </div>
                    </div>
                </section>

                <section className="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden" id="key-features">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:py-6 lg:pr-77 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <div className="mb-4">
                                        <span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                            Why choose us
                                        </span>
                                        <h2 className="text-4xl mt-5 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            Features
                                        </h2>
                                    </div>
                                    <div className="flex items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="w-8 mr-5 text-blue-500">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading"> Choose Shopify Website</h3>
                                            <p className="text-blueGray-400 leading-loose">Choose website which your want examine the products closely</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                        <div className="w-8 mr-5 text-blue-500">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading">Define Alarms</h3>
                                            <p className="text-blueGray-400 leading-loose">Select a percentage of product price change</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                        <div className="w-8 mr-5 text-blue-500">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading">Check your mail</h3>
                                            <p className="text-blueGray-400 leading-loose">We send you mail of products whose price changed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                                <div className="wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <img className="jump relative mx-auto rounded-xl w-full z-10" src="/assets/imgs/placeholders/kare.png" alt="Product Comparify" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
}
export default Home
