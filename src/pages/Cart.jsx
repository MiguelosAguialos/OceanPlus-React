import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export function Cart(props){
    const location = useLocation()
    const prodID = location.state.prodId
    const [valores, setValores] = useState([])
    const fetchProduto = async () => {
    const response = await fetch(`http://192.168.1.106:3000/catalogo/${prodID}`)
        const data = await response.json()
        setValores(data)
    }

    function handleAdicionarProdutos(){
        fetch("http://192.168.1.106:3000/carrinho", {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({nome: valores.produto, descricao: valores.descricao, imagem: valores.imagem, preco: valores.preco})
            })      
    }

    fetchProduto()

    return (
        <div className="bg-white flex h-screen justify-center items-center">
            <section>
                <img src={valores.imagem} />
            </section>
        <main className="flex flex-col md:gap-24 md:flex-row md:py-20 md:px-16 md:items-center">
				<div className="md:flex-1 md:rounded-2xl overflow-hidden">
				</div>
				<div className="p-6 mb-10 md:flex-1">
					<article className="md:max-w-[28rem]">
						<h4 className="my-0 text-primary uppercase">Zézim enterprise</h4>
						<h1 className="mt-2 md:mt-3 mb-4 md:mb-6 text-3xl md:text-4xl font-bold">
							{valores.produto}
						</h1>
						<p className="my-0 text-neutral-dark-grayish-blue">
							{valores.descricao}
						</p>
						<br className="h-7" />
						<section className="flex flex-col gap-5">
							<div className="flex md:flex-col justify-between gap-1">
								<div className="flex gap-6 items-center">
									<span className="text-3xl font-bold">{valores.preco}</span>
									<span className="text-primary font-bold bg-primary/10 px-1.5 rounded">50%</span>
								</div>
								<span className="text-neutral-grayish-blue font-bold line-through">{valores.preco * 1.5}</span>
							</div>
							<Link to="/payment" state={{prodCart: prodID}}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleAdicionarProdutos}>
                            Adicionar ao carrinho
                            </button></Link>
                            <label> ID do produto: {prodID}</label>
						</section>
					</article>
				</div>
			</main>
            <Link to='/'><button className="btn btn-primary" style={{margin: '10px'}}>Voltar ao Catálogo</button></Link>
            </div>
    )
}