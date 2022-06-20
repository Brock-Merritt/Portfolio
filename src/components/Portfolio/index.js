import React, { useState } from 'react';
import Project from '../Project';
import './style.css'


function Portfolio() {
    const [
        projects
    ] = useState([
        {
            name: 'Relaxn',
            description: 'Premier relaxation website',
            link:'https://relaxn.herokuapp.com/' ,
            repo:'https://github.com/Brock-Merritt/Relaxn',
            skills:'M.E.R.N, React, Node, Express, MongoDB,CSS, HTML, Heroku',
        },
        {
            name: 'Employee-Tracker',
            description: ' A backend SQL program to keep track of Staff, Department, and roles within a company',
            link:'https://github.com/Brock-Merritt/Employee-Tracker' ,
            repo:'https://github.com/Brock-Merritt/Employee-Tracker.git' ,
            skills:'MySQL2, Inquirer'
        },
        {
            name: 'Brocks-Fantastic-Quiz',
            description: 'A javascript quiz from the beginning of my journey',
            link:'https://brock-merritt.github.io/4-Web-Api/' ,
            repo:'https://github.com/Brock-Merritt/4-Web-Api.git' ,
            skills:'Javascript, HTML, CSS'
        },
        {
            name: 'TuneItUp',
            description: 'A music video playing app complete with upcoming events for that artist! Collaborative Project',
            link:'https://zichkoding.github.io/TuneItUp/' ,
            repo:'https://github.com/ZichKoding/TuneItUp.git' ,
            skills:'HTML, CSS, Javascript, jQuery, API, Youtube, Handlebars'
        },
        {
            name: 'Budget-Tracker',
            description: 'An app for recording daily expenses and income',
            link:'https://damp-bayou-58506.herokuapp.com/' ,
            repo:'https://github.com/Brock-Merritt/Budget-19.git' ,
            skills:'React, node.js, Express, MongoDB, CSS, HTML, Heroku'
        },
        {
            name: 'Read-Me-Generator',
            description: ' My personally most utilized app, detailed read-me generator',
            link:'https://github.com/Brock-Merritt/Read-Me-Generator' ,
            repo:'https://github.com/Brock-Merritt/Read-Me-Generator.git' ,
            skills:'Inquirer, nodes.js'
        },
        {
            name: 'NoteTaker',
            description: 'Application to add, remove, and update notes',
            link:'https://protected-anchorage-67955.herokuapp.com/' ,
            repo:'https://github.com/Brock-Merritt/Note-Taker.git' ,
            skills:'Express, CSS, HTML, Heroku'
        },


        
    ]);

    return(
        
            <div className='flex-row'>
                {projects.map((project) =>{
                    return <Project
                    key={project.name}
                    project={project}
                    
                    
                    />
                }
                 )}
                

            </div>
        
    )

};

export default Portfolio;