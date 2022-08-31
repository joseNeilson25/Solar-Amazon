import React, {useState, useEffect} from 'react'
import axios from 'axios'

interface ICarros{
    id: number;
    carro:string;
    modelo: string;
}

 const ListarCarros: React.FC = () =>{
    const [carros, _setCarros] = useState<ICarros[]>([])

    useEffect(() =>{
        getCarros()
        
    },[]) 
    async function getCarros() {
        const carros = (await axios.get('http://localhost:3001/')).data
        console.log(carros)
    }   
    return(
        <div>
            {carros.map(
                carro=><div key={carro.id}>{carro.modelo}</div>
            )}
        </div>
    )
}

export default ListarCarros