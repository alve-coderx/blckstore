import Mint from './Components/Mint';
import Navbar from './Components/Navbar'
import Services from './Components/Services';
import Title from './Components/Title';
import Visualizer from './Components/Visualizer';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers"
import { BrowserRouter } from 'react-router-dom';

function App() {
  function getLibrary(provider) {
    return new Web3Provider(provider);
  }

  return (
    <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Navbar />
        <div className='flex lg:flex-row flex-col items-center justify-around mt-5 mb-5 lg:mt-36'>
          <div>
            <Title />
            <Services scope="lg" condition="block" defaultCondition="hidden" />
          </div>
          <div >
            <Mint />
            <Visualizer />
          </div>
          <Services scope="lg" condition="hidden" defaultCondition="block" />
        </div>
      </div>
    </Web3ReactProvider>
    </BrowserRouter>
  );
}

export default App;
