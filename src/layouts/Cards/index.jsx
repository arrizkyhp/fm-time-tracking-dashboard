import Card from "components/Card";
import React from "react";

import periodData from "json/data.json";

export default function Cards() {

  return (
    <section className="cards">
      {periodData.map((e, index) => {
        // console.log(e.title);
        return <Card title={e.title} timeframes={e.timeframes} key={`card-${index}`}/>
      })}

    </section>
  );
}
