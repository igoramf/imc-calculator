import {  useState } from 'react';
import styles from './App.module.css';
import { GridComponent } from './components/GridComponent';
import { calcIMC } from './helpers/imc'
import { levels } from './helpers/imc';
import { Level } from './helpers/imc'
import leftArrow from './assets/leftarrow.png'

function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [showItem, setShowItem] = useState<Level | null>(null);


  const handleCalculateIMC = () => {
    if(height && weight){
      setShowItem(calcIMC(weight, height));
    }else{
      alert('Preencha todos os campos.')
    }
  };

  const handleBack = () => {
    setHeight(0)
    setWeight(0)
    setShowItem(null);
  };


  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
            <span>Made by Igor Falcao</span>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1> 
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input 
          type="number" 
          placeholder='Digite a sua altura em metros. Ex: 1.5'
          value={height > 0 ? height : ''}
          onChange={e => {setHeight( parseFloat( e.target.value) )}}
          disabled={showItem ? true : false}
          />


          <input 
          type="number" 
          placeholder='Digite o seu peso em kg. Ex: 75.3'
          value={weight > 0 ? weight  : ''}
          onChange={e => {setWeight( parseFloat(e.target.value) )}}
          disabled={showItem ? true : false}
          />

          <button onClick={handleCalculateIMC}  disabled={showItem ? true : false}>Calcular</button>

        </div>
        <div className={styles.rightSide}>


          {!showItem &&
            <div className={styles.grid}>
                {levels.map((item, key) => (  
                <GridComponent 
                key={key}
                title={item.title}
                color={item.color}
                icon={item.icon}
                imc={item.imc}
                />))}
            </div>
            }


            {showItem && 
              <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={handleBack}>
                  <img src={leftArrow} />
                </div>
                <GridComponent 
                  title={showItem.title}
                  color={showItem.color}
                  icon={showItem.icon}
                  imc={showItem.imc}
                  yourIMC={showItem.yourIMC}
                />
              </div>
            }
          </div>
      </div>
    </div>
  )
}

export default App
