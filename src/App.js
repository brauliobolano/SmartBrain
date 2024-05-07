import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

import { /* useMemo, */ useState, useEffect } from "react";

/* import ParticlesComponent from './components/Particles/Particles.jsx'; */

/* import Clarifai from 'clarifai'; */ // No longer needed as we are using the fetch API to make requests to the Clarifai API instead of the Clarifai package

const returnClarifyJsonRequest = (input) => {
  const PAT = "519a6a028f9e42459f6bd406afcad694";
  const USER_ID = "braulio-bolano";
  const APP_ID = "smart-brain";

  const IMAGE_URL = input; // use the input state variable as the image URL

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;
};

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);
  /*   const [inputValue, setInputValue] = useState('');  */

  const onRouteChange = (route) => {
    setRoute(route);
    if (route === "signout") {
      setIsSignedIn(false);
    } else if (route === "home") {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    console.log(box);
    setBox(box);
  };

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };
  const onButtonSubmit = () => {
    console.log("click");
    setImageUrl(input);
    console.log(imageUrl);

    fetch(
      "https://api.clarifai.com/v2/models/face-detection/outputs",
      returnClarifyJsonRequest(input)
    )
      .then((response) => response.json())
      .then((response) => displayFaceBox(calculateFaceLocation(response)))
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const deleteImage = () => {
    setImageUrl("");
    setBox({});
    setInput("");
  };

  return (
    <>
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === "home" ? (
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
            deleteImage={deleteImage}
            input={input}
          />
          <FaceRecognition imageUrl={imageUrl} box={box} />
        </div>
      ) : route === "signin" ? (
        <div>
          <SignIn onRouteChange={onRouteChange} />
        </div>
      ) : (
        <div>
          <Register onRouteChange={onRouteChange} />
        </div>
      )}
    </>
  );
}

export default App;
