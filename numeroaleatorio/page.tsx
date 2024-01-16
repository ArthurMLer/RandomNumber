'use client'
import React, { useState } from "react"
import styles from "./page.module.css"

export default function RandomPage(){
    const [count, setCount] = React.useState(Math.round(Math.random() * 100));
    const [chute, setChute] = useState(0)
    const [feedback, setFeedback] = useState(NaN)
    

    

return(
    <>
        <h1 className={styles.titulo}>Jogo de Adivinhação</h1>
    
        <div className={styles.div}>
        <input type="number" value={chute} onChange={(event) => setChute(parseInt(event.target.value))} />
        <button onClick={() => setFeedback(chute)}>Enviar Chute</button>
       

        {
            count > feedback ? <p> Muito Baixo</p> :
            count < feedback ? <p> Muito Alto</p> :
            count == feedback ? <><p> Acertou</p></> :
            <></>
        }
    </div>
    </>
)
    
}


    

    