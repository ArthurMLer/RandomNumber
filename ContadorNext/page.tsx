"use client"
import { useState } from "react"
import styles from "./page.module.css"


export default function CounterPage(){
const [count, setCount] = useState(0)
    return(
        <>
        {
            count >= 0 ? <p className={styles.green}>{count}</p> : <p className={styles.red}>{count}</p>
        }

        <button className={styles.btnsomaconfig}onClick={() => setCount(count +1)}>Somar</button>
        <button className={styles.btnsubconfig}onClick={() => setCount(count -1)}>Subtrair</button>
        <button className={styles.btnmultconfig}onClick={() => setCount(count *2)}>Multiplicar x2</button>
        <button className={styles.btndivconfig}onClick={() => setCount(count /2)}>Dividir por 2</button>
        <button className={styles.btnzeroconfig}onClick={() => setCount(0)}>Zerar</button>
       </>
    )
    }
