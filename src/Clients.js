import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Client } from './Client'

export class Clients extends Component{
    constructor(){
        super();
    }

    
    render(){
        return (
            <div>
                <h1>This is Clients Component</h1>
                <Link to={`${this.props.match.url}/1`} >Client 1 / </Link>
                <Link to={`${this.props.match.url}/2`} >Client 2 / </Link>
                <Link to={`${this.props.match.url}/3`} >Client 3 / </Link>
                <Link to={`${this.props.match.url}/4`} >Client 4</Link>
                <switch>
                    <Route path={`${this.props.match.url}/:id`} component={Client} ></Route>
                </switch>
            </div>            
        )
    }
}