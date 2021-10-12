import { createContext, useState } from "react";

import profileData from "json/profile.json";
import Cards from "layouts/Cards";
import CardMenu from "layouts/CardMenu";
import Footer from "layouts/Footer";
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

      <Cards />
      </PeriodContext.Provider>
      <Footer />
    </main>
  );
}
