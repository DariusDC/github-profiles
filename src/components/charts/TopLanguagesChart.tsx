import React, { useEffect, useState } from "react";
import { backgroundColor } from "../../utils";
import Chart from "chart.js/auto";
import { RepoType } from "../../types/repoType";

interface LangType {
  [lang: string]: number;
}

interface TopLanguagesChartProps {
  repo: RepoType[];
}

const TopLanguagesChart: React.FC<TopLanguagesChartProps> = ({ repo }) => {
  const [chartData, setChartData] = useState<string[] | null>(null);
  const [chartRef, setChartRef] = useState<any>(null);
  let repoLangs: { lang: string; value: number }[] = [];

  const getLanguages = () => {
    let languages: LangType = {};
    repo.forEach((repository) => {
      const lang = repository.language;
      if (lang === null) return;
      if (languages[lang] === undefined) languages[lang] = 1;
      else languages[lang]++;
    });
    Object.keys(languages).forEach((l) =>
      repoLangs.push({ lang: l, value: languages[l] })
    );
    repoLangs.sort((a, b) => b.value - a.value);
  };

  const build = () => {
    if (repoLangs.length === 0) return;
    if (repo.length === 0) return;
    const chdata = repoLangs.map((r) => r.lang);
    setChartData(chdata);

    const data = {
      labels: repoLangs.map((r) => r.lang),
      datasets: [
        {
          label: "Most used languages",
          data: repoLangs.map((r) => r.value),
          backgroundColor,
        },
      ],
    };

    var ctx = (
      document.getElementById("topLang") as HTMLCanvasElement
    ).getContext("2d");

    if (ctx === null) return;

    var myChart = new Chart(ctx, {
      type: "pie",
      data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Pie Chart",
          },
        },
      },
    });
    setChartRef(myChart);
  };

  useEffect(() => {
    if (chartRef) chartRef.destroy();
    getLanguages();
    build();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <canvas width={300} height={300} id="topLang">
        {chartData && chartData.length === 0 && <p>Nothing here...</p>}
      </canvas>
    </>
  );
};

export default TopLanguagesChart;
