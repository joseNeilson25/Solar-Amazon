import React from 'react'
import axios from 'axios'

export default class ListaCarros extends React.Component{

    state={
        carros:[]
    }

    componentDidMount(){
        axios.get('http://localhost:3001/')
            .then(res=>{
                const dadosCarros=res.data
                this.setState({carros:dadosCarros})
            })
    }

    render(){
        return (
                <div>
                    {this.state.carros.map(
                        carro=> <div key={carro.id}>-{carro.name}-{carro.description}-{carro.photo}-{carro.price}</div>
                    )}
                </div>
        )
    }
}