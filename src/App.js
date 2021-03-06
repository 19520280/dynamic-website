import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { useMediaQuery, useTheme } from "@mui/material";

import AccountPage from "./pages/AccountPage/AccountPage";
import AuthContextProvider from "./context/context.js";
import BlogPage from "./pages/BlogPage/BlogPage";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import CartPage from "./pages/CartPage";
import CategoryCasePage from "./pages/ProductPage/CategoryCasePage";
import ChatButton from "./components/Buttons/ChatButton";
import CollectionDetailPage from "./pages/CollectionPage/CollectionDetailPage";
import CollectionDialog from "./components/Dialogs/CollectionDialog/CollectionDialog";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import CollectionProductPage from "./pages/CollectionPage/CollectionProductPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import OrdersCase from "./pages/UserPage/OrdersCase";
import PaymentPage from "./pages/PaymentPage";
import PointCase from "./pages/UserPage/PointCase";
import ProductDetailPage from "./pages/ProductPage/ProductDetailPage";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import { ScrollButton } from "./components/Buttons/ScrollButton";
import WishListDetailPage from "./pages/UserPage/WishListDetailPage";
import WishListPage from "./pages/UserPage/WishListPage";

let theme = createTheme({
  palette: {
    primary: {
      main: "#303537",
    },
    secondary: {
      main: "#5E6669",
    },
  },
  text: {
    primary: "#303537",
    secondary: "#313537",
  },
  backgroundColor: "#FCFCFC",
  shadows: ["none"],
});
theme = responsiveFontSizes(theme);
function App() {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Breadcrumbs />
          <CollectionDialog />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/Bo-suu-tap" exact component={CollectionPage} />
            <Route
              path="/Bo-suu-tap/Mua-dong-2021"
              exact
              component={CollectionDetailPage}
            />
            <Route
              path="/Bo-suu-tap/Mua-dong-2021/Chi-tiet-san-pham"
              exact
              component={CollectionProductPage}
            />
            <Route
              path="/Bo-suu-tap/Tet-Canh-Dan-2022"
              exact
              component={CollectionDetailPage}
            />
            <Route
              path="/Bo-suu-tap/Tet-Canh-Dan-2022/Chi-tiet-san-pham"
              exact
              component={CollectionProductPage}
            />
            <Route
              path="/Ket-qua-tim-kiem"
              exact
              component={CategoryCasePage}
            />

            <Route path="/Blog" exact component={BlogPage} />
            <Route path="/Ao" exact component={CategoryCasePage} />
            <Route path="/Ao/Ao-thun" exact component={CategoryCasePage} />
            <Route path="/Ao/Ao-khoac" exact component={CategoryCasePage} />
            <Route path="/Ao/So-mi" exact component={CategoryCasePage} />
            <Route path="/Ao/Ao-trum-dau" exact component={CategoryCasePage} />
            <Route path="/Ao/Ao-tay-dai" exact component={CategoryCasePage} />
            <Route path="/Quan" exact component={CategoryCasePage} />
            <Route path="/Quan/Quan-dai" exact component={CategoryCasePage} />
            <Route path="/Quan/Quan-ngan" exact component={CategoryCasePage} />
            <Route path="/Phu-kien" exact component={CategoryCasePage} />
            <Route path="/Phu-kien/Ba-lo" exact component={CategoryCasePage} />
            <Route path="/Phu-kien/Tui" exact component={CategoryCasePage} />
            <Route path="/Phu-kien/Vi" exact component={CategoryCasePage} />
            <Route path="/Phu-kien/Non" exact component={CategoryCasePage} />
            <ProtectedRoute
              path="/Ca-nhan/Danh-sach-quan-tam"
              exact
              component={WishListPage}
            />
            <ProtectedRoute
              path="/Ca-nhan/Danh-sach-quan-tam/Chi-tiet"
              exact
              component={WishListDetailPage}
            />
            <ProtectedRoute
              path="/Ca-nhan/Don-mua"
              exact
              component={OrdersCase}
            />

            <ProtectedRoute
              path="/Ca-nhan/Diem-thuong"
              exact
              component={PointCase}
            />

            <div
              className="containermain"
              style={{ backgroundColor: "#FCFCFC" }}
            >
              <Route path="/Lien-he" exact component={ContactPage} />
              <Route path="/Gio-hang" exact component={CartPage} />
              <Route path="/Thanh-toan" exact component={PaymentPage} />
              {/* <Route path="/Ca-nhan/:child" exact component={AccountPage} /> */}
              <ProtectedRoute
                path="/Ca-nhan"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Ca-nhan" />
                )}
              />
              <ProtectedRoute
                path="/Ca-nhan/Tai-khoan"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Tai-khoan" />
                )}
              />
              <ProtectedRoute
                path="/Ca-nhan/Tai-khoan/Ho-so"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Ho-so" />
                )}
              />
              <ProtectedRoute
                path="/Ca-nhan/Tai-khoan/Dia-chi"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Dia-chi" />
                )}
              />
              <ProtectedRoute
                path="/Ca-nhan/Tai-khoan/Chi-so-co-the"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Chi-so-co-the" />
                )}
              />
              <ProtectedRoute
                path="/Ca-nhan/Tai-khoan/Doi-mat-khau"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Doi-mat-khau" />
                )}
              />
              <ProtectedRoute
                path="/Ca-nhan/Don-mua/Chi-tiet"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Order-tracking" />
                )}
              />
              {/* <ProtectedRoute
                path="/Ca-nhan/Diem-thuong"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Diem-thuong" />
                )}
              />
              <ProtectedRoute
                path="/Ca-nhan/Danh-sach-quan-tam"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Danh-sach-quan-tam" />
                )}
              />
              <ProtectedRoute
                path="/Ca-nhan/Thong-bao"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Thong-bao" />
                )}
              /> */}

              <Route
                path="/Ao/Ao-thun/:path"
                exact
                component={ProductDetailPage}
              />
              <Route
                path="/Quan/Quan-ngan/:path"
                exact
                component={ProductDetailPage}
              />
            </div>
          </Switch>
          <Footer />
        </Router>

        {isMobile?null:<ChatButton />}
        <ScrollButton isMobile={isMobile} />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
