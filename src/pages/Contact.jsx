import yellow_slash from '../assets/element1.png';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';

const Cover = () => {
    return (
        <div className="bg-[url('./assets/img-cover3.png')] bg-cover rounded-xl overflow-hidden inline-block">
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
};

const Information = () => {
    const info_items = [
        {
            title: 'Address',
            text: 'Kawasan Industri Jababeka III, Jl. Tekno Raya No. A-5A. Pasirgombong. Cikarang Utara, Kab. Bekasi, Jawa Barat',
        },
        {
            title: 'Email',
            text: 'marketing@shinheung.co.id',
        },
        {
            title: 'Phone',
            text: ['02189842606'],
        },
    ];

    return (
        <div className="w-2/5">
            <SectionTitle title="Contact Us" />
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
                            <p>{value.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Contact = () => {
    return (
        <>
            <div className="mt-20 mb-20">
                <Container>
                    <div className="flex items-center justify-center gap-x-8">
                        <Cover />
                        <Information />
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    );
};
export default Contact;
