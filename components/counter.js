import React, {Component} from 'react'

class Counter extends Component{
constructor(){
    super()
    this.state={
        count:1
    }
}
    formatCount(){
        const count=this.state
        return count === 0? <h6>Zero</h6> : count
    }

    render(){
        return(
        <div>
            <span className="badge badge-warning m-2">{this.formatCount()}</span>
        </div>
    )}
}

export default Counter
