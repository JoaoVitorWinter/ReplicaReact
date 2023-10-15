export default function CardCategoria(props) {
    return (
        <div className="flex flex-col items-center gap-7">
            <img src={props.imagem} alt="Imagem de móveis" />
            <p className="font-semibold font-poppins text-2xl text-preto">{props.texto}</p>
        </div>
    );
}