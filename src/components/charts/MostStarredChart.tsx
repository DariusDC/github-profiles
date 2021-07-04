import React, { useEffect, useState } from "react";
import { backgroundColor, borderColor } from "../../utils";
import Chart from "chart.js/auto";
import { RepoType } from "../../types/repoType";

interface MostStarredChartProps {
  repo: RepoType[];
}

const MostStarredChart: React.FC<MostStarredChartProps> = ({ repo }) => {
  const [chartData, setChartData] = useState<number[] | null>(null);
  const [chartRef, setChartRef] = useState<any>(null);
  let userRepo: RepoType[] = [];

  const sortByStarred = () => {
    const sortedRepo = repo.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
    userRepo = sortedRepo.slice(0, 5);
  };

  const build = () => {
    if (userRepo.length === 0) return;
    if (repo.length === 0) return;
    const property = "stargazers_count";
    const labels = userRepo.map((r) => r.name);
    const data = userRepo.map((r) => r[property]);
    setChartData(data);

    var ctx = (
      document.getElementById("starChart") as HTMLCanvasElement
    ).getContext("2d");
    if (ctx === null) return;
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "# of stars",
            data,
            backgroundColor,
            borderColor,
            borderWidth: 1,
          },
        ],
      },
    });
    setChartRef(myChart);
  };

  useEffect(() => {
    if (chartRef) chartRef.destroy();
    sortByStarred();
    build();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <canvas width={300} height={300} id="starChart">
        {chartData && chartData.length === 0 && <p>Nothing here...</p>}
      </canvas>
    </>
  );
};

export default MostStarredChart;
