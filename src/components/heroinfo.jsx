// Props = é um objeto que contém todos os atributos passados para o componente

export function HeroInfo(props) {
    return(
        <div>
            <img src={props.imagem} alt={props.alt} />
            <p>{props.nome}</p>
        </div>
    )
}