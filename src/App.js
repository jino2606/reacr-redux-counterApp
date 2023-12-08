// import logo from './logo.svg';
import './App.css';
import Oombu from './components/Oombu';


function App() {

  

  return (
    <div className='p-5 rounded-4 custom' >
      <h1 className='text-center text-primary'>Counter App</h1>

      <div className='container d-flex align-items-center justify-content-center w-100 mt-5  rounded'>

        <Oombu />

      </div>
    </div>
  ); 
}

export default App;
