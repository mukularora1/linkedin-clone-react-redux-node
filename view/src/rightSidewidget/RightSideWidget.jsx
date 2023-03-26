import React from "react";
import "./rightSideWidget.css";
const list = [
  {
    title: "This week top newsletters",
    time: "5 days",
    totalReaders: "718",
  },
  {
    title: "Luxury carmakers eye smaller cities",
    time: "2 days",
    totalReaders: "1118",
  },
  {
    title: "$54B lifeline for Credit Suisse",
    time: "3 days",
    totalReaders: "563",
  },
  {
    title: "Lenskart bucks funding trend",
    time: "1 days",
    totalReaders: "222",
  },
  {
    title: "This week top newsletters",
    time: "5 days",
    totalReaders: "718",
  },
  {
    title: "Luxury carmakers eye smaller cities",
    time: "2 days",
    totalReaders: "1118",
  },
  {
    title: "$54B lifeline for Credit Suisse",
    time: "3 days",
    totalReaders: "563",
  },
  {
    title: "Lenskart bucks funding trend",
    time: "1 days",
    totalReaders: "222",
  },
  {
    title: "This week top newsletters",
    time: "5 days",
    totalReaders: "718",
  },
  {
    title: "Luxury carmakers eye smaller cities",
    time: "2 days",
    totalReaders: "1118",
  },
  {
    title: "$54B lifeline for Credit Suisse",
    time: "3 days",
    totalReaders: "563",
  },
  {
    title: "Lenskart bucks funding trend",
    time: "1 days",
    totalReaders: "222",
  },
];
function RightSideWidget() {
  return (
    <div className="rightSideWidget">
      <div className="rightSideWidget__header">
        <div className="rightSideWidget__title">LinkedIn news</div>
      </div>
      <div className="rightSideWidget__list">
        <ul>
          {list.map((el, index) => {
            return (
              <div className="rightSideWidget__list__wrapper" key={index}>
                <li>{el && el.title}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RightSideWidget;
