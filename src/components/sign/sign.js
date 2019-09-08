import React from 'react';
import './sign.css';
class SingIn extends React.Component {
constructor(){
  super();
  this.state ={
    signEmail:'',
    signPass: ''
  }
}

  onEmailChange =(event)=>{
    this.setState({
      signEmail:event.target.value
    })
   }

  onPassChange =(event)=>{
    this.setState({
      signPass:event.target.value
    })
  }

   

  onSubmit = ()=>{
    let model  = document.querySelector("#errorbox");
    let model2  = document.querySelector("#errorbox2");

    if(!this.state.signEmail || !this.state.signPass){
      model.classList.add('ani');
      return model.style.display='block';
    }
    let good = document.querySelector("#spinbox");
      good.style.display = 'block';

    fetch('https://tranquil-castle-39734.herokuapp.com/signin',{
      method:'POST',
      headers:{'Content-Type':'application/json' },
      body:JSON.stringify({
        email:this.state.signEmail,
        password:this.state.signPass
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

    }).catch(console.log());

  }
  closeBox =()=>{
    let boxmodel = document.querySelectorAll(".error");
console.log(boxmodel)
     for(var i =0;i< boxmodel.length;i++){
      boxmodel[i].style.display = 'none';

     }

    
  }

  render(){
    const {onRouteChange} = this.props;
    return(
      <div>
       <div id="spinbox" >
        <div id="loader"></div>
     </div>

    <div onClick={this.closeBox} id="errorbox" className="error">
<p>please enter your email or password</p>
    </div>
    <div onClick={this.closeBox} id="errorbox2" className="error">
<p>email or password is wrong </p>
    </div>
      <article className="br2 ba  dark-gray b--black-10 mv4 w-100 w-60-m w-60-l shadow-2 mw6 center">

      
      <main className="pa2   main black-80">
<div className="measure  ">
  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    <legend className="f3 fw6 ph0 mh0">Sign In</legend>
    <div className="mt3">
      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" required
       onChange={this.onEmailChange}
       />
    </div>
    <div className="mv3">
      <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
      <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" required
      onChange={this.onPassChange}
       />
    </div>
    
  </fieldset>
  <div className="">
    <input  onClick={this.onSubmit}
     className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in " />
  </div>
  <div className="lh-copy mt3">
    <a onClick={()=> onRouteChange('register')}
     href="#0" className="f6 link dim black db">Register</a>
    <a href="#0" className="f6 link dim black db">Forgot your password?</a>
  </div>
</div>
</main>

</article>
</div>
  )
  }

    

}


export default SingIn;