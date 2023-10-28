import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";

import { publicRoutes } from "./routers";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map((route) => {
          const Layout = route.layout === undefined ? Fragment : MainLayout;
          const Page = route.component;
          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
