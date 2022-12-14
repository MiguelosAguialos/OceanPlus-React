import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Product } from "../components/Product";
import {BsCart} from 'react-icons/bs'

export function Catalog(){
    const [products, setProducts] = useState([])
    const produtoNome = useRef(null)
    const produtoDescricao = useRef(null)
    const produtoQuantidade = useRef(null)
    const produtoImagem = useRef(null)
    const produtoPreco = useRef(null)
    const produtoId = useRef(0)

    useEffect( () => {
        fetchCatalogo()
    }, [products])

    const fetchCatalogo = async () => {
        const response = await fetch("http://192.168.1.106:3000/catalogo")
        const data = await response.json()
        setProducts(data)
    }

    function adicionarProduto(){
        const prod = produtoNome.current.value
        const desc = produtoDescricao.current.value
        const qtd = produtoQuantidade.current.value
        const img = produtoImagem.current.value 
        const price = produtoPreco.current.value

        if(prod != "" && desc != "" && qtd != "" && img != ""){
            fetch("http://192.168.1.106:3000/catalogo", {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({produto: prod, descricao: desc, quantidade: qtd, imagem: img, preco: price})
            })
        } else {
            alert("Existem campos vazios!")
        }

        
    }


    function deletarProduto(){
        const id = produtoId.current.value
        fetch(`http://192.168.1.106:3000/catalogo/${id}`, {
            method: 'DELETE'
        })
    }

    


    return(
        <div className="bg-white">
            <Header current="Catálogo"/>

        {/* Inicio catálogo */}

        <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Novos produtos a todo momento!</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map( (prod) => {
                                return (
                                    
                                        <Product produto={prod.produto} descricao={prod.descricao} quantidade={prod.quantidade} imagem={prod.imagem} preco={prod.preco} id={prod.id}/>
                                    
                                )
                            } )}
          </div>
        </div>
      </div>
      
              {/* Fim catálogo */}

            <div className="container">
                <input type="text" className="form-control" ref={produtoNome} placeholder="Nome do produto" autoComplete="off"/>
                <textarea type="text" className="form-control" ref={produtoDescricao} placeholder="Descrição do produto" autoComplete="off"/>
                <input type="number" className="form-control" ref={produtoQuantidade} placeholder="Quantidade do produto" autoComplete="off"/>
                <input type="number" className="form-control" ref={produtoPreco} placeholder="Preço do produto" autoComplete="off"/>
                <input type="url" className="form-control" ref={produtoImagem} placeholder="Enchaminhe o link da imagem" autoComplete="off"/>
                <input type="number" className="form-control" ref={produtoId} placeholder="Coloque o ID do produto que deseja deletar" autoComplete="off"/>
            </div>
            <br />
            <Link to="/Payment"><button className="btn btn-primary m-2" onClick={deletarProduto}><BsCart/> Carrinho</button></Link>
            <button className="btn btn-danger" onClick={deletarProduto}>Deletar Produto</button>
            <button className="btn btn-success m-2" onClick={adicionarProduto}>Adicionar Produto</button>
        </div>
        
    )
}

