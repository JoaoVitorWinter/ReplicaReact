export default function CardCategoria(props) {
    return (
        <div>
            <img src={props.imagem} alt="Imagem de móveis"/>
            <p>{props.texto}</p>
        </div>
    );
}