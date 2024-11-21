const SectionTitle = ({ title }) => {
    return (
        <>
            <div className="mx-auto mb-16">
                <h3 className="text-2xl font-medium text-center">{title}</h3>
                <div className="w-24 h-1 mx-auto bg-red-700"></div>
            </div>
        </>
    );
};
export default SectionTitle;
