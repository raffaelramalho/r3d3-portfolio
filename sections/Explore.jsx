'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreServices } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('service-3');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Serviços" textStyles="text-center" />
        <TitleText
          title={<>Quer levar seu negócio para o  <br className="md:block hidden" /> próximo patamar?</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreServices.map((service, index) => (
            <ExploreCard
              key={service.id}
              {...service}
              index={index}
              active={active}
              handleClick={setActive}
              icon={service.iconUrl}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
