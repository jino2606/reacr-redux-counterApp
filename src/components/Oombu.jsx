import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Oombu() {

    /* hook to dispatch a function from action */
    /* using this only we call the functions inside the action */
    const dispatch = useDispatch()

    /* components can access the state by using the use selector hook */
    const count = useSelector((state)=>state.counter.value)

    const [range, setRange] = useState("")
    console.log(range, " range value");

  return (
    <div className='d-flex align-items-center justify-content-center flex-column w-100 my-5 text-dark'>

        <h1 className='text-white'>{count}</h1>
        <div  className='d-flex align-items-center justify-content-between w-100 mt-5 text-dark'>
            <button onClick={()=>{dispatch(decrement(Number(range)))}} className='btn btn-warning p-3'>Decrement</button>
            <button onClick={()=>{dispatch(reset(Number(range)))}} className='btn btn-danger p-3 ms-3'>Reset</button>
            <button onClick={()=>{dispatch(increment(Number(range)))}} className='btn btn-success p-3 ms-3'>Increment</button>
        </div>

        <div>
          <input type="text" onChange={e => setRange(e.target.value)} className='form-control w-100 mt-3' placeholder='Enter the range' style={{borderColor: 'blue'}}/>
        </div>
    </div>
  )
}

export default Oombu
