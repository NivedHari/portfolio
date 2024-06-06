import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Connect() {
  return (
    <div id="contact" className="text-white max-w-7xl mx-auto mt-72 mb-52 p-7">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl md:text-6xl my-10 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Lets Connect
        </h1>
        <p className="text-xl text-gray-300">
          Thank you for exploring my portfolio! If you're interested in
          collaborating, have any questions, or just want to say hello, feel
          free to get in touch.
        </p>
        <p className="text-xl text-gray-300">
          I'm always open to new opportunities and connections. Let's connect
          and explore the possibilities together!
        </p>
      </div>
      <div className="flex my-7 gap-6">
        <a
          href="https://github.com/NivedHari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-4xl cursor-pointer hover:scale-110 transition-all duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/nived-hari-b041b12ba"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-4xl cursor-pointer hover:scale-110 transition-all duration-300" />
        </a>
      </div>
    </div>
  );
}
