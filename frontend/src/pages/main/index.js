import React, { Component } from 'react'

import api from '../../services/api';
import './styles.css';
import logo from '../../assets/logo.svg';

export default class Main extends Component {

    state = {
        newBox: '',
    };

    handleChange = (e) => {
        this.setState({ newBox: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault();

        const response = await api.post('boxes', {
            title: this.state.newBox,
        });

       this.props.history.push(`/box/${response.data._id}`)
    }

    render() {
        return (
                <div id="main-container" >
                     <form onSubmit={this.handleSubmit} >
                        <img src={logo} alt="" />
                        <input
                         placeholder="Criar um box" 
                         value={this.state.newBox}
                         onChange={this.handleChange}
                        />
                        <button type="submit">Criar</button>
                     </form>
                </div>
        )
    }
}
