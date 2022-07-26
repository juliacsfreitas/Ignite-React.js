import React from 'react'

export function RepositoryItem(propos) {
  return (
    <li>
      <strong>{propos.repository.name ?? 'Default'}</strong>
      <p>{propos.repository.description}</p>

      <a href={propos.repository.link}>
        Acessar respositórios
      </a>
    </li>

  );
}

