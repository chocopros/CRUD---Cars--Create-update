import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./form.css"
import axios from 'axios'

const defaultValue = {
  brand: "",
  model: "",
  color: "",
  year: "",
  price: ""
}

const HookForm = ({createNewCar, updateInfo, getAllCars,setUpdateInfo}) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(()=>{
      if(updateInfo){
        reset(updateInfo)
      }
      
    },[updateInfo])

    const submit = data => {
      if(updateInfo){
        //update
        const url = `https://cars-crud.herokuapp.com/cars/${updateInfo.id}/`
        axios.patch(url, data)
          .then(res => {
            console.log(res.data)
            getAllCars()
          })
          .catch(err => console.log(err))
          reset(defaultValue)
          setUpdateInfo()
      } else {
        //create
        reset(defaultValue)
        createNewCar(data)
      }
    }

  return (
    <form className='NewCardInput' onSubmit={handleSubmit(submit)}>
        <h2>Register New Car</h2>
        <div>
          <label htmlFor="brand">Brand: </label>
          <input placeholder='Brand vehicle' {...register('brand')} type="text" id='brand' />
        </div>
        <div className='lbl-model'>
          <label htmlFor="model">Model: </label>
          <input placeholder='Model vehicle' {...register('model')} type="text" id='model' />
        </div>
        <div className='lbl-color'>
          <label htmlFor="color">Color: </label>
          <input placeholder='Color vehicle' {...register('color')} type="text" id='color' />
        </div>
        <div className='lbl-year'>
          <label htmlFor="year">Year: </label>
          <input placeholder='Year' {...register('year')} type="number" id='year' />
        </div>
        <div className='lbl-price'>
          <label htmlFor="price">Price: </label>
          <input placeholder='Price' {...register('price')} type="number" id='price' />
        </div>
        <div>
          <button>Submit</button>
        </div>
        
        
    </form>
  )
}

export default HookForm