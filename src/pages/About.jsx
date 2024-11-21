import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img_gerbang_shc from '../assets/foto-gerbang-shc.png';
import cert from '../assets/cert.jpg';
import plakat from '../assets/plakat.jpg';
import {
    faBuilding,
    faCalendar,
    faEarth,
    faIdCardClip,
    faIndustry,
    faPassport,
    faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
const About = () => {
    return (
        <>
            <div className="w-4/5 mx-auto mb-20">
                <div className="mb-20">
                    <h3 className="text-2xl font-semibold text-center uppercase">
                        PT Shin Heung Indonesia
                    </h3>
                    <div className="w-32 h-1 mx-auto bg-red-600"></div>
                </div>
                <div className="flex items-center gap-x-12">
                    <div className="flex-none">
                        <img src={img_gerbang_shc} alt="" />
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <p>
                            PT Shin Heung Indonesia is a foreign investment
                            company engaged in manufacturing electronic
                            components. It is a subsidiary of Shin Heung Co.,
                            Ltd. headquartered in Shinneung Ri Seowoon Myeon
                            Anseong 456-853, South Korea.
                        </p>
                        <p>
                            Our consistent ability to move strongly ahead in
                            line with key trends in the electronics industry has
                            given an acknowledged market reputation as a
                            provider to world leaders in the field. Samindo
                            Electronics is poised to scale event greater in
                            growing EMS market by demonstrating the relevance of
                            its business model, its core competence, and its
                            rigorous standards for event fuller range of
                            production capability.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-20 bg-gray-100">
                <div className="w-4/5 mx-auto">
                    <div className="flex justify-between py-16 gap-x-6">
                        <div className="flex w-1/5 gap-x-2">
                            <div className="text-slate-500">
                                <FontAwesomeIcon icon={faPassport} />
                            </div>
                            <div>
                                <h6 className="text-sm font-semibold text-slate-500">
                                    Company Name
                                </h6>
                                <p className="font-semibold">
                                    PT Shin Heung Indonesia
                                </p>
                            </div>
                        </div>

                        <div className="flex w-1/5 gap-x-2">
                            <div className="text-slate-500">
                                <FontAwesomeIcon icon={faIndustry} />
                            </div>
                            <div>
                                <h6 className="text-sm font-semibold text-slate-500">
                                    Business Field
                                </h6>
                                <p className="font-semibold">
                                    Electronic Manufacturing Services
                                </p>
                            </div>
                        </div>

                        <div className="flex w-1/5 gap-x-2">
                            <div className="text-slate-500">
                                <FontAwesomeIcon icon={faIdCardClip} />
                            </div>
                            <div>
                                <h6 className="text-sm font-semibold text-slate-500">
                                    President Directur
                                </h6>
                                <p className="font-semibold">Mr. Kim Taekwon</p>
                            </div>
                        </div>

                        <div className="flex w-1/5 gap-x-2">
                            <div className="text-slate-500">
                                <FontAwesomeIcon icon={faPeopleGroup} />
                            </div>
                            <div>
                                <h6 className="text-sm font-semibold text-slate-500">
                                    Employees
                                </h6>
                                <p className="font-semibold">1200+ Employees</p>
                            </div>
                        </div>

                        <div className="flex w-1/5 gap-x-2">
                            <div className="text-slate-500">
                                <FontAwesomeIcon icon={faCalendar} />
                            </div>
                            <div>
                                <h6 className="text-sm font-semibold text-slate-500">
                                    Established
                                </h6>
                                <p className="font-semibold">00 Januari 1900</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-4/5 mx-auto">
                <div className="mb-20">
                    <h3 className="text-2xl font-semibold text-center uppercase">
                        Factory Overview
                    </h3>
                    <div className="w-32 h-1 mx-auto bg-red-600"></div>
                </div>
                <div className="grid grid-cols-2 mb-20 gap-x-16">
                    {/* card 1 */}
                    <div className="">
                        <div className="p-4 bg-primary">
                            <h5 className="font-medium text-slate-200">
                                Factory 1
                            </h5>
                        </div>
                        <div className="relative w-full">
                            <div className="w-full">
                                <img
                                    src={img_gerbang_shc}
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                            <div className="absolute bottom-0 invisible w-full">
                                <div className="p-4 bg-white border-l-2 border-r-2">
                                    <div className="mb-8">
                                        <p>
                                            Kawasan Industri Jababeka III, Jl.
                                            Tekno Raya No. A-5A. Pasirgombong.
                                            Cikarang Utara, Kab. Bekasi, Jawa
                                            Barat
                                        </p>
                                    </div>
                                    <div className="flex gap-x-10">
                                        <div className="flex items-center gap-x-2">
                                            <div className="text-primary">
                                                <FontAwesomeIcon
                                                    icon={faEarth}
                                                    size="xl"
                                                />
                                            </div>
                                            <div>
                                                <h6 className="text-sm font-semibold text-primary">
                                                    Land
                                                </h6>
                                                <p className="text-sm font-semibold">
                                                    10.000 m2
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <div className="text-primary">
                                                <FontAwesomeIcon
                                                    icon={faBuilding}
                                                    size="xl"
                                                />
                                            </div>
                                            <div>
                                                <h6 className="text-sm font-semibold text-primary">
                                                    Land
                                                </h6>
                                                <p className="text-sm font-semibold">
                                                    10.000 m2
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-3 border-b-2 border-l-2 border-r-2 bg-slate-100"></div>
                            </div>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="group">
                        <div className="p-4 bg-primary">
                            <h5 className="font-medium text-slate-200">
                                Factory 2
                            </h5>
                        </div>
                        <div className="relative w-full">
                            <div className="w-full">
                                <img
                                    src={img_gerbang_shc}
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                            <div className="absolute bottom-0 invisible w-full transition ease-in-out delay-150 group-hover:visible">
                                <div className="p-4 bg-white border-l-2 border-r-2">
                                    <div className="mb-8">
                                        <p>
                                            Kawasan Industri Jababeka III, Jl.
                                            Tekno Raya No. A-5A. Pasirgombong.
                                            Cikarang Utara, Kab. Bekasi, Jawa
                                            Barat
                                        </p>
                                    </div>
                                    <div className="flex gap-x-10">
                                        <div className="flex items-center gap-x-2">
                                            <div className="text-primary">
                                                <FontAwesomeIcon
                                                    icon={faEarth}
                                                    size="xl"
                                                />
                                            </div>
                                            <div>
                                                <h6 className="text-sm font-semibold text-primary">
                                                    Land
                                                </h6>
                                                <p className="text-sm font-semibold">
                                                    10.000 m2
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <div className="text-primary">
                                                <FontAwesomeIcon
                                                    icon={faBuilding}
                                                    size="xl"
                                                />
                                            </div>
                                            <div>
                                                <h6 className="text-sm font-semibold text-primary">
                                                    Building
                                                </h6>
                                                <p className="text-sm font-semibold">
                                                    10.000 m2
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-3 border-b-2 border-l-2 border-r-2 bg-slate-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-20">
                <h3 className="text-2xl font-semibold text-center uppercase">
                    Certification & Achievement
                </h3>
                <div className="w-32 h-1 mx-auto bg-red-600"></div>
            </div>
            <div className='bg-[url("./assets/img-cover1.png")] bg-cover mb-20'>
                <div className="w-4/5 py-12 mx-auto">
                    <div className="w-2/5">
                        <h3 className="text-2xl font-medium text-slate-200">
                            Always maintain assessment standards and continue to
                            innovate.
                        </h3>
                    </div>
                </div>
            </div>

            {/* cert */}
            <div className="w-4/5 mx-auto mb-20">
                <div className="grid grid-cols-3 mb-40 justify-items-center gap-x-8">
                    <div>
                        <img src={cert} alt="" />
                    </div>
                    <div>
                        <img src={cert} alt="" />
                    </div>
                    <div>
                        <img src={cert} alt="" />
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-8 justify-items-center">
                    <div className="w-64 shadow-md">
                        <img src={plakat} alt="" />
                    </div>
                    <div className="w-64 shadow-md">
                        <img src={plakat} alt="" />
                    </div>
                    <div className="w-64 shadow-md">
                        <img src={plakat} alt="" />
                    </div>
                    <div className="w-64 shadow-md">
                        <img src={plakat} alt="" />
                    </div>
                    <div className="w-64 shadow-md">
                        <img src={plakat} alt="" />
                    </div>
                    <div className="w-64 shadow-md">
                        <img src={plakat} alt="" />
                    </div>
                    <div className="w-64 shadow-md">
                        <img src={plakat} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default About;