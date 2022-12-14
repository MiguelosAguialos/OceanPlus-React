import { Link } from "react-router-dom";
export function Product (props){
    return (
        <div key={props.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={props.imagem}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                    <Link to="/cart" state={{prodId: props.id}}>
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {props.produto}
                      </a></Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{props.descricao}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">R${props.preco}</p>
                </div>
              </div>
    )
}