'use client'
import CounterPage from "../ContadorNext/page"
import InputPage from "../input/page"
import styles from "./page.module.css"
export default function ArthurPage() {
const mudarCor = () => {
    document.getElementById("name0")?.classList.add(styles.mudacor)


}
    return(
       
        <><div>
            <h1 onClick={() => mudarCor()} id="name0" className={styles.teste}>Arthur Lerch</h1>

            <h2 className={styles.subtexto}>Um homem de palavra</h2>
            <h3 className={styles.genio}><a href="https://www.youtube.com/watch?v=oU48gHOfESU" target="_blank"> Veja 26 obras de arte</a></h3>
            <h1 className={styles.putz}>Olha lá, o homem gol chegou</h1>
        </div>
        <div className={styles.homemgol2}>
           <a href="https://www.youtube.com/watch?v=5uUoyOqTlVk" target="_blank"><abbr title="Veja os gols do homem-gol"><img src="galdinogol.png" /></abbr></a>
            </div>
        <InputPage></InputPage>

        <CounterPage></CounterPage>
            </>
    )
}

    

