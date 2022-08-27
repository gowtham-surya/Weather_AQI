import React from 'react';
import '../assets/css/entry.css';
import Chart from 'react-apexcharts';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Entry = () => {
  const [OnSetHandleEvents, setOnSetHandleEvents] = useState(null);
  const [ShipName, setShipName] = useState(null);
  const [Port, setPort] = useState(null);
  const [Type, setType] = useState(null);
  const [Quantity, setQuantity] = useState(null);
  const [Arrival, setArrival] = useState(null);
  const [Departure, setDeparture] = useState(null);

  console.log(Port);
  console.log(Type);

  const navigate = useHistory();

  const onhandleWhenEnter = (e) => {
    if (Port === 'Port A') {
      navigate.push(`/port_A/${Type}`);
      window.location.reload(false);
    } else if (Port === 'Port B') {
      navigate.push(`/port_B/${Type}`);
      window.location.reload(false);
    } else if (Port === 'Port C') {
      navigate.push(`/port_C/${Type}`);
      window.location.reload(false);
    }
  };

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
            </div>
          ))}
        </div>
      </div>
      <div className="card-container card">
        <h5 style={{ fontWeight: 'bolder' }}>AQI Validation Panel</h5>
        <div className="row">
          <div
            className="col-6"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label htmlFor="ship_name">Ship Name:</label>
            <input
              type="text"
              name="ship_name"
              id="ship_name"
              placeholder="(e.g)., WAXL08457"
              onClick={(e) => {
                setShipName(e.target.value);
              }}
            />
            <datalist id="port_option">
              <option value="Select one"></option>
              <option value="Port A"></option>
              <option value="Port B"></option>
              <option value="Port C"></option>
            </datalist>
            <label htmlFor="port_option">Select Port:</label>
            <input
              autoComplete="on"
              type="text"
              list="port_option"
              className="dropDown"
              id="port_option"
              onClick={(e) => {
                setPort(e.target.value);
              }}
            />
            <datalist id="shipment_type">
              <option value="Coal">Coal</option>
              <option value="Iron Ore">Iron Ore</option>
              <option value="Fertilizer">Fertilizer</option>
              <option value="POL">POL</option>
            </datalist>
            <label htmlFor="shipment_type">Shipment Type:</label>
            <input
              autoComplete="on"
              type="text"
              list="shipment_type"
              className="dropDown"
              id="shipment_type"
              onClick={(e) => {
                setType(e.target.value);
              }}
            />
          </div>
          <div
            className="col-6"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label htmlFor="shipment_type">Arrival Date:</label>
            <input
              onClick={(e) => {
                setArrival(e.target.value);
              }}
              type="date"
              name="arrival"
              id="arrival"
            />
            <label htmlFor="shipment_type">Departure Date:</label>
            <input
              onClick={(e) => {
                setDeparture(e.target.value);
              }}
              type="date"
              name="departure"
              id="departure"
            />
          </div>
        </div>

        <button
          className="btn"
          name="submit"
          value="submit"
          onClick={(e) => {
            setOnSetHandleEvents(e.target.value);
            onhandleWhenEnter();
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Entry;
