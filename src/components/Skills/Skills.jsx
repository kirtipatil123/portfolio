import React from 'react';
import { SkillsInfo } from '../../constant';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-[8vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Skills Categories */}
      <div className="flex flex-wrap gap-6 justify-center">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900/80 backdrop-blur-md px-6 py-6 
                       w-full sm:w-[48%] rounded-2xl border border-white/10 
                       shadow-[0_0_15px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-5 text-center">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.03}
              transitionSpeed={800}
              gyroscope={true}
            >
              {/* Auto-fit grid for compact layout */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center 
                               bg-transparent border border-gray-700 
                               rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-9 h-9 sm:w-10 sm:h-10 mb-1"
                    />
                    <span className="text-xs sm:text-sm text-gray-300 text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
