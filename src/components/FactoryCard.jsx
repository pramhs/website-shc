import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FactoryCard({ children }) {
    return <div className="relative w-full group">{children}</div>;
}

function Title({ children }) {
    return (
        <div className="p-4 bg-slate-900">
            <h5 className="font-medium text-slate-200">{children}</h5>
        </div>
    );
}

function Body({ background }) {
    return (
        <div className="w-full">
            <div className="w-full">
                <img src={background} alt="" className="w-full" />
            </div>
        </div>
    );
}

function Container({ children }) {
    return (
        <div className="absolute invisible bottom-0 w-full bg-white border-l-2 border-r-2 group-hover:visible">
            {children}
        </div>
    );
}

function Content({ address }) {
    return <div className="px-4 py-4">{address}</div>;
}

function Footer({ children }) {
    return (
        <>
            <div className="flex gap-x-10 px-4 py-4 bg-slate-100">
                {children}
            </div>
            <div className="h-3 border-b-2 border-l-2 border-r-2 bg-slate-100"></div>
        </>
    );
}
function FooterContent({ icon, title, surfaceArea }) {
    return (
        <div className="flex items-center gap-x-2">
            <div className="">
                <FontAwesomeIcon icon={icon} size="xl" />
            </div>
            <div>
                <h6 className="text-sm font-semibold ">{title}</h6>
                <p className="text-sm font-semibold">{surfaceArea} m2</p>
            </div>
        </div>
    );
}

FactoryCard.Title = Title;
FactoryCard.Body = Body;
FactoryCard.Content = Content;
FactoryCard.Footer = Footer;
FactoryCard.Container = Container;
FactoryCard.FooterContent = FooterContent;
