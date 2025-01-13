const Announcements = () => {
    return (
        <div className='bg-yogaBlue rounded-xl w-full p-4'>
            <div className='flex justify-between aligm-center'>
                <h1 className='text-lg font-semibold'>Events</h1>
                <span className="text-yogaGray text-xs">view all</span>
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <div className="bg-yogaYellow rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium ">Lorem ipsum dollar sit</h2>
                        <span className="text-xs text-yogaGray bg-white rounded-mp px-1 py-1">10-01-2025</span>
                    </div>
                    <p className="text-sm text-yogaGray mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="bg-yogaYellow rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium ">Lorem ipsum dollar sit</h2>
                        <span className="text-xs text-yogaGray bg-white rounded-mp px-1 py-1">10-01-2025</span>
                    </div>
                    <p className="text-sm text-yogaGray mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="bg-yogaYellow rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium ">Lorem ipsum dollar sit</h2>
                        <span className="text-xs text-yogaGray bg-white rounded-mp px-1 py-1">10-01-2025</span>
                    </div>
                    <p className="text-sm text-yogaGray mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    );
}
export default Announcements; 