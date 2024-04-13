import React, { useState } from "react";
import "./UsersChart.css";
import { UserData } from "../../data";
import LineChart from "../../components/LineChart/LineChart";

function UsersChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Gebruikers Groei",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });

  return (
    <div className="chart-container">
      <LineChart chartData={userData} />
    </div>
  );
}

export default UsersChart;
