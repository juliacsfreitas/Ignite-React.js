import React, { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem"

import '../Styles/repositories.scss';



const repository = {
    name:'unform',
    description: 'Forms in React',
    link: 'http://github.com/unform/unfor'
}


export function RepositoryList () {
const [repositories, setRepositories] = useState([]);

useEffect(() => {
fetch('https://api.github.com/orgs/rocketseat/repos')
.then(Response => Response.json())
.then(data => setRepositories(data))
}, []);


    return (
        <section className="repository-list">
            <h1> Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository= {repository}/> 
                <RepositoryItem repository= {repository}/> 
                <RepositoryItem repository= {repository}/>
                <RepositoryItem repository= {repository}/>
          </ul>
        </section>
        

    )
}