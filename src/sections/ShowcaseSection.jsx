import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState("AI");

  const categories = ["All", "Web", "WPF/App", "AI"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase w-full">
      <div className="flex flex-col items-center">
        {/* Category Filter */}
        <div className="mb-12 flex justify-center">
          <div className="segmented-control flex flex-wrap gap-3 p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-inner">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-md scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center w-full max-w-7xl">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center max-w-md w-full"
              ref={
                index === 0
                  ? rydeRef
                  : index === 1
                  ? libraryRef
                  : ycDirectoryRef
              }
            >
              {/* Image */}
              <div
                className={`image-wrapper ${project.bgColor} w-full h-72 rounded-xl overflow-hidden flex justify-center items-center mb-4`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm mb-4 px-2">
                {project.description}
              </p>

              {/* Link Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Detail
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
