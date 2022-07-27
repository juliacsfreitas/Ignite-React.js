import React, { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem"

import '../Styles/repositories.scss';

export function RepositoryList() {
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
        {repositories.map(repository => {
          return <RepositoryItem repository={repository} />
        }
        )}
        </ul>
        </section>

        );
}  