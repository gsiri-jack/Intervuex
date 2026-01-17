import React from "react";
import HomePage from "./home/HomePage";
import LoginPage from "./login/LoginPage";

const AppRoutes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    }
];

export { AppRoutes };