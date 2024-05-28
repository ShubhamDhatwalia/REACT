import React, { Component} from 'react'
import Car from './Car';

class App extends Component{


  constructor(){
    super();
    this.state = {language: "Java"};
    console.log(this);
  }

  changeLanguage = ()=>{
    this.setState({language: "Javascript"});
  }

  render(){
  return (

    <>
    <div className="heading">
      <h2>Hello buddy ! Let's start with {this.state.language}.</h2>
      <button type='button' onClick={this.changeLanguage}>Change State</button>
    </div>

    <div>
      <h3>Sorry, Javascript has been completed then start whatever you want {this.props.language}</h3>
    </div>

    <Car />
    </>
  );
}
}





export default App;