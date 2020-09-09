import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./Hamburger.module.scss";
import gsap from "gsap";
import {
  staggerReveal,
  fadeInUp,
  staggerText,
} from "../../../animations/Animaton";

export const Hamburger = ({ state }) => {
  // vars for our animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      //close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.075,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.inital === null)
    ) {
      // open menu
      gsap.to(menu, {
        duration: 1,
        css: { display: "block" },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power3.inOut",
    });
  };

  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <div ref={(el) => (menu = el)} className={classes.hamburger_menu}>
      <div
        ref={(el) => (revealMenuBackground = el)}
        className={classes.menu_secondary_background_color}
      ></div>
      <div ref={(el) => (revealMenu = el)} className={classes.menu_layer}>
        <div className="container">
          <div className={classes.wrapper}>
            <div className={classes.menu_links}>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/opporunities"
                    >
                      My projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to="/solutins"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      to="/contact-me"
                    >
                      Contact me
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className={classes.info}>
                <h3>Our Promise</h3>
                <p>
                  Duis aliqua incididunt aliquip nulla ullamco aliquip. Culpa
                  minim id tempor eu minim sit id nulla id pariatur. In nulla
                  laboris duis esse excepteur incididunt do do exercitation esse
                  irure. Id duis dolor aliquip et sunt ad exercitation nisi sunt
                  tempor deserunt nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
