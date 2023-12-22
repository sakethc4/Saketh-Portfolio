import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from '../hoc/Index';
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 justify">My Technologies</h2>
      <p className="text-2xl font-bold mb-4 justify-center"> The balls below spin just click and move your mouse to manipulate</p>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
