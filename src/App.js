import React,{useEffect,useState} from "react";
import "./style.css";
function Cntr(){
  const initila = 0;
  const [num,setNum] = useState(initila);
  return (
    <>
     num :{num}
     <button onClick={()=>setNum(num+1)}>Increment</button>
     <button onClick={()=>setNum(num-1)}>Decrement</button>
     <button onClick={()=>setNum(initila)}>Re-Set</button>
    </>
  );
}
class Multist extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      count:10,
      name:"Nagendra",
      age:25
    };
  }
  render(){
    return (
      <>
      <Cntr />
  <h3>The Count is :{this.state.count} && Name is {this.state.name} && AGe is {this.state.age}</h3>
      </>
    );
  }
}
function Cnn(){
  const [n1,setN1] = useState(0);
  return (
    <>
    <Multist />
    <button onClick={()=>setN1(n1+1)}>{n1}</button>
    </>
  );
}
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      count : 10
    };
  }
  inc =()=>{
    this.setState({count:this.state.count+1})
  }
  render(){
    return (
      <>
      <Cnn />
      <button onClick={this.inc}>{this.state.count}</button>
      </>
    );
  }
}
function App1() {

useEffect(() => {
	fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then(json => console.log(json))
	}, []);

return (
	<div>
    <Counter />
		<h4>Different ways to fetch Data</h4>
	</div>
);
}

export default App;

export default function App() {
  return (
    <div>
      <App1 />
      <h1>useState and UseEffect Hooks!</h1>
      </div>
  );
}
