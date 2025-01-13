const Pagination = () => {
    return (
        <div className="p-4 flex items-center justify-between">
            <button disabled className="py-2 px-4 rounded-md bg-yogaGreen text-white text-xs font-semibold disabled:opacity-50 cursor-not-allowed">Prev</button>
            <div className="flex items-center gap-2 text-sm text-yogaGreen">
                <button className="px-2 rounded-md bg-yogaBlue">1</button>
                <button className="px-2 rounded-md">2</button>
                <button className="px-2 rounded-md">3</button>
                ...
                <button className="px-2 rounded-md">10</button>
            </div>
            <button className="py-2 px-4 rounded-md bg-yogaGreen text-white text-xs font-semibold disabled:opacity-50 cursor-not-allowed">Next</button>
        </div>
    );
};

export default Pagination