export function Product (props){
    return (
        <div style={{
            background: "red",
            width: "20%",
            borderRadius: "10px",
            padding: "10px",
            color: "white",
            margin: "10px",
            
        }}>   
            <h1>{props.produto}</h1>
            <img src={props.imagem} alt="imagem produto" />
            <p style={{
                fontSize: "22px"                
            }}>{props.descricao}</p>
            <p style={{
                fontSize: "22px"
            }}>{props.quantidade} unidades</p>
        </div>
    )
}