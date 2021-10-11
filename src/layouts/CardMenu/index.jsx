import React, { useState } from 'react'
import { useContext } from "react";
import { PeriodContext } from "pages/Home";


export default function CardMenu({ data }) {
    const { period, setPeriod } = useContext(PeriodContext);


    const handleDaily = () => {
        setPeriod("daily");
    }

    const handleWeekly = () => {
        setPeriod("weekly");
    }

    const handleMonthly = () => {
        setPeriod("monthly");
    }


    return (
        <section className="cardMenu">
            <div className="cardMenu__profile">
            <img src={data.imageUrl} alt="profile" className="cardMenu__profile__image" />
            <h1 className="cardMenu__profile__username"><span>Report for</span><br/> {data.firstname} <br/> {data.lastname}</h1>
            </div>
            <ul className="cardMenu__period">
                <li className={`cardMenu__period__list ${period === "daily" ? "active" : ""}`} onClick={handleDaily}>Daily</li>
                <li className={`cardMenu__period__list ${period === "weekly" ? "active" : ""}`} onClick={handleWeekly}>Weekly</li>
                <li className={`cardMenu__period__list ${period === "monthly" ? "active" : ""}`} onClick={handleMonthly}>Monthly</li>
            </ul>
        </section>
    )
}
