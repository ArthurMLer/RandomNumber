"use client"

import { useState } from "react";

export default function CounterPage(){
    const [numf, setNumf] = useState(0);
    const [numb, setNumb] = useState(0);
    const [numa, setNuma] = useState(0);
    return(
        <>
        <div>
        <input type="number" value={numa} onChange={(event)  =>setNuma(parseInt(event.target.value))}/>
        <input type="number" value={numb} onChange={(event) => setNumb(parseInt(event.target.value))}/>
        <button onClick={() => setNumf(parseInt(numa + numb))}>Soma</button>
        <button onClick={() => setNumf(parseInt(numa - numb))}>Subtrair</button>
        <button onClick={() => setNumf(parseInt(numa * numb))}>Multiplicação</button>
        <button onClick={() => setNumf(parseInt(numa / numb))}>Divisão</button>
        <button onClick={() => setNumf(parseInt(0))}>Zerar</button>
        <button onClick={() => setNuma(parseInt(numf))} onClickCapture={() => setNumf(parseInt(0))}>Usar</button>
        </div>
<p>{numf}</p>
        </>
        
    )

    function newFunction(): string {
        return numa * numb;
    }
}