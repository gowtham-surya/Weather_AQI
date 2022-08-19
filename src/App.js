import React from 'react';
import Chart from 'react-apexcharts';
import './App.css';
import './assets/css/grid.css';
import treeHappy from './assets/images/tree-happy.png';
import Header from './components/Header';

const App = () => {
  const weatherTitle = [
    {
      name: 'Temperature',
      image: 'bx bxs-hot temp-color',
      value: '25°C',
    },
    {
      name: 'Humidity',
      image: 'bx bx-cloud-rain rain-color',
      value: '78%',
    },
    {
      name: 'Oxygen level',
      image: 'bx bx-wind rain-color',
      value: '78%',
    },
  ];

  var radialBar = {
    options: {
      colors: ['#095d14'],
      plotOptions: {
        radialBar: {
          startAngle: -120,
          endAngle: 120,
          track: {
            background: '#333',
            startAngle: -120,
            endAngle: 120,
          },
          hollow: {
            margin: 15,
            size: '50%',
          },
          dataLabels: {
            name: {
              show: true,
              color: '#000',
              fontSize: '16px',
            },
            value: {
              color: '#111',
              fontSize: '16px',
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          colorStops: [
            {
              offset: 0,
              color: '#095d14',
              opacity: 1,
            },
            {
              offset: 60,
              color: '#c4db15',
              opacity: 1,
            },
            {
              offset: 100,
              color: '#e02222',
              opacity: 1,
            },
          ],
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['PM 2.5'],
    },
  };

  const airPollutants = [
    {
      name: 'PM 2.5',
      value: 35,
    },
    {
      name: 'VoC',
      value: 48,
    },
    {
      name: 'SO2',
      value: 76,
    },
    {
      name: 'NO2',
      value: 92,
    },
    {
      name: 'CO',
      value: 41,
    },
    {
      name: 'NH3',
      value: 64,
    },
  ];

  return (
    <div>
      <Header />
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="card-container">
                <h4>Chennai Port Air Quality Index</h4>
                <h5>Real-time air pollution in Port</h5>
                <div className="card-details row">
                  <div className="flexbox fdir-col col-6">
                    <h5>Last Update: 18 Jul 2022, 04:20pm</h5>
                    <button className="btn">Good</button>
                  </div>
                  <div className="flexbox col-6">
                    <h1>38</h1>
                    <img src={treeHappy} width="200px" alt="Tree Happy"></img>
                  </div>
                </div>
              </div>
              <div className="row">
                {weatherTitle.map((lists, index) => (
                  <div className="col-4" key={index}>
                    <div className="status-card flexbox fdir-col">
                      <h4>{lists.name}</h4>
                      <div className="flexbox">
                        <i className={lists.image}></i>
                        <h5>{lists.value}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="card-container col-4"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <form className="form-container">
                <h5>AQI Calculator</h5>
                <label>Materials:</label>
                <datalist id="suggestions">
                  <option>Coal</option>
                  <option>Gas</option>
                </datalist>
                <input autoComplete="on" type="text" list="suggestions" />
                <label>Staying From:</label>
                <input type="date" name="ship-details" width="100%"></input>
                <label>Staying Upto:</label>
                <input type="date" name="ship-details" width="100%"></input>
                <button type="submit">Calculate</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                {airPollutants.map((lists, index) => (
                  <div className="col-2" key={index}>
                    <div className="status-card status-card-bar flexbox fdir-col">
                      <div className="flexbox">
                        <Chart
                          series={[lists.value]}
                          options={{
                            ...radialBar.options,
                            labels: [lists.name],
                          }}
                          type="radialBar"
                          height="200px"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-container col-12">
            <iframe
              src="https://public.tableau.com/views/final-2_16608840188550/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link:showVizHome=no&:embed=true"
              title="Graph"
              width="100%"
              height="600px"
            ></iframe>
          </div>
          <div className="card-container col-12">
            <iframe
              src="https://public.tableau.com/views/final_16608805948390/MainDashboard?:language=en-US&:display_count=n&:origin=viz_share_link:showVizHome=no&:embed=true"
              title="Graph"
              width="100%"
              height="600px"
            ></iframe>
          </div>
        </div>
        <div className="body_background"></div>
      </div>
    </div>
  );
};

export default App;
