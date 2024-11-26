import yellow_slash from '../assets/element1.png';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';

export default function Contact() {
    return (
        <>
            <div className="mb-20 pt-36">
                <MainContainer>
                    <div className="flex items-center bg-slate-100 gap-x-8 w-[52rem] mx-auto rounded-xl">
                        <Cover />

                        <Information />
                    </div>
                </MainContainer>
            </div>
            <Footer nocontent />
        </>
    );
}

function Cover() {
    return (
        <div className="bg-[url('./assets/img-cover3.png')] bg-cover rounded-l-xl overflow-hidden inline-block">
            <div className="relative h-[28rem] w-96">
                <div className="absolute w-full h-full bg-black opacity-40"></div>
                <div className="absolute grid w-full h-full px-6 py-4 place-content-center">
                    <h3 className="text-xl text-center text-slate-200">
                        Get more information by contacting our marketing team
                    </h3>
                </div>
            </div>
        </div>
    );
}

function Information() {
    const info_items = [
        {
            title: 'Address',
            text: [
                'Kawasan Industri Jababeka III, Jl. Tekno Raya No. A-5A. Pasirgombong. Cikarang Utara, Kab. Bekasi, Jawa Barat',
            ],
        },
        {
            title: 'Email',
            text: ['marketing@shinheung.co.id'],
        },
        {
            title: 'Phone',
            text: ['02189842606', '02189842607'],
        },
    ];

    return (
        <div className="w-2/5">
            <div className="mb-20">
                <SectionTitle title="Contact Us" />
            </div>
            <div>
                {info_items.map((value) => (
                    <div className="flex mb-5">
                        <div className="flex-none">
                            <img src={yellow_slash} alt="" />
                        </div>
                        <div>
                            <h6 className="font-medium uppercase">
                                {value.title}
                            </h6>

                            {value.text.map((value) => {
                                return <p>{value}</p>;
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
