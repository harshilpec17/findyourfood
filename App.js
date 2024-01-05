import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";
import AboutUs from "./src/Component/AboutUs";
import { store } from "./src/Redux/store";
import { Provider } from "react-redux";
import Offers from "./src/Component/Offers";
import Menu from "./src/Component/Menu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Cart from "./src/Component/Cart";

const Contact = lazy(() => import("./src/Component/ContactUs"));

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />,
          </Suspense>
        ),
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu/:id",
        element: <Menu />,
      },
    ],
    // errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
