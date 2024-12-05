import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { name: "Akashi Seijuro", text: "Learning React", id: 1 },
  { name: "Akashi Seijuro", text: "Playing in basketball", id: 2 },
  { name: "Akashi Seijuro", text: "Learning design", id: 3 },
  { name: "Akashi Seijuro", text: "Learning design", id: 4 },
];
let dialogs_data = [
  { name: "Akashi Seijuro", id: 1 },
  { name: "Absolute Seijuro", id: 2 },
  { name: "Akashi Seijuro", id: 3 },
];
let messages_data = [
  {
    message: "Hello",
    id: 1,
  },
  {
    message: "How are you?",
    id: 2,
  },
  {
    message: "Fine",
    id: 3,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App
    posts={posts}
    dialogs_data={dialogs_data}
    messages_data={messages_data}
  />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
