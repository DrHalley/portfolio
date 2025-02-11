export default function Home() {
  return (
    <div className="flex justify-center text-8xl">
      <div className="text-center mt-32">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="text-gray-200">Put Your Dreams into Code</span>{" "}
          <br />
          <span className="text-blue-400">and Hire Me</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Freelance & Full-Stack Developer
        </p>
        <a
          href="mailto:efetamturk@gmail.com"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
