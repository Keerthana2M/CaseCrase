
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
    <>
    <Navbar title = "CaseCrase" aboutText="About"/>
    <div className='Container'>
    <TextForm heading="Enter the text to Analyse below"/>
    </div>
    
    </>
   
  )
}

export default App;
