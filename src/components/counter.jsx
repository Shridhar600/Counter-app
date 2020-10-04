import React, { Component } from 'react';
  
class Counter extends Component {
    state = {
        count: 0
    };
    render() { 
        return (
        <div>
            <span>{ this.formatCount() }</span>
            <button>Increment</button>
            </div>
        );
    } 

    formatCount() {
        const { count } = this.state;  // count property from state ko ek separate constant me daal diya taaki baar baar this.state.count na likhna pade
        return count === 0 ?  " zero " : count; // ab upar span me seedhe foramtCount wala fucntion call kar diye.
    }
}
export default Counter;