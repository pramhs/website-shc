import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img_machine from '../assets/machine.jpg';
import net_element from '../assets/net_element.png';
import Footer from '../components/Footer';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import sharp from '../assets/customer_logo/sharp.png';
import epson from '../assets/customer_logo/epson.png';
import hmmi from '../assets/customer_logo/hmmi.png';
import ingress from '../assets/customer_logo/ingress.png';
import jvc from '../assets/customer_logo/jvc.png';
import mmki from '../assets/customer_logo/mmki.png';
import samsung from '../assets/customer_logo/samsung.png';
import katolec from '../assets/customer_logo/katolec.png';
import daijo from '../assets/customer_logo/daijo.png';
import suzuki from '../assets/customer_logo/suzuki.png';
import patco from '../assets/customer_logo/patco.png';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import MainContainer from '../components/MainContainer';
import { motion } from 'motion/react';

export default function Home() {
    return (
        <>
            {/* hero section */}
            <div className="mb-32 h-screen bg-slate-200 bg-[url('./assets/background-hero.png')] bg-cover">
                <div className="relative h-full">
                    <div className="absolute h-full">
                        <img src={net_element} alt="" className="h-full" />
                    </div>
                    <div className="absolute h-full">
                        <div className="grid h-full place-content-center">
                            <div className="animate-[fade-in_1s_ease-in-out]">
                                <motion.div
                                    animate={{
                                        x: [100, 0],
                                        transition: {
                                            ease: ['anticipate'],
                                            duration: 1.6,
                                        },
                                    }}
                                >
                                    <MainContainer>
                                        <div className="w-3/4 mt-16">
                                            <h1 className="mb-4 text-6xl font-bold uppercase text-slate-200">
                                                Driven by Quality, Committed to
                                                Satisfaction
                                            </h1>
                                            <p className="text-lg text-slate-200">
                                                We are committed to optimizing
                                                technology and resources,
                                                empowering resilient and
                                                dedicated human resources, and
                                                ensuring every product is of
                                                high quality. With responsive
                                                customer service and timely
                                                delivery, we also strive to
                                                build harmonious relationships
                                                with the surrounding community
                                                to create a positive impact.
                                            </p>
                                        </div>
                                    </MainContainer>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Heading>
                <Heading.ImageCover
                    className={"bg-[url('./assets/img-cover1.png')]"}
                >
                    <Heading.Container>
                        <Heading.Text className="text-slate-200">
                            Discover Our Journey: Excellence in Manufacturing
                            and Commitment to You
                        </Heading.Text>
                    </Heading.Container>
                </Heading.ImageCover>
            </Heading>

            {/* video content */}
            <div className="w-4/5 mx-auto mb-32 overflow-hidden rounded-2xl">
                <div
                    style={{
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                    }}
                >
                    <iframe
                        src="https://geo.dailymotion.com/player.html?video=x8rz86y"
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            overflow: 'hidden',
                            border: 'none',
                        }}
                        allowFullScreen=""
                        title="Dailymotion Video Player"
                        allow="web-share"
                    ></iframe>
                </div>
            </div>

            {/* product and service section */}
            <div className="py-10 mb-32 bg-slate-100">
                <div className="flex flex-col items-center mb-20 gap-y-2">
                    <h2 className="text-2xl font-semibold">
                        Services & Solutions
                    </h2>
                    <div className="w-24 h-1 bg-red-600"></div>
                </div>

                {/* card */}
                <div className="w-4/5 mx-auto mb-20">
                    <div className="flex justify-between">
                        <ServiceSolutionCard
                            img={img_machine}
                            text="Plastic Injection"
                        />
                        <ServiceSolutionCard
                            img={img_machine}
                            text="Metal Stamping"
                        />
                        <ServiceSolutionCard
                            img={img_machine}
                            text="Molding Design"
                        />
                        <ServiceSolutionCard
                            img={img_machine}
                            text="Assembly"
                        />
                    </div>
                </div>

                <div className="w-4/5 mx-auto mb-20">
                    <div className="flex items-center justify-between">
                        <div className="w-2/4">
                            <p>
                                with the best machines and resources to produce
                                high quality products.
                            </p>
                        </div>
                        <div>
                            <Link
                                to="/service"
                                className="flex items-center px-6 py-3 mx-auto text-slate-200 bg-primary gap-x-6"
                            >
                                <span>See all services & solutions</span>
                                <FontAwesomeIcon icon={faAnglesRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* customers */}
            <Heading>
                <Heading.Container>
                    <Heading.Text>
                        For more than 20 years we have been trusted by our
                        customers.
                    </Heading.Text>
                </Heading.Container>
            </Heading>
            <div className="w-4/5 mx-auto mb-20">
                <div className="grid items-center grid-cols-6 justify-items-center gap-x-12 gap-y-4">
                    <CustomerLogo img={sharp} />
                    <CustomerLogo img={samsung} />
                    <CustomerLogo img={epson} />
                    <CustomerLogo img={hmmi} />

                    <CustomerLogo img={jvc} />
                    <CustomerLogo img={mmki} />

                    <CustomerLogo img={katolec} />
                    <CustomerLogo img={daijo} />
                    <CustomerLogo img={suzuki} />
                    <CustomerLogo img={patco} />
                    <CustomerLogo img={ingress} />
                </div>
            </div>
            <Footer />
        </>
    );
}

function ServiceSolutionCard({ img, text }) {
    return (
        <>
            <div className="relative w-56 h-56">
                <div className="absolute grid w-full h-full place-content-center">
                    <img
                        className="w-full"
                        src={img}
                        alt="services & solutions"
                    />
                </div>
                <div className="absolute w-full h-full bg-gradient-to-t from-black to-blue-900 opacity-70"></div>
                <div className="absolute grid w-full h-full p-4 place-content-center">
                    <h3 className="font-medium text-center uppercase text-slate-200">
                        {text}
                    </h3>
                </div>
            </div>
        </>
    );
}

function CustomerLogo({ img }) {
    return (
        <>
            <div className="grid items-center w-24 h-24">
                <img src={img} />
            </div>
        </>
    );
}
