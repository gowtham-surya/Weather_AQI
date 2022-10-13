import React from 'react';
import '../assets/css/entry.css';
import Chart from 'react-apexcharts';

const Entry = () => {
  
  var airQualityIndex = [
    {
      name: 'Port 1',
      value: 78,
    },
    {
      name: 'Port 2',
      value: 87,
    },
    {
      name: 'Port 3',
      value: 95,
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

  return (
    <div className="container entry">
      <div className="col-12" style={{ width: '800px', marginBottom: '1rem' }}>
        <div className="row">
          {airQualityIndex.map((lists, index) => (
            <div className="col-4" key={index}>
              <a href="https://bitsathy.ac.in">
                <div className="status-card status-card-bar flexbox fdir-col">
                  <div className="flexbox">
                    <Chart
                      series={[lists.value]}
                      options={{
                        ...radialBar.options,
                        labels: [lists.name],
                      }}
                      type="radialBar"
                      height="250px"
                    />
                  </div>
                </div>
              </a>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Entry;
