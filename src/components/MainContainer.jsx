export default function MainContainer({ children, className }) {
    return (
        <>
            <div className={`${className} w-4/5 mx-auto antialiased`}>
                {children}
            </div>
        </>
    );
}
