import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

import AccountPage from "./pages/AccountPage/AccountPage";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import { Button } from "@mui/material";
import CartPage from "./pages/CartPage";
import CategoryCasePage from "./pages/ProductPage/CategoryCasePage";
import CollectionDialog from "./components/Dialogs/AddIntoCollection/CollectionDialog";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import PaymentPage from "./pages/PaymentPage";
import ProductDetailPage from "./pages/ProductPage/ProductDetailPage";
import ProductsResultPage from "./pages/ProductPage/ProductsResultPage";
import { ScrollButton } from "./components/Buttons/ScrollButton";

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
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Breadcrumbs />
          <CollectionDialog />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <div
              className="containermain"
              style={{ backgroundColor: "#FCFCFC" }}
            >
              <Route path="/Gio-hang" exact component={CartPage} />
              <Route path="/Thanh-toan" exact component={PaymentPage} />
              {/* <Route path="/Ca-nhan/:child" exact component={AccountPage} /> */}
              <Route
                path="/Ca-nhan"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Ca-nhan" />
                )}
              />
              <Route
                path="/Ca-nhan/Tai-khoan"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Tai-khoan" />
                )}
              />
              <Route
                path="/Ca-nhan/Tai-khoan/Ho-so"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Ho-so" />
                )}
              />
              <Route
                path="/Ca-nhan/Tai-khoan/Dia-chi"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Dia-chi" />
                )}
              />
              <Route
                path="/Ca-nhan/Tai-khoan/Chi-so-co-the"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Chi-so-co-the" />
                )}
              />
              <Route
                path="/Ca-nhan/Tai-khoan/Doi-mat-khau"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Doi-mat-khau" />
                )}
              />
              <Route
                path="/Ca-nhan/Don-mua"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Don-mua" />
                )}
              />
              <Route
                path="/Ca-nhan/Diem-thuong"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Diem-thuong" />
                )}
              />
              <Route
                path="/Ca-nhan/Danh-sach-quan-tam"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Danh-sach-quan-tam" />
                )}
              />
              <Route
                path="/Ca-nhan/Thong-bao"
                exact
                render={(props) => (
                  <AccountPage {...props} accountRoute="Thong-bao" />
                )}
              />
              <Route
                path="/Ket-qua/:path"
                exact
                component={ProductsResultPage}
              />
              <Route path="/id/:id" exact component={ProductDetailPage} />
              <Route path="/Ao/Ao-thun" exact component={CategoryCasePage} />
              <Route path="/Ao/Ao-khoac" exact component={CategoryCasePage} />
              <Route path="/Ao/So-mi" exact component={CategoryCasePage} />
              <Route
                path="/Ao/Ao-trum-dau"
                exact
                component={CategoryCasePage}
              />
              <Route path="/Ao/Ao-tay-dai" exact component={CategoryCasePage} />
              <Route path="/Quan/Quan-dai" exact component={CategoryCasePage} />
              <Route
                path="/Quan/Quan-ngan"
                exact
                component={CategoryCasePage}
              />
            </div>
          </Switch>
        </Router>
        <ScrollButton />
      </ThemeProvider>
    </>
  );
}

export default App;
