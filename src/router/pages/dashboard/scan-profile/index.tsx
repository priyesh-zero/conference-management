const ScanProfile = () => {
    return (
        <div className="p-8 w-full h-screen">
            <h2 className="mb-8 text-5xl text-center">Scan the User Code</h2>
            <div className="w-fit m-auto">
                <div className="aspect-square w-96 bg-gray-400 rounded-xl flex justify-center items-center">
                    <div>Scan QR code</div>
                </div>
            </div>
        </div>
    );
};

export default ScanProfile;
