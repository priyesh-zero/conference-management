import { AppShell, Avatar } from "@pega/cosmos-react-core";
import { useAtom } from "jotai";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { userAtom } from "../../../atom/user";

const DashboardLayout = () => {
    const [user, setUser] = useAtom(userAtom);
    const navigator = useNavigate();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="h-screen w-full">
            <AppShell
                defaultExpanded={true}
                appInfo={{
                    appName: user.isStaff
                        ? "ACME Staff Dashboard"
                        : "ACME Attendee Dashboard",
                    imageSrc:
                        "https://upload.wikimedia.org/wikipedia/commons/7/7c/ACME%E2%80%93protocol-icon.png",
                }}
                main={<Outlet></Outlet>}
                links={[
                    {
                        id: "01",
                        name: user.isStaff ? "Schedule" : "Your Schedule",
                        href: "",
                        icon: "calendar-range",
                        onClick: () => navigator("/dashboard"),
                    },
                    {
                        id: "02",
                        name: user.isStaff ? "Add Event" : "Buy Passes",
                        href: "",
                        icon: "dataviz-flip-counter",
                        onClick: () =>
                            navigator(
                                user.isStaff ? "add-event" : "buy-passes"
                            ),
                    },
                ]}
                operator={{
                    name: user.name,
                    avatar: <Avatar shape="circle" size="m" name={user.name} />,
                    actions: [
                        {
                            primary: user.isStaff
                                ? "Scan Profile Id"
                                : "Profile ID",
                            id: "profile-id",
                            onClick: () =>
                                navigator(
                                    user.isStaff
                                        ? "scan-profile-id"
                                        : "profile-id"
                                ),
                        },
                        {
                            primary: "Log out",
                            id: "logout",
                            onClick: () => setUser(null),
                        },
                    ],
                }}
            />
        </div>
    );
};

export default DashboardLayout;
