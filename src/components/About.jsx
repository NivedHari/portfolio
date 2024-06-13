import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  const [show, setShow] = useState(true);
  const ControlPicture = () => {
    if (window.scrollY > 250) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", ControlPicture);
    return () => {
      window.removeEventListener("scroll", ControlPicture);
    };
  }, []);
  const openResume = () => {
    window.open("/pdf/Resume-Nived-Hari.pdf", "_blank");
  };
  return (
    <div
      id="about"
      className="text-white flex mx-auto justify-center mt-7 md:mt-0 p-10 min-h-screen flex-wrap relative"
    >
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-20 ">
        <div>
          <img
            src="/images/file.png"
            width={300}
            height={500}
            alt="Profile picture "
            className={` ${
              !show && "md:opacity-0"
            } md:absolute max-w-full md:h-full md:rounded-b-3xl md:w-[600px] md:top-10 md:left-5 -z-50 transition ease-out duration-500`}
          />
        </div>
        <div className="max-w-4xl gap-12 flex flex-col md:max-w-4xl md:ml-96">
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
              <Button gradientDuoTone={"purpleToBlue"} size={"xl"}>
                Hire me
              </Button>
            </a>
            <Button
              gradientDuoTone={"purpleToBlue"}
              outline
              className="text-white dark-background dark"
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
