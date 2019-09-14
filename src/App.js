import React from 'react';
 import './App.css';
import Navigation from  './components/navigation/Navigation';
import Logo from './components/logo/logo';
import Rank from './components/Rank/Rank';
import Register from './components/register';
import Particles from 'react-particles-js';
import Imageinputform from './components/Imageinputform/Imageinputform';
  import Facerecognition from './components/facerecognition/facerecongnition';
 import SingIn from './components/sign/sign';
 
const options={
    particles: {
     number:{
value:100,
 density:true
     },
      size:{
        value:3,
        random:true
      },
      color:{
        value:'#000'
      },
      opacity:{
        value:8
      }
    }
} 


 const initialState = {
  input:'',
  imageUrl:'',
  box:{},
  route:'signin',
  isSigned:'',
  user:{
    id:'',
    name:'',
     email:'',
    entries:0,
    joined:''
  }
}

class App extends React.Component {

  constructor(){
    super()
    this.state=initialState;
  }

  loadUser=(data)=>{
     this.setState({
      user:{
        id:data.id,
        name:data.name,
         email:data.email,
        entries:data.entries,
        joined:data.joined
      }
    })
    this.setState({
     })
  }
   
   
  calculateFaceLocation = (data)=>{
     const clarifai = data.outputs[0].data.regions[0].region_info.bounding_box;
     const image = document.getElementById('inputimage');
       const width = image.width;
        const height = image.height;

        return {
          leftCol:clarifai.left_col * width,
          topRow: clarifai.top_row * height,
          rightCol:width - (clarifai.right_col * width),
          bottomRow: height - (clarifai.bottom_row * height)
        }

  }

  displayFaceBox = (box)=>{
    console.log(box);
    this.setState({box:box})
  }


  handleChage = (e) => {
     
this.setState({
  input:e.target.value
})

   }

  DetectChange = (e)=>{
      this.setState({
        imageUrl:this.state.input
      })
      console.log(this.state.input);
      fetch('https://tranquil-castle-39734.herokuapp.com/imageUrl',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          input:this.state.input
        })
      }).then(res=>res.json())
      .then(response => {
        console.log(response);
        if(response){
           fetch('https://tranquil-castle-39734.herokuapp.com/image',{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              id:this.state.user.id
            })
          }).then(data=>data.json())
          .then(count => {
               this.setState(
                 Object.assign(this.state.user,{entries:count})
               )
               })
               .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => {
        console.log(err);
      });
    
  }
  

  RouteChange =(route)=>{
    if(route === 'signout'){
      this.setState(initialState)
    }
    else if(route === 'home'){
      this.setState({isSigned:true})
    }

    this.setState({route: route});

  }

  componentDidMount(){
    let particles = document.querySelector('.particle');
    particles.width = window.innerWidth;
    particles.height = window.innerHeight;
    console.log('hellow')
  }
  

  render()
  {
    return (
    <div className="App">
    
      <Particles params={options} className="particle" />
     <Navigation SignOut={this.RouteChange} isSigned={this.state.isSigned} />
      

     {  this.state.route === 'home' ?
     <div>
     <Logo />
     <Rank name={this.state.user.name} entries={this.state.user.entries} />
     <Imageinputform  handle={this.handleChage} detect={this.DetectChange} />
      
     
      <Facerecognition box={this.state.box}  imageUrl={this.state.imageUrl} />
      </div>
     
     : (
      this.state.route === 'signin' ?  <SingIn loadUser={this.loadUser} onRouteChange={this.RouteChange} /> 
      : <Register loadUser={this.loadUser}
       onRouteChange={this.RouteChange} />
     )
     }
</div>
     
  );
}
}

export default App;
