import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Filmy from "./pages/signin";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/filmy" component={Filmy} exact />
      </Switch>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Smokum",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Smokum",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </Router>
  );
}

export default App;
