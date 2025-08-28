import { Link } from "react-router-dom";
import StartBackground from "../components/StarBackground";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-full bg-black">
      <StartBackground />
      <div className="h-full flex justify-center items-center">
        <div className="max-w-5xl mx-auto w-full  flex flex-col gap-1 justify-center items-center z-40 p-4">
          <h1 className="mb-2 text-7xl text-primary font-extrabold leading-none tracking-tight sm:text-8xl">
            404
          </h1>
          <p className="max-w-md font-semibold text-primary-foreground">
            The page you’re looking for doesn’t exist. Let’s guide you back to
            familiar territory.
          </p>
          <p className="max-w-sm text-sm text-gray-300">
            Return to the landing page and continue exploring my work.
          </p>

          <Link to={"/#hero"} className="cosmic-button w-fit mt-2">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
