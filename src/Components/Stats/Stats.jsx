/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 1 }
    );

    const target = document.querySelector(".stats");
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);
  return (
    <section id="stats" className="stats">
      <h2 className="title">My Stats</h2>
      <div className="nums" id="numbers">
        <div className="box">
          <div className="info">
            <span className="material-icons-outlined">
              <img
                src="/icons/user.svg"
                width={40}
                height={40}
                alt="person"
              ></img>
            </span>
            <div className="num">
              <CountUp start={0} end={isVisible ? 100 : 0} duration={5} />
            </div>
            <p>Clients</p>
          </div>
        </div>

        <div className="box">
          <div className="info">
            <span className="material-icons-outlined">
              <img
                src="/icons/project.svg"
                width={40}
                height={40}
                alt="projects"
              ></img>
            </span>
            <div className="num">
              <CountUp start={0} end={isVisible ? 40 : 0} duration={5} />
            </div>
            <p>Projects</p>
          </div>
        </div>

        <div className="box">
          <div className="info">
            <span className="material-icons-outlined">
              <img
                src="/icons/earth.svg"
                width={40}
                height={40}
                alt="countries"
              ></img>
            </span>
            <div className="num">
              <CountUp start={0} end={isVisible ? 10 : 0} duration={5} />
            </div>
            <p>Countries</p>
          </div>
        </div>

        <div className="box">
          <div className="info">
            <span className="material-icons-outlined">
              <img
                src="/icons/dollar.svg"
                width={40}
                height={40}
                alt="money"
              ></img>
            </span>
            <div className="num">
              <CountUp start={0} end={isVisible ? 300 : 0} duration={5} />
            </div>
            <p>Money</p>
          </div>
        </div>
      </div>
    </section>
  );
}
