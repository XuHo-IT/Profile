import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* Main ambient light for base illumination */}
    <ambientLight intensity={1.5} />

    {/* Strong key directional light to simulate sunlight or a large light source */}
    <directionalLight
      position={[10, 20, 10]}
      intensity={3}
      color="white"
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />

    {/* Fill light from opposite side to soften shadows */}
    <directionalLight
      position={[-10, 10, -10]}
      intensity={1.5}
      color="#bde0fe"
    />

    {/* Decorative bluish and purplish spotlights */}
    <spotLight
      position={[5, 6, 5]}
      angle={0.5}
      penumbra={0.7}
      intensity={80}
      color="#4cc9f0"
    />
    <spotLight
      position={[-5, 6, -5]}
      angle={0.5}
      penumbra={0.7}
      intensity={80}
      color="#9d4edd"
    />

    {/* Optional area light for soft warm glow near bed or corner */}
    <primitive
      object={new THREE.RectAreaLight(0xffffff, 5, 10, 3)}
      position={[0, 3, -3]}
      rotation={[0, Math.PI / 4, 0]}
    />

    {/* Subtle point lights for accent */}
    <pointLight position={[0, 2, 0]} intensity={5} color="#f72585" />
    <pointLight position={[3, 3, -3]} intensity={3} color="#00f5d4" />
  </>
);

export default HeroLights;
