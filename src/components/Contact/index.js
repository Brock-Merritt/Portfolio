import React from 'react';
// import { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';
import './contact.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';



function ContactForm() {
    // const [errorMessage, setErrorMessage] = useState('');
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         // isValid conditional statement
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
            
    //       }  
    //       if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //       }
    //   }
    //   console.log('errorMessage', errorMessage);
      
    // console.log(formState);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }


    return (
        // <section className='contactContainer'>
          
        //   <form id="contact-form" onSubmit={handleSubmit}>
        //   <h1>Contact me</h1>
        //     <container className='contactDiv'>
        //       <label htmlFor="name">Name:</label>
        //       <input type="text" defaultValue={name} onBlur={handleChange} name="name" /> 
        //     </container>
        //     <container className='contactDiv'>
        //       <label htmlFor="email">Email address:</label>
        //       <input type="email" defaultValue={email} name="email" onBlur={handleChange} /> 
        //     </container>
        //     <container className='contactDiv'>
        //       <label htmlFor="message">Message:</label>
        //       <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        //       {errorMessage && (
        //       <div>
        //            <p className="error-text">{errorMessage}</p>
        //      </div>)}
        //     </container>
        //     <button type="submit">Submit</button>
        //   </form>
        // </section>
        <section>
          <h2 className='titleDiv'>Contact Info</h2>
            <h1 className='contactDiv'> Linkedin:          
              <a href="https://www.linkedin.com/in/brockmerritt/">
              <LinkedInIcon style={{fontSize: 65 }}></LinkedInIcon>
              </a>
            </h1>
            <h1 className='contactDiv'> Github:          
             <a href="https://github.com/Brock-Merritt">
              <GitHubIcon style={{fontSize: 65 }}></GitHubIcon>
              </a>
            </h1>
            <h1 className='contactDiv'> Resume:          
              <a href="https://docs.google.com/document/d/1Z6oMehuoRsdIS8Tiu6D_gKl2YKis99pT2M_U48A7jWk/edit">
             <ArticleIcon style={{fontSize: 65 }}></ArticleIcon>
              </a>  
            </h1>




        </section>
        );
    //jsx
}

export default ContactForm;