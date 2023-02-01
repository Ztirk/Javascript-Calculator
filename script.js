function App() {
    const [cal, setCal] = React.useState(0);

    const handleNumber = (e) => {
        if (cal == 0) {
            setCal(e.target.textContent)
        } else {
            setCal(cal + e.target.textContent)
        }
    }

    const handleOperator =(e) => {
        const operator = e.target.textContent
        if (cal == 0 && operator == '-') {
            setCal('-')
        } else {
            setCal(cal + " " + e.target.textContent + " ")
        }
    }

    const handleEqual = () => {
        setCal(eval(cal))
    }

    const handleReset = () => {
        setCal(0)
    }

    const handleDecimal = (e) => {
        if (cal == 0) {
            setCal('.')
        } else {
            setCal(cal + e.target.textContent)
        }
       
    }

    return (
        <div className="text-white d-flex justify-content-center align-items-center bg-black position-absolute top-50 start-50 translate-middle" style={{height: '400px', width: '300px'}}>
            <div className='grid row' style={{height: '390px', width: '290px'}}>
                <div className='d-flex justify-content-end align-items-center col-12 border border-black'>
                    {cal}</div>
                <div onClick={handleReset} className='d-flex justify-content-center align-items-center bg-primary col-6 border border-black'>AC</div>
                <div onClick={handleOperator} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>/</div>
                <div onClick={handleOperator} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>*</div>
                <div onClick={handleNumber} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>7</div>
                <div onClick={handleNumber} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>8</div>
                <div onClick={handleNumber} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>9</div>
                <div onClick={handleOperator} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>-</div>
                <div onClick={handleNumber} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>4</div>
                <div onClick={handleNumber} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>5</div>
                <div onClick={handleNumber} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>6</div>
                <div onClick={handleOperator} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>+</div>
                <div onClick={handleNumber} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>1</div>
                <div onClick={handleNumber} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>2</div>
                <div onClick={handleNumber} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>3</div>
                <div onClick={handleEqual} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>=</div>
                <div onClick={handleNumber} className='d-flex justify-content-center align-items-center bg-primary col-6 border border-black'>0</div>
                <div onClick={handleDecimal} className='d-flex justify-content-center align-items-center bg-primary col-3 border border-black'>.</div>
                <div className='col-3'></div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))