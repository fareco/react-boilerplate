import React from 'react';

const Counter = ({ counter, decrement, increment, reset }) => (
  <div>
    <h1>counter : {counter.count} </h1>
    <button onClick={() => increment()}>+</button>
    <button onClick={() => decrement()}>-</button>
    <button onClick={() => reset()}>reset</button>
  </div>
);


//  class Counter extends Component {
//   render() {
//     return ( 
//       <div>
//         <h1>counter : {this.props.counter.count} </h1>
//         <button onClick={() => this.props.increment()}>+</button>
//         <button onClick={() => this.props.decrement()}>-</button>
//         <button onClick={() => this.props.reset()}>reset</button>
//       </div>
//     )
//   }
// }
export default Counter;

