import { useGlitch } from "react-powerglitch";

export const Glitch = () => {
  const glitch = useGlitch();
  return (
    <h1>
      react-powerglitch <span ref={glitch.ref}>🌎</span>
    </h1>
  );
};
