import React, {useRef, useState} from "react";
import "./style.css";
import balloon from "../../assets/baloon.jpg";
import Question from "./components/Question";
import {Scroller, scrollInitalState} from "react-skroll";

import img1 from "../../assets/balloon1.jpg";
import img2 from "../../assets/balloonp.jpg";
import img3 from "../../assets/hab.jpg";
import img4 from "../../assets/genricb.jpg";

const HomePage = ({setLoading}) => {
  const [scroll, setScroll] = useState(scrollInitalState);
  const scrollRef = useRef(undefined);
  const [finish, setFinish] = useState(false);
  const data = [
    {
      variant: "text",
      question: "Do you think air balloons are cool in 2020?",
      options: [
        "Yes, Obviously",
        "No, Come On.",
        "Not Sure, Really Dont Care.",
      ],
    },
    {
      variant: "text",
      question: "Does it get cold in the balloon?",
      options: [
        "Yes, Obviously",
        "No, Come On.",
        "Not Sure, Really Dont Care.",
      ],
    },
    {
      variant: "image",
      question: "Which of these images will make a good screen lock?",
      options: [img1, img2, img3, img4],
    },
    {
      variant: "text",
      question: "How do options work, and what are the options?",
      options: [
        "Strike price: The price at which the buyer and the seller of an option have agreed to enter the option contract.",
        "Premium: The payment made by the buyer to the seller to earn his right to an option contract.",
        "Expiration day: The last day that the option owner can exercise the right.",
        "Lot Size: The fixed number of units of the underlying instrument that form part of a single Options contract.\n",
      ],
    },
    {
      variant: "text",
      question: "Did you like this demo?",
      options: [
        "Yes, Obviously",
        "No, Come On.",
        "Not Sure, Really Dont Care.",
      ],
    },
  ];

  return (
    <div className="root">
      <div
        className="left-container"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${balloon})`,
        }}
      >
        <div className="social-icons">
          <i className="fa fa-linkedin" />
          <i className="fa fa-twitter" />
          <i className="fa fa-facebook-f" />
        </div>
        <div className="loader-linear">
          <div
            id="bar-linear"
            className="bar-linear"
            style={{
              width:
                (scroll.children.findIndex((val) => val.active === true) +
                  1 / data.length) *
                100,
            }}
          />
        </div>
        <div className="main animated animatedFadeInUp fadeInUp">
          <div className="title-main">
            <div className="tags">
              <span className="tag">#CULTURE</span>
              <span className="tag">#MALAYSIA</span>
            </div>
            <h1>How well do you know your balloons?</h1>
            <p>A short quiz to test how well you know air balloons</p>
          </div>
          <div className="author">
            <p className="author-name">
              <strong>BY ISSAC NEWTON</strong>
            </p>
            <p className="date">OCT 23, 2020</p>
          </div>
        </div>
      </div>
      <div className="right-container animated animatedFadeInUp fadeInUp">
        {finish ? (
          <div className="result animated animatedFadeInUp fadeInUp">
            <i className="fa fa-trophy" />
            <h1>80%</h1>
            <h5>Congratulations</h5>
            <p>You got 2 out of {data.length} Correct</p>
            <div className="finish-button" onClick={setLoading}>Replay</div>
          </div>
        ) : (
          <div className="question-root">
            <Scroller
              scrollRef={(ref) => (scrollRef.current = ref)}
              autoScroll={true}
              autoFrame={true}
              onScrollChange={(scroll) => setScroll(scroll)}
            >
              {(scroll) =>
                data.map((val, index, arr) => {
                  console.log(scroll);
                  return (
                    <section
                      key={index}
                      className={
                        index ===
                        scroll.children.findIndex((val) => val.active === true)
                          ? "active"
                          : "inactive"
                      }
                    >
                      <Question
                        variant={val.variant}
                        index={index}
                        options={val.options}
                        question={val.question}
                        nofQuestions={arr.length}
                        goNext={() => scroll.scrollToNext()}
                        setFinish={() => setFinish(true)}
                      />
                    </section>
                  );
                })
              }
            </Scroller>
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;
