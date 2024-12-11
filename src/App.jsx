import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./shared/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Basket from "./pages/basket/Basket.jsx";
import Wishlist from "./pages/wishlist/Wishlist.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MainContext from "./context/MainContext.jsx";

function App() {
  return (
    <>
      <MainContext>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route
                path="/"
                index
                element={
                  <>
                    <Helmet>
                      <title>Home</title>
                    </Helmet>
                    <Home />
                  </>
                }
              />
              <Route
                path="/basket"
                element={
                  <>
                    <Helmet>
                      <title>Basket</title>
                    </Helmet>
                    <Basket />
                  </>
                }
              />
              <Route
                path="/wishlist"
                element={
                  <>
                    <Helmet>
                      <title>Wishlist</title>
                    </Helmet>
                    <Wishlist />
                  </>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
      </MainContext>
    </>
  );
}

export default App;
