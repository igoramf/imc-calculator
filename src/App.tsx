import styles from './App.module.css';

function App() {

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
          placeholder='Digite a sua altura em metros. Ex: 1.5' />


          <input 
          type="number" 
          placeholder='Digite o seu peso em kg. Ex: 75.3'/>

          <button>Calcular</button>


        </div>
        <div className={styles.rightSide}>,,,</div>
      </div>
    </div>
  )
}

export default App
