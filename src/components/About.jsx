import { Button } from "flowbite-react";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  const openResume = () => {
    window.open("/pdf/Nived_Hari_Resume.pdf", "_blank");
  };
  return (
    <div
      id="about"
      className="text-white flex mx-auto justify-center mt-20 md:mt-0 p-10 min-h-screen"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 ">
        <div className="">
          <img
            src="/images/file.png"
            width={300}
            height={500}
            alt="Profile picture "
            className="max-w-full h-full rounded-b-3xl w-96 "
          />
        </div>
        <div className="max-w-4xl gap-12 flex flex-col">
          <div>
            <h1 className="font-bold text-5xl sm:text-7xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              <span className="text-clip">Hi! I am </span>
              <br />
              <span className="text-white">
                <Typewriter
                  words={[
                    "Nived Hari",
                    "Fullstack Developer",
                    "Frontend Developer",
                    "Backend Developer",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
          <p className="text-2xl sm:leading-8 text-gray-400">
            A motivated developer with a passion for creating innovative and
            user-friendly applications, eager to leverage academic background
            and practical experience to contribute effectively to a dynamic
            development team.
          </p>
          <div className="flex gap-7 mt-3 ">
            <a href="#contact">
              <Button gradientDuoTone={"purpleToBlue"} pill size={"xl"}>
                Hire me
              </Button>
            </a>
            <Button
              gradientDuoTone={"purpleToBlue"}
              outline
              className="text-white dark-background dark"
              pill
              size={"xl"}
              onClick={openResume}
            >
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
