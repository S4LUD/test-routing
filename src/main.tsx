import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Root component with theme switching
const HomePage = () => {
  return <div>Homepage</div>;
};

const LoginPage = () => {
  return <div>LoginPage</div>;
};

export default function Root() {
  // Define routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/signin",
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

// Render the root component
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
