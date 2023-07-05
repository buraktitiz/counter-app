import './App.css';

import Counter from './components/Counter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <Counter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
