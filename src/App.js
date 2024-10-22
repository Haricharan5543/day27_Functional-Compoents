
import './App.css';
import Players from './components/Players';


function App() {
  return (
    <div className="App">
      <h1>With out PROPS</h1>
      <div className="playerDiv">
      <img src="./images/rohit sharma.webp" alt='' ></img>
      <h2>Name: Rohit Sharama</h2>
      <h3>Team: MI</h3>
      <h3>Role:Caption</h3>
      </div>
      <div className="playerDiv">
      <img src="./images/msdhoni.webp" alt='' ></img>
      <h2>Name: M S Dohni</h2>
      <h3>Team: CSK</h3>
      <h3>Role:Caption</h3>
      </div>
      <div className="playerDiv">
      <img src="./images/virat Kohli.webp" alt='' ></img>
      <h2>Name: Virat Kohli</h2>
      <h3>Team: RCB</h3>
      <h3>Role:Caption</h3>
      </div>
      <hr></hr>
      <h1>With  PROPS</h1>
      <Players Name="Hardik Pandya" Team="MI" Role="All Rounder" Images="./images/Hardik pandya.webp"></Players>
      <Players Name="Ishan Kishan" Team="MI" Role="Batesmen" Images="./images/Ishan Kishan.webp"></Players>
      <Players Name="M S Dohni" Team="CSK" Role="Caption" Images="./images/msdhoni.webp"></Players>
      <Players Name="Ravindra Jadeja" Team="CSK" Role="All Rounder" Images="./images/Ravindra Jadeja.webp"></Players>
      <Players Name="Virat Kohli" Team="RCB" Role="Caption" Images="./images/virat kohli.webp"></Players>
      

    </div>
  );
}

export default App;
