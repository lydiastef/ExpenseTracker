import React from 'react'
import {Bar} from 'react-chartjs-2';
import {Chart} from 'chart.js'
import { CategoryScale } from 'chart.js/auto';
import '../App.css';
import Labels from './Labels';


const labels = [];
const today = new Date();
for (let i = 3; i >= 0; i--) {
  const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
  const month = date.toLocaleString('default', { month: 'long' });
  labels.push(month);
}
//Income graph
const data = {
  labels: labels,
  datasets: [{
    label: 'Investment',
    data: [65, 59, 80, 81],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
    ],
    borderColor: [
        'rgb(255, 99, 132)',
      ],
      borderWidth: 1
    }, {
        //Expense graph
        label: 'Expenses',
        data: [60, 65, 65, 90],
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
            'rgb(153, 102, 255)',
          ],
          borderWidth: 1
        }, {
    //Savings graph
      label: 'Savings',
      data: [40, 35, 55, 20],
      backgroundColor: [
      'rgba(75, 192, 192, 0.2)',
    ],
      borderColor: [
        'rgba(75, 192, 192)',
    ],
        borderWidth: 1
      }],
    options: {
        cutout: 115
    }
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      x: {
        type: 'category',
        labels: labels,
        scale: {
          display: true,
          ticks: {
            beginAtZero: true
          }
        }
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10
        }
      }
    },
  },
};

const canvas = document.getElementById('myChart');



export default function Graph() {
    return (
        <div className='graph-container'>
            <div className='item'>
                <div className='chartrelative'>
                    <Bar data={data}></Bar>
                </div>
            </div>

            <div className='labels-container'>
                <Labels></Labels>
            </div>
        </div>
    )
}

      //'rgba(255, 159, 64, 0.2)',
      //'rgba(75, 192, 192, 0.2)',
      //'rgba(54, 162, 235, 0.2)',