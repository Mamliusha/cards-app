import { Component } from "react";

export default class HiComponent extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Adil'
      }
      this.HandleClick = this.HandleClick.bind(this);
    }

 HandleClick(){
    this.setState({
        name:'Misha'
    })
 } 
    
render(){
    return(
        <div>
        <h2>Hello,{this.state.name}! </h2>
        <button onClick={this.HandleClick}>Click</button>
        </div>)

}
}