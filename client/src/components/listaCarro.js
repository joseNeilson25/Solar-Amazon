import React from 'react'
import axios from 'axios'

export default class ListaCarros extends React.Component{

    state={
        coffees:[]
    }

    componentDidMount(){
        axios.get('http://localhost:3001/')
            .then(res=>{
                const dadosCoffees=res.data
                this.setState({coffees:dadosCoffees})
            })
    }

    render(){
        return (
                <div>
                    {this.state.coffees.map(
                        coffees=> <div key={coffees.id}>-{coffees.name}-{coffees.description}-{coffees.photo}-{coffees.price}</div>
                    )}
                </div>
        )
    }
}