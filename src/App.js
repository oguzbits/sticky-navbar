import React from "react";
import NavBar from "./components/navBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="home">
        <NavBar />
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          autem doloribus ratione, natus maiores nostrum consequuntur qui fuga
          inventore doloremque neque delectus provident pariatur, nam ipsa
          voluptas excepturi reprehenderit? Possimus.
        </p>
      </div>
      <div className="about">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          autem doloribus ratione, natus maiores nostrum consequuntur qui fuga
          inventore doloremque neque delectus provident pariatur, nam ipsa
          voluptas excepturi reprehenderit? Possimus.
        </p>
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          autem doloribus ratione, natus maiores nostrum consequuntur qui fuga
          inventore doloremque neque delectus provident pariatur, nam ipsa
          voluptas excepturi reprehenderit? Possimus.
        </p>
      </div>
    </div>
  );
}

export default App;
