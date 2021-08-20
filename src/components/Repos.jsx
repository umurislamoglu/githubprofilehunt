import React from 'react'
import Repo from './Repo'


export default function Repos({repos}) {
    return repos.map(repo => <Repo repo={repo} key={repo.id}/>)
}
