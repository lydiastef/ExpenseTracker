import React from 'react'
import {Bar} from 'react-chartjs-2';
import {Chart} from 'chart.js'
import { CategoryScale } from 'chart.js/auto';
import '../App.css';
import Labels from './Labels';


const labels = [];
const today = new Date();
for (let i = 6; i >= 0; i--) {
  const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
  const month = date.toLocaleString('default', { month: 'long' });
  labels.push(month);
}

const data = {
  labels: labels,
  datasets: [{
    label: 'Incomes',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
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
    responsive: true,
    maintainAspectRatio:false,
    plugins: {
        legend: {
            position: 'top',
        },
    },
    layout: {
        margin: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50,
        },
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