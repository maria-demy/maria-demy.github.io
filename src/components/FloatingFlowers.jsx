import { useCallback } from 'react';
import { loadSlim } from '@tsparticles/slim';
import Particles from '@tsparticles/react';

const FloatingFlowers = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      color: {
        value: '#D9A6B3',
      },
      move: {
        enable: true,
        speed: 1.5,
      },
      number: {
        value: 50,
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: 'char',
        character: {
          value: '🌸',
          font: 'Verdana',
          style: '',
          weight: '400',
          fill: true,
        },
      },
      size: {
        value: 12,
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: 'random',
        animation: {
          enable: true,
          speed: 5,
        },
      },
    },
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '80px',
        left: 0,
        width: '100%',
        height: 'calc(100vh - 80px)',
        zIndex: -1,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <Particles
        id="floating-flowers"
        init={particlesInit}
        options={particlesConfig}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default FloatingFlowers;
