import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./views/Login";
import Chat from "./views/Chat";
import Profile from "./views/Profile";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(true);
  return (
    <Router>
      <Header />
      <div className="container container--app">
        <Route
          path="/"
          exact
          component={() => (
            <Login
              validForm={() => {
                setLoggedInUser(true);
              }}
              logOut={() => {
                setLoggedInUser(false);
              }}
              isAuthed={loggedInUser}
            />
          )}
        />
        <Route
          path="/chat"
          component={() => <Chat isAuthed={loggedInUser} />}
        />
        <Route
          path="/profile"
          component={() => <Profile isAuthed={loggedInUser} />}
        />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
