import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}> Overview </p>
      <h2 className={styles.sectionHeadText}> Welcome to my website! </h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Welcome to my portfolio Site. I'm a Computer Science Student with a passion for building applications that consumers love. 
      I have a  background in computer science and I'm skilled in full-stack development, data structures/algorithms, and 
      development throughout the entire software lifecycle. 
    </motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]">
      - Experienced in working with solution design, implementation, CI/CD pipelines, and deployment.
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]">
      - Skilled at developing intuitive user interfaces and I'm proficient in HTML, CSS, JavaScript, TypesScript, and React. 
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]">
      - I Enjoy learning and working with backend technologies, and currently learning more about serverless architecture implementations. 
     </motion.p>
      </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
