import { useGlitch } from "react-powerglitch";
import { Logo } from "./Logo.stories";

export const GlitchedLogo = () => {
  const glitch = useGlitch();
  return (
    <span ref={glitch.ref}>
      <Logo
        color={"accent"}
        height={"14"}
        width={"auto"}
        viewBox={"0 0 465 193"}
      />
    </span>
  );
};
