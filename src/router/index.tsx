import { useAtom } from "jotai";
import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { userAtom } from "../atom/user";
import { Loader } from "../components/loader";

// Home
const Home = lazy(() => import("./pages/home"));

// Dashboard
const DashboardLayout = lazy(() => import("../components/dashboard/layout"));
const Schedule = lazy(() => import("./pages/dashboard/schedule"));
const UserSchedule = lazy(() => import("./pages/dashboard/user-schedule"));
const BuyPass = lazy(() => import("./pages/dashboard/buy-pass"));
const Profile = lazy(() => import("./pages/dashboard/profile"));
const ScanProfile = lazy(() => import("./pages/dashboard/scan-profile"));
const AddEvent = lazy(() => import("./pages/dashboard/add-event"));

// Login
const LoginPage = lazy(() => import("./pages/login"))

// Register
const RegisterPage = lazy(() => import("./pages/register"))

export const Router = () => {
    const [user] = useAtom(userAtom);
    return (
        <Suspense fallback={<Loader />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route
                            index
                            element={
                                user?.isStaff ? <Schedule /> : <UserSchedule />
                            }
                        />
                        {!user?.isStaff && (
                            <Route path="buy-passes" element={<BuyPass />} />
                        )}
                        {!user?.isStaff && (
                            <Route path="profile-id" element={<Profile />} />
                        )}
                        {user?.isStaff && (
                            <Route
                                path="scan-profile-id"
                                element={<ScanProfile />}
                            />
                        )}
                        {user?.isStaff && (
                            <Route
                                path="add-event"
                                element={<AddEvent />}
                            />
                        )}
                        <Route
                            path="*"
                            element={<Navigate to="/dashboard" replace />}
                        />
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
