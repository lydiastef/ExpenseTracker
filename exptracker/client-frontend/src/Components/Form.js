import React from 'react'
import {useForm} from 'react-hook-form'; //get all the data of the form
import List from './List';

export default function Form() {

    const {register, handleSubmit, resetField} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        //data is parameter and can have any name
    }
    return (
        <div className='form'>
            <h1 className='formh1'>Transaction</h1>
                                        
            <form id='form' onSubmit={handleSubmit(onSubmit)}> 
                <div className='grid'>
                    <div className='input-group'>
                        <input type='text' {...register('name')} placeholder='Salary, House rent, Dogsit' className='form-input'></input>
                    </div>
                    <select className='form-input1' {...register('type')}>
                        <option value='Investment' defaultValue>Investment</option>
                        <option value='Expense' defaultValue>Expense</option>
                        <option value='Savings' defaultValue>Savings</option>
                    </select>
                    <div className='input group'>
                        <input type='text' {...register('amount')} placeholder='Amount' className='form-input'></input>
                    </div>
                    <div className='containerbtn'>
                        <button className='submitbtn'>Submit</button>
                    </div>
                </div>
            </form>

            <List></List>
        </div>
    )
}