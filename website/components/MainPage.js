import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const handleScrollToIntro = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById("intro");
    if (targetElement) {
      const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
      const offset = (window.innerHeight - targetElement.offsetHeight) / 2;
      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="background-effects">
{/*      <header style={{ position: 'absolute', top: 0, left: 0, padding: '10px', width: '100%', boxSizing: 'border-box' }}>
        <motion.h3
          className="subSubTitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
          style={{ textAlign: 'left', margin: 0 }}
        >
          CS 480 - Data visualization
        </motion.h3>
  </header>*/}
      <main className="main_class">
        <div className="mainDiv">
          <motion.h1
            className="bigTitle"
            initial={{ opacity: 0, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          >
            ShopScopeUSA
          </motion.h1>
          <motion.h2
            className="subTitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeInOut" }}
          >
            E-Shopping Explorer: Interactive Visualizations of U.S. Consumer Trends
          </motion.h2>
          <a href="#intro" onClick={handleScrollToIntro} className="scroll-down-link">
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
