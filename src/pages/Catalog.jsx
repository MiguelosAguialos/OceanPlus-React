import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Product } from "../components/Product";

export function Catalog(){
    const [products, setProducts] = useState([])
    const [campos, setCampos] = useState({produto: "", descricao: "", quantidade: "", imagem: ""})


    useEffect( () => {
        fetchCatalogo()
    }, [products])

    const fetchCatalogo = async () => {
        const response = await fetch("http://localhost:3000/catalogo")
        const data = await response.json()
        setProducts(data)
    }

    function adicionarProduto(){

        fetch("http://localhost:3000/catalogo", {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({produto: campos.produto, descricao: campos.descricao, quantidade: campos.quantidade, imagem: campos.imagem})
        })
    }

    function pegarValores(e){
        let nome = e.target.name
        let valor = e.target.value
        setCampos({...campos, [nome]:valor})
    }
    


    return(
        <div>
            <Header />
            <div className="wrapper">
                <ul>
                    {products.map( (prod) => {
                        return (
                            <Product produto={prod.produto} descricao={prod.descricao} quantidade={prod.quantidade} imagem={prod.imagem}/>
                        )
                    } )}
                </ul>
            </div>
            <input type="text" name="produto" onChange={pegarValores} placeholder="Nome do produto" autoComplete="off"/>
            <input type="text" name="descricao" onChange={pegarValores} placeholder="Descrição do produto" autoComplete="off"/>
            <input type="text" name="quantidade" onChange={pegarValores} placeholder="Quantidade do produto" autoComplete="off"/>
            <input type="text" name="imagem" onChange={pegarValores} placeholder="Link da imagem do produto" autoComplete="off"/>
            <br />
            <button onClick={adicionarProduto}>Adicionar Produto</button>
            <Link to='/'><button style={{margin: '10px'}}>Voltar ao Menu</button></Link>
            <Link to='/cart'><button>Carrinho</button></Link>
        </div>
        
    )
}