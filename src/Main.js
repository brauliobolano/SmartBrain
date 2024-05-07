// The Main component is used to wrap the App and ParticlesComponent.
// This is done to prevent the ParticlesComponent from re-rendering every time the state in the App component changes.
// By placing the ParticlesComponent in the Main component, it is rendered independently of the App component.
import ParticlesComponent from "./components/Particles/Particles.jsx";
import { useMemo } from "react";
import App from "./App";

function Main() {
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
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
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
    []
  );

  return (
    <>
      <ParticlesComponent
        style={{
          zIndex: -2,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <App />
    </>
  );
}

export default Main;
