import './App.css'
import Evento from './components/Evento'
import Galeria from './components/Galeria'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
function App() {
  
 return(
  <>
 <Cabecalho/>
 <Evento 
 titulo={"Evento Mundo SENAI"} 
 descricao={"Alunos de todas as idades apresentam seus projetos!"}
 horario={"Dia 20/09 13:30h"}
 local={"SESI SENAI São José"}/>
<Galeria/>
<Rodape/>
  
  
  </>
 ) 
}

export default App
