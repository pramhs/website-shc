export default function Heading({ children }) {
    return <div className="mb-20">{children}</div>;
}

function Container({ children }) {
    return (
        <div className="w-4/5 mx-auto">
            <div className="w-2/5">{children} </div>
        </div>
    );
}

function ImageCover({ children, className }) {
    return <div className={`${className} bg-cover py-12`}>{children}</div>;
}

function Text({ className, children }) {
    return <h3 className={`${className} text-2xl font-medium`}>{children}</h3>;
}

Heading.ImageCover = ImageCover;
Heading.Container = Container;
Heading.Text = Text;
