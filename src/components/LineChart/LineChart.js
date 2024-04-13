import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
  const [aspectRatio, setAspectRatio] = useState(3);

  useEffect(() => {
    correctRatio();
    window.onresize = () => {
      correctRatio();
    };
  }, []);

  const correctRatio = () => {
    setAspectRatio(3);
    if (window.innerWidth < 1000) {
      setAspectRatio(2);
    }
    if (window.innerWidth < 600) {
      setAspectRatio(1);
    }
  };

  return (
    <div style={{ width: "100%", aspectRatio: aspectRatio }}>
      <Line
        data={chartData}
        options={{
          animation: true,
          borderColor: "#7a70eb",
          tension: 0.2,
          borderWidth: 5,
          color: "white",
          aspectRatio: aspectRatio,
        }}
      />
    </div>
  );
}

export default LineChart;
