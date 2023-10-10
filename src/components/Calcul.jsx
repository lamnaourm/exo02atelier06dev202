import React, { Component } from 'react'

export default class Calcul extends Component {

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.calculer = this.calculer.bind(this)

        this.state = {
            distance :0,
            poids:0,
            mode:'normal',
            cout:0
        }
    }

    handleChange(e){
        const name = e.target.name
        const value = e.target.value
        
        this.setState({[name] :  value})
    }

    calculer(){
        let cout = 0; 

        if(this.state.poids < 10)
            cout = this.state.distance * 0.5
        else
            cout = this.state.distance * (this.state.poids/10) * 0.3

        if(this.state.mode === 'express')
            cout += cout*0.2;

        this.setState({cout: cout})

    }

    render() {
        return (
            <div className='calcul'>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor="distance">Distance :</label>
                        <input value={this.state.distance} onChange={this.handleChange} type="number" name="distance" id="distance" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="poids">Poids : </label>
                        <input value={this.state.poids} onChange={this.handleChange} type="number" name="poids" id="poids" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="duree">Mode de transport :</label>
                   
                        <input value='normal' checked={this.state.mode==='normal'} onChange={this.handleChange} type="radio" name="mode" id="normal" />
                        <label htmlFor="normal">Normal</label>
                        <input value='express' checked={this.state.mode==='express'} onChange={this.handleChange} type="radio" name="mode" id="express" />
                        <label htmlFor="express">Express</label>
                    </div >
                    <hr />
                    <button onClick={this.calculer}>Calculer</button>
                    <div className='form-group'>
                        <label htmlFor="cout">Cout Total :</label>
                        <input value={this.state.cout} onChange={this.handleChange} type="number" name="cout" id="cout" readOnly/>
                    </div>
                </div>
            </div>
        )
    }
}
