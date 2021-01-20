import './App.css';
import React from "react"
// import {Component}  from 'react'
// import Clock from "./Clock";
import image from './Images/oussama.jpg';
import Counter from './conteur';
import { Button} from "react-bootstrap";
class App extends React.Component {

  state = {

    fullName: 'Mohamed Oussama Boussetta',
    bio: 'Student in GoMyCode',
    img: <img className='photo' src={image} width='100px'/>,
    profession: 'propriétaire de Valhalla Virtual Escape Game',
    show: false,
  }

  render() {
    console.log(this.state.show);
    if (this.state.show) {
      return <div className='App'>

        <div >

        <Button onClick={() => this.setState(e => ({ show: !e.show }))}
          >Success</Button>
          <div>
            <h1> {this.state.fullName}</h1>
          </div>
          <div>

            <h2>{this.state.bio}</h2>
          </div>
          <div>

            {this.state.img}
          </div>
          <div>

            <h2> {this.state.profession}</h2>
          </div>
          {/* <Clock /> */}
        
        </div>
        <>  <Counter/></>
      </div>
    }
    else {
      {
        return  <Button className='btnShow' onClick={() => this.setState(e => ({ show: !e.show }))}
        >Montre moi ton profil
        </Button>
      }
    }

  }
}







export default App;
