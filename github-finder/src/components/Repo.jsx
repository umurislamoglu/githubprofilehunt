import React from 'react'

export default function Repo({repo}) {
    return (
        <li className="list-group-item"><a className="text-decoration-none text-dark" href={repo.html_url}><i className="fas fa-angle-right"></i>  {repo.name}</a></li>
    )
}
