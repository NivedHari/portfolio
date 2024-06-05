import { Button } from "flowbite-react";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <div id="about" className="text-white flex mx-auto justify-center p-10 min-h-screen">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div>
          <img
            src="/images/profile-pic.png"
            width={300}
            height={300}
            alt="Profile picture "
            className="max-w-full h-auto"
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
          <p className="text-l sm:text-xl sm:leading-8 text-gray-400">
            A motivated developer with a passion for creating innovative and
            user-friendly applications, eager to leverage academic background
            and practical experience to contribute effectively to a dynamic
            development team.
          </p>
          <div className="flex gap-7 mt-3">
            <Button gradientDuoTone={'purpleToBlue'} pill>Hire me</Button>
            <Button gradientDuoTone={'purpleToBlue'} outline className="text-white dark-background dark" pill>View Resume</Button>

            
          </div>
        </div>
      </div>
    </div>
  );
}
