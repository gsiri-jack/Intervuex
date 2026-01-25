import React from "react";
import HomePage from "./home/HomePage";
import LoginPage from "./login/LoginPage";
import SignInPage from "./signIn/SignInPage";
import UserDashboard from "./userDashboard/UserDashboard";

const AppRoutes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/signIn",
        element: <SignInPage />
    },
    {
        path: "/user",
        element: <UserDashboard />
    }
];

export { AppRoutes };