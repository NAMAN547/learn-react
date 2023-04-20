import React,{useRef, useState} from 'react'


const StopWatch = () => {

    const [seconds, setSeconds] = useState(0)

    const refValue = useRef(null)

    const startTimer = ()=>{

        clearInterval(refValue.current)

       refValue.current =  setInterval(()=>{

            setSeconds(prevSeconds=> prevSeconds +  .01)

        },10)

    }

    const stopTimer = ()=>{

        clearInterval(refValue.current)
    }

  return (
         <div>
        
       <p>  Timer : {seconds.toFixed(2)}</p>

       <button onClick={startTimer}> Start </button>

       <button onClick={stopTimer}> Stop </button>
        
       <button onClick={()=> setSeconds(0)}> Reset </button>
        </div>
  )
}

export default StopWatch