import React from 'react'
import propTypes from 'prop-types';
import { useContext } from "react";
import { PeriodContext } from "pages/Home";


import moreImage from 'assets/images/icon-ellipsis.svg'

export default function Card( props ) {
    const { period, setPeriod } = useContext(PeriodContext);
    console.log(period)
    return (
      <div className={`card card--${props.variant}`}>
        <div className="card__container">
          <div className="card__header">
            <h1 className="card__title">{props.variant}</h1>
            <img src={moreImage} alt="ellipsis" className="card__more" />
          </div>
          <div className="card__info">
              <h2 className="info__hours">{props.dataNow}hrs</h2>
              <p className="info__pastHours"><span>
              {period === "daily" && "yesterday"}
              {period === "weekly" && "last week"}
              {period === "monthly" && "last month"}
              </span> - {props.pastData}hrs</p>
          </div>
        </div>
      </div>
    );
}
