'use client'
import {useState} from "react";
import styles from "./page.module.css"
export default function InputPage(){
    const [text, setText] = useState('');

    return(
        <><div>
            <h1 className={styles.meiodatela}>
                O que achas desse homem?
            </h1>
            <div className={styles.inputconfig}>
            <input
                value={text}
                onChange={(event) => setText(event.target.value)} className={styles.galditext}/>
                </div>
                <div>
                        <h1 className={styles.meiodatela}>Everton Galdino é {text}</h1>
                </div>
        </div>
        
        </>
    )
}