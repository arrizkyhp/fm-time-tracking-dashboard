import { createContext, useState } from "react";

import profileData from "json/profile.json";
import Cards from "layouts/Cards";
import CardMenu from "layouts/CardMenu";
export const PeriodContext = createContext({
  period: "weekly",
  setPeriod: () => {},
});

export default function Home() {
  const [period, setPeriod] = useState("weekly");
  const value = { period, setPeriod };

  return (
    <main className="container">
      <PeriodContext.Provider value={value}>
        <CardMenu data={profileData} />

        {profileData.period.map((e, index) => {
          if (period === "daily") {
            return <Cards data={e.daily} key={`period-${index}`}/>;
          } else if (period === "weekly") {
            return <Cards data={e.weekly} key={`period-${index}`} />;
          } else {
            return <Cards data={e.monthly} key={`period-${index}`} />;
          }
        })}
      </PeriodContext.Provider>
    </main>
  );
}
