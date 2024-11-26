import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img_gerbang_shc from '../assets/foto-gerbang-shc.png';
import shc_hyundai from '../assets/shc_hyundai.jpg';
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
import MainContainer from '../components/MainContainer';
import SectionTitle from '../components/SectionTitle';
import Heading from '../components/Heading';
import FactoryCard from '../components/FactoryCard';
import { motion } from 'motion/react';

export default function About() {
    return (
        <>
            <motion.div
                animate={{
                    x: [100, 0],
                    transition: { ease: ['easeIn', 'easeOut'] },
                }}
            >
                <MainContainer>
                    <div className="mb-20 pt-28">
                        <div className="mb-10">
                            <SectionTitle title={'PT Shin Heung Indonesia'} />
                        </div>

                        <div className="flex items-center gap-x-12">
                            <div className="flex-none">
                                <img src={img_gerbang_shc} alt="" />
                            </div>
                            <div className="flex flex-col gap-y-6">
                                <p>
                                    PT Shin Heung Indonesia is a foreign
                                    investment company engaged in manufacturing
                                    electronic components. It is a subsidiary of
                                    Shin Heung Co., Ltd. headquartered in
                                    Shinneung Ri Seowoon Myeon Anseong 456-853,
                                    South Korea.
                                </p>
                                <p>
                                    Our consistent ability to move strongly
                                    ahead in line with key trends in the
                                    electronics industry has given an
                                    acknowledged market reputation as a provider
                                    to world leaders in the field. Samindo
                                    Electronics is poised to scale event greater
                                    in growing EMS market by demonstrating the
                                    relevance of its business model, its core
                                    competence, and its rigorous standards for
                                    event fuller range of production capability.
                                </p>
                            </div>
                        </div>
                    </div>
                </MainContainer>
            </motion.div>

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
                    <SectionTitle title={'Factory Overview'} />
                </div>
                <div className="grid grid-cols-2 mb-20 gap-x-16">
                    {/* card 1 */}
                    <FactoryCard>
                        <FactoryCard.Title>
                            SHIN HEUNG JABABEKA - Factory 1
                        </FactoryCard.Title>
                        <FactoryCard.Body background={img_gerbang_shc} />
                        <FactoryCard.Container>
                            <FactoryCard.Content
                                address={
                                    'Kawasan Industri Jababeka III, Jl. Tekno Raya No. A-5A. Pasirgombong. Cikarang Utara, Kab. Bekasi, Jawa Barat'
                                }
                            />
                            <FactoryCard.Footer>
                                <FactoryCard.FooterContent
                                    icon={faBuilding}
                                    title={'Building'}
                                    surfaceArea={'10.000'}
                                />

                                <FactoryCard.FooterContent
                                    icon={faEarth}
                                    title={'Building'}
                                    surfaceArea={'10.000'}
                                />
                            </FactoryCard.Footer>
                        </FactoryCard.Container>
                    </FactoryCard>

                    {/* card 2 */}
                    <FactoryCard>
                        <FactoryCard.Title>
                            SHIN HEUNG JABABEKA - Factory 2
                        </FactoryCard.Title>
                        <FactoryCard.Body background={shc_hyundai} />
                        <FactoryCard.Container>
                            <FactoryCard.Content
                                address={
                                    'Kawasan Industri Jababeka III, Jl. Tekno Raya No. A-5A. Pasirgombong. Cikarang Utara, Kab. Bekasi, Jawa Barat'
                                }
                            />
                            <FactoryCard.Footer>
                                <FactoryCard.FooterContent
                                    icon={faBuilding}
                                    title={'Building'}
                                    surfaceArea={'10.000'}
                                />

                                <FactoryCard.FooterContent
                                    icon={faEarth}
                                    title={'Building'}
                                    surfaceArea={'10.000'}
                                />
                            </FactoryCard.Footer>
                        </FactoryCard.Container>
                    </FactoryCard>
                </div>
            </div>
            <div className="mb-20">
                <SectionTitle title={'Certification & Achievement'} />
            </div>
            <Heading>
                <Heading.ImageCover
                    className={"bg-[url('./assets/img-cover2.png')]"}
                >
                    <Heading.Container>
                        <Heading.Text className={'text-slate-200'}>
                            Always maintain assessment standards and continue to
                            innovate.
                        </Heading.Text>
                    </Heading.Container>
                </Heading.ImageCover>
            </Heading>

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
}
