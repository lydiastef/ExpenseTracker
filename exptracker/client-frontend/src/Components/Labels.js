import React from 'react'

export default function Labels() {
    return (
        <>
            {LabelComponent()}
        </>
    )
}

function LabelComponent() {
    return (
        <div className='labels'>
            <div className='flex'>
                <h3>Savings</h3>
            </div>
        </div>
    )
}