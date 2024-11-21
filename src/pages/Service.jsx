import press_machine from '../assets/press.png';
import injection_machine from '../assets/injection.png';
import cmm_machine from '../assets/cmm.png';
import image1 from '../assets/image-45.png';
import image2 from '../assets/image-46.png';
import image3 from '../assets/image-47.png';
const Service = () => {
    return (
        <>
            <div className="w-4/5 mx-auto mb-20">
                <div className="flex items-center mb-20 gap-x-8">
                    <div className="flex-none w-2/4">
                        <img src={injection_machine} alt="" />
                    </div>
                    <div className="">
                        <p>
                            With superior production capacity, we are able to
                            fulfill your needs efficiently and with the best
                            quality.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center gap-x-16">
                    <div className="overflow-hidden rounded-md size-52">
                        <img src={image3} className="h-full" />
                    </div>
                    <div className="overflow-hidden rounded-md size-52">
                        <img src={image2} className="h-full" />
                    </div>
                    <div className="overflow-hidden rounded-md size-52">
                        <img src={image3} className="h-full" />
                    </div>
                </div>
            </div>

            <div className="py-12 mb-20 bg-gradient-to-b from-emerald-50 to-teal-50">
                <div className="w-4/5 mx-auto">
                    <div className="flex items-center mb-20 gap-x-8">
                        <div className="flex-none w-2/4">
                            <img src={cmm_machine} alt="" />
                        </div>
                        <div className="">
                            <p>
                                With superior production capacity, we are able
                                to fulfill your needs efficiently and with the
                                best quality.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-x-16">
                        <div className="overflow-hidden rounded-md size-52">
                            <img src={image3} className="h-full" />
                        </div>
                        <div className="overflow-hidden rounded-md size-52">
                            <img src={image2} className="h-full" />
                        </div>
                        <div className="overflow-hidden rounded-md size-52">
                            <img src={image3} className="h-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-4/5 mx-auto mb-20">
                <div className="flex items-center mb-20 gap-x-8">
                    <div className="w-2/4">
                        <img src={press_machine} alt="" />
                    </div>
                    <div className="">
                        <p>
                            With superior production capacity, we are able to
                            fulfill your needs efficiently and with the best
                            quality.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center gap-x-16">
                    <div className="overflow-hidden rounded-md size-52">
                        <img src={image3} className="h-full" />
                    </div>
                    <div className="overflow-hidden rounded-md size-52">
                        <img src={image2} className="h-full" />
                    </div>
                    <div className="overflow-hidden rounded-md size-52">
                        <img src={image3} className="h-full" />
                    </div>
                </div>
            </div>
            <div></div>
        </>
    );
};

export default Service;
