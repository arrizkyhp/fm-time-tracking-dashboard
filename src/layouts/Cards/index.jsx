import { useContext } from "react";
import { PeriodContext } from "pages/Home";

import Card from "components/Card";
import React from "react";

export default function Cards({ data }) {
  const { period, setPeriod } = useContext(PeriodContext);

  return (
    <section className="cards">
        <Card pastData={data.past.work} dataNow={data.now.work} variant="work"/>
        <Card pastData={data.past.play} dataNow={data.now.play} variant="play"/>
        <Card pastData={data.past.study} dataNow={data.now.study} variant="study" />
        <Card pastData={data.past.exercise} dataNow={data.now.exercise} variant="exercise"/>
        <Card pastData={data.past.social} dataNow={data.now.social} variant="social" />
        <Card pastData={data.past.self_care} dataNow={data.now.self_care} variant="self care"/>

    </section>
  );
}
