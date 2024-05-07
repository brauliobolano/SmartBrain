import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesComponent({ options }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // This function is not needed as we are not using the container variable in the function body
/*   const particlesLoaded = (container) => { 
    console.log(container); //
  }; */

  return init ? (
    <Particles
      style={{
        zIndex: -2,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      id="tsparticles"
      /* particlesLoaded={particlesLoaded} */ // This line is not needed
      options={options}
    />
  ) : null;
}

export default ParticlesComponent;