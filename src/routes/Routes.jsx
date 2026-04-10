import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/Homepage/HomePage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";
import PageToReload from "../pages/pageTOReload/PageToReload";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/bookdetails/:id",
                element: <BookDetails />,
                loader: () => fetch("/booksData.json"),
            },
            {
                path: "/page-to-reads",
                element: <PageToReload />
            }
        ],
        errorElement: <ErrorPage />,
    },
]);
