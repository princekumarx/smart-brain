import React from 'react';
 
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

  onSubmit = ()=>{
    
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
 }
 else{
   alert('form submition invalid');
 }

  
}).catch(err => console.log('error something'));
  }

  render(){
    // const {onRouteChange} = this.props;
    return(
      
      <article className="br2 ba  dark-gray b--black-10 mv4 w-100 w-60-m w-60-l shadow-2 mw6 center">

      
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

  )

  }

   
}


export default Register;