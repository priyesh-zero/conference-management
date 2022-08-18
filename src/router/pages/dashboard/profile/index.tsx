import { useAtom } from "jotai";
import { QRCodeSVG } from "qrcode.react";
import { userAtom } from "../../../../atom/user";

const Profile = () => {
    const [user] = useAtom(userAtom);

    return (
        <div className="p-8 w-full h-screen">
            <h2 className="mb-8 text-5xl text-center">{user?.name}</h2>
            <div className="w-fit m-auto">
                <QRCodeSVG size={256} value={user!.id} />
            </div>
        </div>
    );
};

export default Profile;
