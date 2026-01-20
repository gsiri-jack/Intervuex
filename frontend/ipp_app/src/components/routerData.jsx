import React from "react";
import HomePage from "./home/HomePage";
import LoginPage from "./login/LoginPage";
import SignInPage from "./signIn/SignInPage"

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
    }
];

export { AppRoutes };