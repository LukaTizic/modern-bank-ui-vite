import React from "react";

import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt='billing' className='w-[100%] h-[100%] ' />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className='sm:block hidden' /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph}max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur elit. Id, culpa! Magnam quo,
        consectetur, eos blanditiis tempora illo necessitatibus vel qui ex quam?
      </p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img
          src={apple}
          alt='app store'
          className='w-[127px] h-[42px] object-contain mr-5 cursor-pointer'
        />
        <img
          src={google}
          alt='google store'
          className='w-[127px] h-[42px] object-contain cursor-pointer'
        />
      </div>
    </div>
  </section>
);
export default Billing;
