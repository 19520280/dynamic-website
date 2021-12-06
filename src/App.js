import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Homepage from "./pages/Homepage";

const theme = createTheme({
  palette: {
 
    primary: {
      main:"#303537",
    },
    secondary: {
      main: "#5E6669",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
