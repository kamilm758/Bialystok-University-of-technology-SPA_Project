import React, { Component } from 'react';
import './Contact.css'

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors)=>{
  let valid=true;

  Object.values(errors).forEach(
    (val)=>val.length>0 && (valid=false)
  );

  return valid;

}

export class Contact extends Component {
  static displayName = Contact.name;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      email: '',
      content: '',
      accept: false,

      errors: {
        name: '',
        surname: '',
        email: '',
        accept: ''
      }
    };
  }


  render() {
    const {errors} = this.state;
    return(
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Kontakt</h2>
          <form onSubmit={this.handleSubmit} noValidate >
            <div className='name'>
              <label htmlFor="name">Imie</label>
              <input type='text' name='name' onChange={this.handleChange} noValidate />
              {errors.name.length > 0 && <span className='name'>{errors.name}</span>}
            </div>
            <div className='surname'>
              <label htmlFor="surname">Nazwisko</label>
              <input type='text' name='surname' onChange={this.handleChange} noValidate />
              {errors.surname.length > 0 && <span className='surname'>{errors.surname}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && <span className='email'>{errors.email}</span>}
            </div>
            <div className='name'>
              <label htmlFor="content">Treść wiadomości</label>
              <textarea name='content' onChange={this.handleChange} noValidate/>
            </div>
            <div className='accept'>
              <label htmlFor="accept">Wyrażam zgodę na przetwarzanie danych.</label>
              <input type="checkbox" name="accept" onChange={this.handleChange} noValidate/>
              {errors.accept.length > 0 && <span className='accept'>{errors.accept}</span>}
            </div>
            <div className='submit'>
              <button onClick={this.handleSubmit}>Wyślij</button>
            </div>
          </form>
        </div>
        </div>
    )
  }

  handleChange = (event)=>{
    const {name, value, checked} = event.target;
    let errors = this.state.errors;

    switch(name){
      case "name":
        errors.name = value.length<5 ? "Imię musi mieć przynajmniej 5 znaków" : '';
        break;
      case "surname":
        errors.surname = value.length<2 ? "Nazwisko musi mieć przynajmniej 2 znaki" : '';
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? '' : "Email niepoprawny. Sprawdź poprawność!"
        break;
      case "accept":
        errors.accept = checked==true ? '' : "Zaznacz zgodę"
        break;
      default:
        break;
    }
    name!="accept" ? this.setState({errors, [name]: value}) : this.setState({errors, [name]: checked});
  }

  handleSubmit =(event)=>{
    event.preventDefault();
    if(validateForm(this.state.errors)){
      console.info("Valid form");
    }else{
      console.error("Invalid form");
    }
  }
}
