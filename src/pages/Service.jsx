import { useState } from 'react';
import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';

export default function Service() {
    const arr = [
        {
            section: 'Metal Stamping',
            title: 'Quality, Speed, and Accuracy',
            paragraph: [
                'We deliver the best quality by using advanced machinery and high-quality materials, resulting in durable components.',
                'We also ensure high production speeds, allowing us to meet tight deadlines without compromising on quality.',
                'Lastly, accuracy is our main focus, with precision technology that ensures every component conforms to the desired specifications.',
            ],
            image: [
                { title: 'Image Title 1', img: 'path.png' },
                { title: 'Image Title 2', img: 'path.png' },
            ],
        },
        {
            section: 'Plastic Injection',
            title: 'Maximize Production Process',
            paragraph: [
                'we optimize every step in the production process to achieve the best results with high efficiency.',
                'With advanced technology and structured management, we ensure that every stage of production runs smoothly, minimizing time and cost wastage and improving output quality.',
                'This approach allows us to meet large volume demands without compromising accuracy or speed, providing you with a more productive and profitable solution.',
            ],
            image: [
                { title: 'Image Title 1', img: 'path.png' },
                { title: 'Image Title 2', img: 'path.png' },
                { title: 'Image Title 3', img: 'path.png' },
                { title: 'Image Title 4', img: 'path.png' },
                { title: 'Image Title 5', img: 'path.png' },
                { title: 'Image Title 6', img: 'path.png' },
            ],
        },
        {
            section: 'Assembly',
            title: 'Efficient and Cost Effective',
            paragraph: [
                'We prioritize efficiency in every stage of production, making optimal use of time and resources to produce products quickly and precisely.',
            ],
            image: [
                { title: 'Image Title 4', img: 'path.png' },
                { title: 'Image Title 5', img: 'path.png' },
                { title: 'Image Title 6', img: 'path.png' },
            ],
        },
        {
            section: 'Molding Design',
            title: 'From Design to Mass Production',
            paragraph: [
                'from the detailed planning and design stage to efficient large-scale production.',
                'Using the latest technology and integrated processes, we ensure that each component produced not only meets technical specifications, but is also produced with high quality and consistency, ready to meet large market demands.',
            ],
            image: [{ title: 'image 1', img: 'path.png' }],
        },
    ];

    const [example, setExample] = useState(arr[0]);
    const handleClick = (a) => {
        setExample(arr[a]);
        console.log(example);
    };

    return (
        <>
            {/* navigation button */}
            <MainContainer className={'mb-10'}>
                <div className="flex pt-28 gap-x-6">
                    <div className="w-1/4">
                        <button
                            className="text-slate-200 uppercase px-6 py-6 bg-gray-800 w-full"
                            onClick={() => handleClick(0)}
                        >
                            Metal Stamping
                        </button>
                    </div>
                    <div className="w-1/4">
                        <button
                            className="text-slate-200 uppercase px-6 py-6 bg-gray-800 w-full"
                            onClick={() => handleClick(1)}
                        >
                            Plastic Injection
                        </button>
                    </div>
                    <div className="w-1/4">
                        <button
                            className="text-slate-200 uppercase px-6 py-6 bg-gray-800 w-full"
                            onClick={() => handleClick(2)}
                        >
                            Assembly
                        </button>
                    </div>
                    <div className="w-1/4">
                        <button
                            className="text-slate-200 uppercase px-6 py-6 bg-gray-800 w-full"
                            onClick={() => handleClick(3)}
                        >
                            Molding Design
                        </button>
                    </div>
                </div>
            </MainContainer>

            {/* main content */}
            <MainContainer className={'mb-20 bg-gray-200/80 py-10 px-4'}>
                <div className="flex items-center mb-5">
                    <hr className="border-slate-300 w-2/5" />

                    <div className="w-3/5">
                        <h1 className="uppercase text-4xl text-center font-semibold text-red-600">
                            {example.section}
                        </h1>
                    </div>

                    <hr className="border-slate-300 w-2/5" />
                </div>
                <div className="mb-5">
                    <h2 className="text-2xl text-center font-medium text-slate-800">
                        {example.title}
                    </h2>
                </div>
                <div className="text-center px-10 text-gray-600 mb-10 flex flex-col gap-y-2">
                    {example.paragraph.map((value, key) => (
                        <p>{value}</p>
                    ))}
                </div>
                <hr className="w-full border-slate-300" />
            </MainContainer>

            <MainContainer className={'mb-20'}>
                <div className="grid grid-cols-2 gap-x-12 gap-y-14 text-sm">
                    {example.image.map((value, key) => {
                        return (
                            <div className="" key={key}>
                                <div className="py-2">{value.title}</div>
                                <div className="w-full h-96 bg-slate-300 border border-slate-500">
                                    <img
                                        src={value.img}
                                        alt=""
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </MainContainer>

            <Footer />
        </>
    );
}
