import { useState, useEffect } from "react";
import './ItemDetail.css'


const ItemDetail = ({ products }) => {

//Fetch a DolarApi///////////////////
    const [dolarblue, setBlue] = useState(0);
    const [dolarliqui, setLiqui] = useState(0);

    useEffect(() => {

        fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarblue')
        .then(response => {
        return response.json()
        })
        .then (response => setBlue(response.venta))
    },[])

    useEffect(() => {

        fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/contadoliqui')
        .then(response => {
        return response.json()
        })
        .then (response => setLiqui(response.venta))
    },[]) 
///////////////////////////////

    return (
        <li key={products.id}>
                    <div className="cards2">

                        <div>
                        <img className="imagenProduct" src={products.img} alt="" />
                        
                        </div>
                        <div className="cardsDescription">
                            <h1>{products.name.toUpperCase()}</h1>
                            <h3>Descripcion: {products.description}</h3>
                            <h3>Montaje: {products.montaje}</h3>
                            <h3>Medidas disponibles:  {products.medidas}</h3>
                            <h4>Precio Dolar Blue: $ {(products.price*dolarblue).toFixed()}</h4>
                            <h4>Precio Dolar con Liqui: $ {(products.price*dolarliqui).toFixed()}</h4>
                            <h3>Stock disponible: {products.stock} unidades</h3>
                        </div>
                        <div>

                        </div>
                        


                    </div>
        </li>

    )
}

export default ItemDetail
