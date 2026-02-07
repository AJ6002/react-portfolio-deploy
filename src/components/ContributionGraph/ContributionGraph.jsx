import { useEffect, useState } from "react";
import "./ContributionGraph.css";

const ContributionGraph = ({ username = "AJ6002" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchContributions = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username.toLowerCase()}?y=last`
        );
        if (!res.ok) throw new Error("API error");
        const json = await res.json();
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError("GitHub API Unreachable");
          setLoading(false);
        }
      }
    };
    fetchContributions();
    return () => { isMounted = false; };
  }, [username]);

  if (loading) return <div className="graph-status">Fetching contributions...</div>;
  if (error) return <div className="graph-status error">{error}</div>;

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const days = ["Mon", "", "Wed", "", "Fri"];

  return (
    <div className="contribution-container">
      <div className="header-section">
        <h3 className="graph-title">
          {data?.total?.lastYear || 0} contributions in the last year
        </h3>
      </div>

      <div className="graph-layout-container">
        <div className="days-label">
          {days.map((day, i) => <span key={i}>{day}</span>)}
        </div>

        <div className="graph-scroll-container">
          <div className="graph-content-wrapper">
            <div className="months-label">
              {months.map((month, i) => <span key={i}>{month}</span>)}
            </div>

            <div className="graph-grid">
              {data?.contributions.map((day, i) => (
                <div
                  key={i}
                  className={`day-square level-${day.level}`}
                  title={`${day.count} contributions on ${day.date}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="legend">
          <span>Less</span>
          <div className="day-square level-0" />
          <div className="day-square level-1" />
          <div className="day-square level-2" />
          <div className="day-square level-3" />
          <div className="day-square level-4" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;