import { useContext } from "react";
import { PeriodContext } from "pages/Home";

import Card from "components/Card";
import React from "react";

import periodData from "json/data.json";

export default function Cards({ data }) {
  const { period, setPeriod } = useContext(PeriodContext);

  return (
    <section className="cards">
      {periodData.map((e) => {
        // console.log(e.title);
        return <Card title={e.title} timeframes={e.timeframes}/>
      })}

    </section>
  );
}
