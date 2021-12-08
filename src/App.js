import "./App.css";

import { Container, Grid } from "@mui/material";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import PaymentPage from "./pages/PaymentPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsResultPage from "./pages/ProductsResultPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#303537",
    },
    secondary: {
      main: "#5E6669",
    },
  },
  text:{
    primary:"#303537",
    secondary:"#5E6669",
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />

          <Switch>
            <Route path="/" exact component={Homepage} />
            <div className="container">
              <Route path="/Gio-hang" exact component={CartPage} />
              <Route path="/Thanh-toan" exact component={PaymentPage} />
              <Route path="/Tai-khoan/:child" exact component={AccountPage} />
              <Route path="/Ket-qua/:path" exact component={ProductsResultPage} />
              <Route path="/id/:id" exact component={ProductDetailPage} />
            </div>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
