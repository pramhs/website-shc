import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';

export default function Service() {
    return (
        <>
            {/* navigation button */}
            <MainContainer className={'mb-20'}>
                <div className="flex pt-28 space-x-6">
                    <div className="w-1/4">
                        <button className="text-slate-200 uppercase px-6 py-6 bg-orange-600 w-full">
                            Plastic Injection
                        </button>
                    </div>
                    <div className="w-1/4">
                        <button className="text-slate-200 uppercase px-6 py-6 bg-purple-600 w-full">
                            Metal Stamping
                        </button>
                    </div>
                    <div className="w-1/4">
                        <button className="text-slate-200 uppercase px-6 py-6 bg-teal-600 w-full">
                            Molding Design
                        </button>
                    </div>
                    <div className="w-1/4">
                        <button className="text-slate-200 uppercase px-6 py-6 bg-pink-600 w-full">
                            Assembly
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                        </h1>
                    </div>

                    <hr className="border-slate-600 w-2/5" />
                </div>
                <div className="text-center px-4 text-slate-800 mb-20">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis quam, obcaecati, dolorum culpa doloribus quia
                    quaerat assumenda nostrum impedit ad, delectus deserunt
                    nihil perferendis veritatis explicabo dignissimos! Veniam,
                    molestiae facere?
                </div>
                <hr className="w-full border-slate-600" />
            </MainContainer>

            <MainContainer className={'mb-20'}>
                <div className="grid grid-cols-2 gap-x-12 gap-y-14 text-sm">
                    <div className="">
                        <div className="py-2">
                            Title - Lorem ipsum dolor sit amet consectetur
                            adipisicing.
                        </div>
                        <div className="w-full h-96 bg-slate-300 border border-slate-500"></div>
                    </div>
                    <div className="">
                        <div className="py-2">
                            Title - Lorem ipsum dolor sit amet consectetur
                            adipisicing.
                        </div>
                        <div className="w-full h-96 bg-slate-300 border border-slate-500"></div>
                    </div>
                    <div className="">
                        <div className="py-2">
                            Title - Lorem ipsum dolor sit amet consectetur
                            adipisicing.
                        </div>
                        <div className="w-full h-96 bg-slate-300 border border-slate-500"></div>
                    </div>
                    <div className="">
                        <div className="py-2">
                            Title - Lorem ipsum dolor sit amet consectetur
                            adipisicing.
                        </div>
                        <div className="w-full h-96 bg-slate-300 border border-slate-500"></div>
                    </div>
                    <div className="">
                        <div className="py-2">
                            Title - Lorem ipsum dolor sit amet consectetur
                            adipisicing.
                        </div>
                        <div className="w-full h-96 bg-slate-300 border border-slate-500"></div>
                    </div>
                </div>
            </MainContainer>

            <Footer />
        </>
    );
}
