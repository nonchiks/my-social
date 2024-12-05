import "./App.css";
import Header from "./components/header/header";
import NavBar from "./components/navBar/navbar";
import Profile from "./components/profile/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dialogs from "./components/dialogs/dialogs";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/dialogs"
            element={
              <Dialogs
                dialogs_data={props.dialogs_data}
                messages_data={props.messages_data}
              />
            }
          />
          <Route path="/profile" element={<Profile posts={props.posts} />} />
          <Route path="/" element={<Profile posts={props.posts} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
