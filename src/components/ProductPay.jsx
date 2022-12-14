import { Link } from "react-router-dom";
import {TbTrashX} from 'react-icons/tb'
export function ProductPay (props){
    function deletarProdutoCarrinho(){
        const id = props.id
        fetch(`http://192.168.1.106:3000/carrinho/${id}`, {
            method: 'DELETE'
        })
    }
    return (
        <li className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src={props.imagem} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center"/>
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#" className="no-underline">{props.nome}</a>
                                    </h3>
                                    <p className="ml-4">R${props.preco}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{props.descricao}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Qtd 1</p>

                                  <div className="flex items-center" onClick={deletarProdutoCarrinho}>
                                    <TbTrashX color="blue"/>
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                  </div>
                                </div>
                              </div>
                            </li>
    )
}