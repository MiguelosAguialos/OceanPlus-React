import { Link } from "react-router-dom";
import { useState } from "react";

export function Cart(){
    return (
        <div>
            <h1>Carrinho</h1>
            <h1></h1>
            <Link to='/'><button style={{margin: '10px'}}>Voltar ao Menu</button></Link>
            <Link to='/catalog'><button>Catálogo</button></Link>
        </div>
    )
}