import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "fontsource-roboto";
import "./contentScript.css";
const container = document.createElement("div");
container.id = "root-content";
document.body.appendChild(container);

const root = createRoot(container);

// useEffect(() => {
// console.log("content script");
// reloadPage();
// }, []);

const App: React.FC<{}> = () => {
  const [count, setCount] = React.useState("0");
  const [url, setUrl] = React.useState("");

  useEffect(() => {
    // setCount(JSON.parse(window.localStorage.getItem("count")));
    // lisen for message from background
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      // get message object from background
      console.log("request", request);
      setUrl(request.url);
    });
  }, []);

  useEffect(() => {
    console.log("content script");
    if (url.includes("localhost")) {
      // regex to check the url is home page or not
      const hompagematch = url.match(/localhost:\d{4}/g);
      if (hompagematch) {
        location.href = url + "/login";
      }
    }
    // });

    // reloadPage();
  }, []);
  // reload the page firstTime
  function reloadPage() {
    if (count == "0") {
      setCount(count + "1");
      console.log("reload");
      location.reload();
    }
  }
  // get the tag by attribute
  useEffect(() => {
    getTagByAttribute('data-testid="email-input"', "eve.holt@reqres.in");
    getTagByAttribute('data-testid="password-input"', "cityslicka");
  }, []);

  return <h1>Content Script</h1>;
};
root.render(<App />);

function getTagById(id: string, value: string) {
  const tag = document.getElementById(id);
  if (tag) {
    tag.innerHTML = value;
  }
  return null;
}

function getTagByAttribute(attribute: string, value: string) {
  const tags = document.querySelectorAll(`[${attribute}]`);

  const tag = tags[0] as HTMLInputElement;
  console.log("tag", tag);
  tag.value = value;
  return null;
}

function clickSubmit() {
  const submit = document.querySelector(
    'data-testid="submit-button"'
  ) as HTMLInputElement;

  if (submit) {
    submit.click();
  }
  return null;
}
