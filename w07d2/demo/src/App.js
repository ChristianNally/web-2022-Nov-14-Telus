import './App.css';
import Advertisement from './components/Advertisement';
import Counter from './components/Counter';
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
      <h2>Phone Book</h2>
      <Advertisement title="Joe's Pizza" message="best Pizza in town!" /> { /* Advertisement(arg1) */ }
      <Advertisement title="City Morgue" message="You Stab 'Em, We Slab 'Em" />
      <Advertisement title="Excavators Are Us" message="we dig it!" />
      <Counter defaultName="monkey" />
      <Listing name="Jenny" number="8675309"/>
      <Listing name="Alpha" number="1"/>
      <Listing name="Beta" number="2"/>
    </div>
  );
}

export default App;
