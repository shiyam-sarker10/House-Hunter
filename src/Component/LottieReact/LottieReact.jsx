import Lottie from "lottie-react";
import hero from "../../assets/hero.json"

export const HeroLottie = () => {
    return <Lottie animationData={hero} loop={true} />;
}