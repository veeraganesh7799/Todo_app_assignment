import React,{useState} from 'react'
import './index.css'

const SolvePage = () => {
    const [userInput1, setUserInput1] = useState('')
    const [userInput2, setUserInput2] = useState('')
    const [userInput3, setUserInput3] = useState('')
    const [errorStatus,setErrorStatus] = useState(null)
    const [solution,setSolution] = useState(null)
    const [displayStaus, setDisplayStatus] = useState(false)

    const zeroHandler = () => 0
    const oneHandler = () => 1
    const twoHandler = () => 2
    const threeHandler = () => 3
    const fourHandler = () => 4
    const fiveHandler = () => 5
    const sixHandler = () => 6
    const sevenHandler = () => 7
    const eightHandler = () => 8
    const nineHandler = () => 9
    
    const userInput1Handler = () => {
        switch(userInput1.toLocaleLowerCase()){
            case "zero":
                return zeroHandler()
            case "one":
                return oneHandler()
            case "two":
                return twoHandler()
            case "three":
                return threeHandler()
            case "four":
                return fourHandler()
            case "five":
                return fiveHandler()  
            case "six":
                return sixHandler()
            case "seven":
                return sevenHandler()
            case "eight":
                return eightHandler()
            case "nine":
                return nineHandler()
            default:
                return null       
        }
    }

    const userInput3Handler = () => {
        switch(userInput3.toLocaleLowerCase()){
            case "zero":
                return zeroHandler()
            case "one":
                return oneHandler()
            case "two":
                return twoHandler()
            case "three":
                return threeHandler()
            case "four":
                return fourHandler()
            case "five":
                return fiveHandler()  
            case "six":
                return sixHandler()
            case "seven":
                return sevenHandler()
            case "eight":
                return eightHandler()
            case "nine":
                return nineHandler()
            default:
                return null       
        }
    }
    

    const additionHandler = () => userInput1Handler() + userInput3Handler()
    const substractionHandler = () => userInput1Handler() + userInput3Handler()
    const multiplicationHandler = () => userInput1Handler() * userInput3Handler()
    const divisionHandler = () => {
        if (userInput3Handler() === 0){
            return "Zero is not Divisible"
        }else{
            return userInput1Handler() / userInput3Handler()
        }
    }
    const modulusHandler = () => userInput1Handler() % userInput3Handler()
    const errorHandler = () => "*Please Enter Invalid Input"

    const operatorHandler = () => {
        switch(userInput2.toLocaleLowerCase()){
            case "addition":
                return additionHandler()
            case "substraction":
                return substractionHandler()
            case "multiplication":
                return multiplicationHandler()
            case "division":
                return divisionHandler()
            case "modulus":
                return modulusHandler()  
            default:
                return errorHandler()      
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (userInput1 !== '' && userInput2 !== '' && userInput3 !== ''){
            const result = operatorHandler()
            setSolution(result)
            setErrorStatus(false)
            setDisplayStatus(true)
            setUserInput1('')
            setUserInput2('')
            setUserInput3('')
        }
        else{
            setErrorStatus(true)
        }
    }


  return (
    <div className='solve-container'>
      <form className='form-container-solve' onSubmit={submitHandler}>
        {!displayStaus ?
        <>
        <h2 className='heading'>Master Querys</h2>
        <div className='inputs-container'>
        <div className='input-box-container'>
            <label className='label' htmlFor='firstOp'>First Input Num</label>
            <input type='text' placeholder='Operand 1' className='input-box-solve' id='firstOp' value={userInput1} onChange={(e)=>setUserInput1(e.target.value)}/>
        </div>
        <div className='input-box-container'>
            <label className='label' htmlFor='operator'>Operator</label>
            <input type='text' placeholder='Operator' className='input-box-solve' id='operator' value={userInput2} onChange={(e)=>setUserInput2(e.target.value)}/>
        </div>
        <div className='input-box-container'>
            <label className='label' htmlFor='secondOp'>Second Input Num</label>
            <input type='text' placeholder='Operand 2' className='input-box-solve' id='secondOp' value={userInput3} onChange={(e)=>setUserInput3(e.target.value)}/>
        </div>
        </div>
        <button type='submit' className='submit-btn-sol'>Submit</button>
        {errorStatus && <p className='error'>{errorHandler()}</p>}
        <div className='guidelines-container'>
                <h6 style={{"font-family": 'sans-serif'}}>Notes:</h6>
                <p className='notes'><b>The Operator should be in words like:</b> addition, substraction, multiplication, division, modulus</p>
                <p className='notes'><b>The numbers should be in</b> words</p>
        </div>
        </>:
        <div className='solution-popup'>
            <div>
            <h5 className='answer'>The Answer is : <span className='sol'>{solution}</span></h5>
            <button className='back-btn' onClick={()=>setDisplayStatus(false)}>Back</button>
            </div>
            
        </div>
}
      </form>
    </div>
  )
}

export default SolvePage
