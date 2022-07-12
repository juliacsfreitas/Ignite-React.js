import { RepositoryItem } from "./RepositoryItem"

import '../Styles/repositories.scss';

const repository = {
    name:'unform',
    description: 'Forms in React',
    link: 'http://github.com/unform/unfor'
}

export function RepositoryList () {
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