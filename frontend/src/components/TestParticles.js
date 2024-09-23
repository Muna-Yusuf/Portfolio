import React from 'react';
import Particles from "@tsparticles/react";

const TestParticles = () => {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 80 },
          color: { value: ["#C8A2C8", "#ADD8E6"] },
          size: { value: 4 },
          move: { enable: true, speed: 2 }
        },
      }}
    />
  );
};

export default TestParticles;
