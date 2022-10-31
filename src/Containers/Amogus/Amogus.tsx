import { useState } from 'react'
import "./Amogus.scss";

function Amogus() {
    const [count, setCount] = useState(0)

    return (
        <div className="everything">
            <h1 className="amogus-heading">
                Among us counter
            </h1>
            <div className="div-amogus">Amogus?</div>
            <div className="card">
                <button  className="amogus-button"onDoubleClick={() => setCount((count) => count + 69)}>
                    sus is {count}
                </button>
                <p>
                    kinda sus
                </p>
                {/* <a className='dontclick' target="_blank" href="https://www.google.com">dont click</a> */}
                <button className="dontclick" onClick={() => window.open('https://www.google.com', '_blank')}>dont click</button>
            </div>
        </div>
    )
}

export default Amogus