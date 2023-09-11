import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState([]);
  const [value, setValue] = useState(0);

  async function fetchJob() {
    const res = await fetch(`https://course-api.com/react-tabs-project`);
    const data = await res.json();
    setJob(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchJob();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = job[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        {/* {btn container} */}
        <div className="btn-container">
          {job.map((item, index) => (
            <button
              // className= `job-btn ${index === value && active-btn}`
              className={`job-btn ${index === value ? 'active-btn' : ''}`}
              key={item.id}
              onClick={() => setValue(index)}
            >
              {item.company}
            </button>
          ))}
        </div>
        {/* {job info} */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
