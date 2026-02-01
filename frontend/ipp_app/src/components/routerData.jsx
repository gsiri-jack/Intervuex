import React from "react";
import HomePage from "./home/HomePage";
import LoginPage from "./login/LoginPage";
import SignInPage from "./signIn/SignInPage";
import UserDashboard from "./userDashboard/UserDashboard";
import SearchBar from "./ui/searchBar/SearchBar";

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
    },
     {
        path: "/search",
        element: <SearchBar />
    }
];

export { AppRoutes };