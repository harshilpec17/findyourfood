import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";
import { store } from "./src/Redux/store";
import { Provider } from "react-redux";

import Menu from "./src/Component/Menu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Cart from "./src/Component/Cart";
import Error from "./src/Component/Error";
import Footer from "./src/Component/Footer";

const Contact = lazy(() => import("./src/Component/ContactUs"));

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <div className="App overflow-hidden">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu/:id",
        element: <Menu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
