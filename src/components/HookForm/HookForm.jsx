import React from 'react'
import { useForm } from 'react-hook-form'
import "./form.css"

const defaultValue = {
  brand: "",
  model: "",
  color: "",
  year: "",
  price: ""
}

const HookForm = ({createNewCar}) => {

    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
      createNewCar(data)
      reset(defaultValue)
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
        
        <button>Submit</button>
    </form>
  )
}

export default HookForm