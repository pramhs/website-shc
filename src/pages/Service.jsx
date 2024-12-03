import { useState } from 'react';
import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';

export default function Service() {
    const arr = [
        {
            section: 'Metal Stamping',
            title: 'Heading title metal stamping',
            paragraph:
                'Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan purus sed scelerisque fusce nibh erat quisque tellus. Taciti leo porta hac lectus, orci primis molestie. Amet dignissim ex aliquam in ultricies. Enim aenean accumsan congue senectus dictumst. Dignissim magna quis erat sapien porttitor eget.',
            image: [
                { title: 'Image Title 1', img: 'path.png' },
                { title: 'Image Title 2', img: 'path.png' },
            ],
        },
        {
            section: 'Plastic Injection',
            title: 'Heading title plastic injection',
            paragraph:
                'Enim aenean accumsan congue senectus dictumst. Dignissim magna quis erat sapien porttitor eget.',
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
            title: 'Heading Title Assembly',
            paragraph:
                'Enim aenean accumsan congue senectus dictumst. Dignissim magna quis erat sapien porttitor eget',
            image: [
                { title: 'Image Title 4', img: 'path.png' },
                { title: 'Image Title 5', img: 'path.png' },
                { title: 'Image Title 6', img: 'path.png' },
            ],
        },
        {
            section: 'Molding Design',
            title: 'Heading title Molding Design',
            paragraph:
                'Enim aenean accumsan congue senectus dictumst. Dignissim magna quis erat sapien porttitor eget',
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
            <MainContainer className={'mb-20'}>
                <div className="flex pt-28 gap-x-6">
                    <div className="w-1/4">
                        <button
                            className="text-slate-200 uppercase px-6 py-6 bg-orange-700 w-full"
                            onClick={() => handleClick(0)}
                        >
                            Metal Stamping
                        </button>
                    </div>
                    <div className="w-1/4">
                        <button
                            className="text-slate-200 uppercase px-6 py-6 bg-purple-700 w-full"
                            onClick={() => handleClick(1)}
                        >
                            Plastic Injection
                        </button>
                    </div>
                    <div className="w-1/4">
                        <button
                            className="text-slate-200 uppercase px-6 py-6 bg-teal-700 w-full"
                            onClick={() => handleClick(2)}
                        >
                            Assembly
                        </button>
                    </div>
                    <div className="w-1/4">
                        <button
                            className="text-slate-200 uppercase px-6 py-6 bg-pink-700 w-full"
                            onClick={() => handleClick(3)}
                        >
                            Molding Design
                        </button>
                    </div>
                </div>
            </MainContainer>

            {/* main content */}
            <MainContainer className={'mb-28'}>
                <div className="flex items-center mb-20">
                    <hr className="border-slate-600 w-2/5" />

                    <div className="w-3/5">
                        <h1 className="uppercase text-3xl text-center font-medium text-slate-800">
                            {example.title}
                        </h1>
                    </div>

                    <hr className="border-slate-600 w-2/5" />
                </div>
                <div className="text-center px-4 text-slate-800 mb-20">
                    {example.paragraph}
                </div>
                <hr className="w-full border-slate-600" />
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
