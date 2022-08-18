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
                        <Route
                            path="*"
                            element={<Navigate to="/dashboard" replace />}
                        />
                    </Route>
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
