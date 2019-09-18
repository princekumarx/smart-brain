import React from 'react';
 import './register.css';
class Register extends React.Component {

  constructor(){
    super();
    this.state = {
      name:'',
      email:'',
      password:''
    }

  }

  getNameInput = (event)=>{
      this.setState({
        name:event.target.value
      })
  }
  getEmailInput = (event)=>{
    this.setState({
      email:event.target.value
    }) 
  }
 getPassInput = (event)=>{
   this.setState({
     password:event.target.value
   })
 }

  onSubmit = (e)=>{
    let model  = document.querySelector("#errorbox");
    let model2  = document.querySelector("#errorbox2");
    

    if(!this.state.name || !this.state.email || !this.state.password){
      model.classList.add('ani');
      return model.style.display='block';
    }
    let good = document.querySelector("#spinbox");
      good.style.display = 'block';

    
    fetch('https://tranquil-castle-39734.herokuapp.com/register',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name:this.state.name,
        email:this.state.email,
        password:this.state.password
      })
    })
.then(res => res.json())
.then(user =>{
 if(user.id){
    this.props.loadUser(user);
  this.props.onRouteChange('home');
  good.style.display = 'none';
 
 
 }
 else{
  model.classList.add('ani');
  good.style.display = 'none';
  model2.style.display='block'
  }

  
}).catch(err => console.log('error something'));
  }

  closeBox =()=>{
    let boxmodel = document.querySelectorAll(".error");
console.log(boxmodel)
     for(var i =0;i< boxmodel.length;i++){
      boxmodel[i].style.display = 'none';

     }

    
  }

  render(){
    // const {onRouteChange} = this.props;
    return(
      <div>

       <div id="spinbox" >
        <div id="loader"></div>
     </div>

    <div onClick={this.closeBox} id="errorbox" className="error">
<p>please enter your name email and password</p>
    </div>
    <div onClick={this.closeBox} id="errorbox2" className="error">
<p>email or password is wrong </p>
    </div>
      
      <article className="br2 ba  dark-gray b--black-10  w-90 w-60-m w-60-l shadow-2 mw6 center">

      
      <main className="pa2   main black-80">
<div className="measure  ">
  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    <legend className="f3 fw6 ph0 mh0">Register</legend>
    <div className="mt3">
      <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
      <input onChange={this.getNameInput} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
    </div>
    <div className="mt3">
      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
      <input onChange={this.getEmailInput} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
    </div>
    <div className="mv3">
      <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
      <input onChange={this.getPassInput} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
    </div>
    <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
  </fieldset>
  <div className="">
    <input  onClick={this.onSubmit}
     className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
  </div>
   
</div>
</main>

</article>
</div>
  )

  }

   
}


export default Register;