import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./views/Login";
import Chat from "./views/Chat";
import User from "./views/Profile";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div className="container container--app">
        <Route path="/" exact component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={User} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
