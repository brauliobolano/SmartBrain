import './App.css';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


/* import Clarifai from 'clarifai'; */ // No longer needed as we are using the fetch API to make requests to the Clarifai API instead of the Clarifai package

 const returnClarifyJsonRequest = (input) => {
  const PAT = '519a6a028f9e42459f6bd406afcad694';
    const USER_ID = 'braulio-bolano';       
    const APP_ID = 'smart-brain';
      
    const IMAGE_URL = input; // use the input state variable as the image URL

    const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": IMAGE_URL
          }
        }
      }
    ]
    });

    const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
    },
    body: raw
    };

    return requestOptions;
};

function App() {

  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState({});
/*   const [inputValue, setInputValue] = useState('');  */

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
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
    console.log('click');
    setImageUrl(input);
    console.log(imageUrl);

  fetch("https://api.clarifai.com/v2/models/face-detection/outputs", returnClarifyJsonRequest(input))
    .then(response => response.json())
    .then(response => displayFaceBox(calculateFaceLocation(response)))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  };

  const deleteImage = () => {
    setImageUrl('');
    setBox({});
    setInput('');
  };


  const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
  
    const options = useMemo(
      () => ({
        background: {
          gradient: {
            angle: 45,
            start: {
              value: "#0000FF",
            },
            stop: {
              value: "#FF0000",
            },
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 160,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }),
      [],
    );
  
    if (init) {
      return (
        <>
    
        <Particles 
          style={{zIndex: -2, position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      <Navigation />
      <Logo/>
      <Rank/>
      <ImageLinkForm 
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
        deleteImage={deleteImage}
        input = {input}
        />
      <FaceRecognition imageUrl={imageUrl} box={box}/>

      </>
      );
    }
  return <>
        </>;
}

export default App;
