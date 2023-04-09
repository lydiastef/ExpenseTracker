import React from 'react'
import { BsTrash3 } from 'react-icons/bs';

const obj = [
    {
        name: 'Investment',
        color: 'rgb(255, 99, 132, 0.5)',
    },
    {
        name: 'Expenses',
        color: 'rgb(153, 102, 255, 0.5)',
    },
    {
        name: 'Savings',
        color: 'rgba(75, 192, 192, 0.5)',
    }
]

export default function List () {
    return (
        <div className='listcontainer'>
            <h3 className='listh3'>History</h3>
             {obj.map((v,i) => <Transaction key={i} category={v}></Transaction>)}
        </div>
        // v = value, i = index
    )
}

function Transaction({category}) {
    if(!category) return null;
    return (
        <div className='listcategory'>
            <span className='savings' style={{borderLeft: `10px solid ${category.color?? 'rgb(255, 99, 132, 0.5)'}`}}>{category.name ? category.name : 'default value'}
            <button className='listbtn'><BsTrash3 className='trash'/></button>
            </span>
        </div>
    )
}