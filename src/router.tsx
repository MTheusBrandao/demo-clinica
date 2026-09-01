import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./routes/__root";
import { HomePage } from "./routes/home";
import { NotFoundPage } from "./routes/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
