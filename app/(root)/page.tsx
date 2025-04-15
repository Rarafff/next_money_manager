import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Rafli",
    lastName: "Dwi P",
    email: "rafli.dwip22@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "User"}
            subtext="Access your bank account and manage your transactions with ease."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={10000}
          />
        </header>
        RECENT Transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 3000 }, {}]}
      />
    </section>
  );
};

export default Home;
