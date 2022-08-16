import React from 'react';
import Chart from 'react-apexcharts';
import './App.css';
import './assets/css/grid.css';
import treeHappy from './assets/images/tree-happy.png';
import Header from './components/Header';
import Table from './components/Table';

const App = () => {
  const weatherTitle = [
    {
      name: 'Temperature',
      image: 'bx bxs-hot temp-color',
      value: '25°C',
    },
    {
      name: 'Pressure',
      image: 'bx bx-tachometer pressure-color',
      value: '25Pa',
    },
    {
      name: 'Humidity',
      image: 'bx bx-cloud-rain rain-color',
      value: '78%',
    },
    {
      name: 'Wind',
      image: 'bx bx-wind wind-color',
      value: '12mpH',
    },
  ];

  var radialBar = {
    options1: {
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
    options2: {
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
      labels: ['PM 10'],
    },
    options3: {
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
      labels: ['SO2'],
    },
    options4: {
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
      labels: ['NO2'],
    },
  };

  const airPollutants = [
    {
      name: 'PM 2.5',
      value: 35,
      option: radialBar.options1,
    },
    {
      name: 'PM 10',
      value: 48,
      option: radialBar.options2,
    },
    {
      name: 'SO2',
      value: 76,
      option: radialBar.options3,
    },
    {
      name: 'NO2',
      value: 92,
      option: radialBar.options4,
    },
  ];

  const lineChartOptions = {
    series: [
      {
        name: 'PM2.5',
        data: [30, 70, 20, 90, 36, 80, 30, 91, 60],
      },
      {
        name: 'PM10',
        data: [70, 30, 70, 80, 40, 16, 40, 20, 51],
      },
      {
        name: 'SO2',
        data: [55, 16, 19, 67, 38, 90, 12, 21, 50],
      },
      {
        name: 'NO2',
        data: [10, 62, 78, 65, 23, 43, 78, 87, 28],
      },
    ],
    options: {
      chart: {
        background: 'transparent',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
      legend: {
        position: 'top',
      },
      grid: {
        show: false,
      },
    },
  };

  const latestOrders = {
    header: [
      'S.no',
      'Ship Name',
      'Materials',
      'Date',
      'PM 2.5',
      'PM 10',
      'SO2',
      'NO2',
    ],
    body: [
      {
        id: '1',
        ship_name: 'TS sydney',
        date: '19 July 2022',
        materials: 'Capric Acid',
        pm2: 16,
        pm10: 25,
        so2: 34,
        no2: 61,
      },
      {
        id: '2',
        ship_name: 'SSL Mumbai',
        date: '1 Aug 2022',
        materials: 'Pesticides',
        pm2: 52,
        pm10: 25,
        so2: 34,
        no2: 61,
      },
      {
        id: '3',
        ship_name: 'Malmo',
        date: '21 Jul 2022',
        materials: 'Oil Tankers',
        pm2: 12,
        pm10: 25,
        so2: 34,
        no2: 61,
      },
      {
        id: '4',
        ship_name: 'Zumo',
        date: '1 Aug 2022',
        materials: 'Coal',
        pm2: 31,
        pm10: 25,
        so2: 34,
        no2: 61,
      },
      {
        id: '5',
        ship_name: 'Bahriyanbu',
        date: '27 Jul 2022',
        materials: 'Basic Chemicals',
        pm2: 72,
        pm10: 25,
        so2: 34,
        no2: 61,
      },
    ],
  };

  const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

  const renderOrderBody = (item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.ship_name}</td>
      <td>{item.materials}</td>
      <td>{item.date}</td>
      <td>{item.pm2}</td>
      <td>{item.pm10}</td>
      <td>{item.so2}</td>
      <td>{item.no2}</td>
    </tr>
  );

  return (
    <div>
      <Header />
      <div>
        <div className="container">
          <div className="row">
            <div className="card-container col-7">
              <h4>Chennai Port Air Quality Index</h4>
              <h5>Real-time PM2.5, PM10 air pollution in Port</h5>
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
            <div className="col-5">
              <div className="row">
                {weatherTitle.map((lists, index) => (
                  <div className="col-6" key={index}>
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
          </div>
          <div className="row">
            <div className="col-5">
              <div className="row">
                {airPollutants.map((lists, index) => (
                  <div className="col-6" key={index}>
                    <div className="status-card status-card-bar flexbox fdir-col">
                      <div className="flexbox">
                        <Chart
                          series={[lists.value]}
                          options={lists.option}
                          type="radialBar"
                          height="200px"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-7">
              <div className="card-container height-20">
                <Chart
                  series={lineChartOptions.series}
                  options={lineChartOptions.options}
                  type="line"
                  height="100%"
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card-container">
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
          </div>
        </div>
        <div className="body_background"></div>
      </div>
    </div>
  );
};

export default App;
