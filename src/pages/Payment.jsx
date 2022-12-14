import { ProductPay } from "../components/ProductPay";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
export default function Payment(props){
    const [valores, setValores] = useState([])
    const fetchProdutoCarrinho = async () => {
    const response = await fetch(`http://192.168.1.106:3000/carrinho`)
        const data = await response.json()
        setValores(data)
    }

    fetchProdutoCarrinho()


  return (
    <div>
        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl h-screen">
                  <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Carrinho</h2>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Close panel</span>
                          <Link to="/"><svg class="h-6 w-6" x-description="Heroicon name: outline/x-mark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
</svg></Link>
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                        {valores.map( (prod) => {
                                return (
                                    <ProductPay nome={prod.nome} imagem={prod.imagem} preco={prod.preco} descricao={prod.descricao} id={prod.id}/>       
                                )
                            } )}
                            
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>$0</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                      <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 no-underline">Checkout</a>
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or {}
                        <Link to="/"><button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                          Continue Shopping
                          <span aria-hidden="true"> →</span>
                        </button></Link>
                      </p>
                    </div>
                  </div>
                </div>
    </div>
  )
}
