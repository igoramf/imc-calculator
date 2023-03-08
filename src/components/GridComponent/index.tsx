import  styles from './GridComponent.module.css';
import down from '../../assets/down.png'
import up from '../../assets/up.png'

export type props = {
    title: string,
    color: string,
    icon: string,
    imc: number[],
    key?: number,
    yourIMC?: number
}

export const GridComponent  = ( { title, color, icon, imc, yourIMC} : props) => {
    return (
        <div className={styles.main} style={{backgroundColor: color, display:'flex'}} >
            <div className={styles.thumb}>
                <img src={icon === 'down' ? down : up} alt="" />
            </div>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            {yourIMC && 
                <div className={styles.imc}>
                    <>
                        O seu imc e <strong>{yourIMC}</strong>
                    </>
                </div>
            }

            <div className={styles.legend}>
                <>
                O seu imc esta entre <strong>{imc[0]}</strong> e <strong>{imc[1]}.</strong>
                </>
            </div>
        </div>
        
    )
}