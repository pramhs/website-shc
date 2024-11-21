import Container from './Container';

const Copyright = () => {
    return (
        <div className="bg-primary">
            <div className="w-4/5 py-6 mx-auto">
                <p className="text-slate-200">
                    Copyright © 2024  PT Shin Heung Indonesia. All rights
                    reserved.
                </p>
            </div>
        </div>
    );
};

const Content = () => {
    return (
        <div className="bg-slate-100">
            <Container>
                <div className="py-16">
                    <div className="w-2/5 mb-8">
                        <p>
                            With our experience and dedication, we always
                            deliver the best results for our customers.
                        </p>
                    </div>
                    <button className="px-4 py-2 bg-primary text-slate-200">
                        Contact Us
                    </button>
                </div>
            </Container>
        </div>
    );
};
const Footer = () => {
    return (
        <>
            <Content />
            <Copyright />
        </>
    );
};
export default Footer;
