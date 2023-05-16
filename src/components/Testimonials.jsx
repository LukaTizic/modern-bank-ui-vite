import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import Feedback from "./Feedback";

const Testimonials = () => (
  <section id='clients' className={`${styles.paddingY} flex-col relative`}>
    <div className='w-full flex justify-between items-center md:flex-row flex col sm:mb-16 relative'>
      <h1 className={styles.heading2}>
        What people are <br className='sm:block hidden' />
        saying about us
      </h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative'>
      {feedback.map((card, index) => (
        <Feedback key={card.id} {...card} />
      ))}
    </div>
  </section>
);
export default Testimonials;
