import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [names, setNames]= useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNames(data))

  }, [])

  const myFriend = [{name: 'Azizul Hakim',year: 11 },{name:'Haidaz Karim', year: 10},{name:'Istiak Ahmed', year:5},{name:'Imran UR Rashid', year:9}]
  return (
    <div className="App">
      <div>
      {
        names.map(data => <Myfriends name={data.name}></Myfriends>)
      }
      </div>
      
      <div><Button></Button></div>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <JustStart></JustStart>
        </p>
        <Myfriends name={myFriend[0].name} year={myFriend[0].year}></Myfriends>
      </header>
      <Myfriends name={myFriend[1].name} year={myFriend[1].year}></Myfriends>
      {
        myFriend.map(data => <Myfriends name={data.name} year={data.year}></Myfriends>)

      }
    </div>
  );
}


function JustStart(){
  return (
  <div>
    <h1>hello ! I am start learn react js</h1>
  <h2>yehhoo i can!!</h2>
  <h3>yess i can unnderstand that how i can use componant and write componet</h3></div>
  );
}

function Myfriends(props){
  const friends= {
    backgroundColor: 'red',
    border: '1px solid white',
    width:'200px',
    height:'auto',
    float: 'left',
    display:'block',
    height:'200px'
  }
  return (
    <div style={friends}>
      <h3>Name:{props.name}</h3>
      <h5>he is my friend more then {props.year} years</h5>
      <p>yess!! i can done 2nd part , Alhumdulillah</p>

    </div>
  )
}
function Button(){
  const [count, setCount]= useState(0);
  return(
    <div style={{float:'right'}}>
      <h2>My total Click:{count}</h2>
      <button onClick={ ()=> setCount(count+1)}>Click Me to Count</button>
      <button onClick={ ()=> setCount(count-1)}>Click me to Decrease</button>
    </div>
  )
}


export default App;
