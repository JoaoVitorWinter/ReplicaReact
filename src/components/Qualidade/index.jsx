export default function Qualidade(props) {
    return (
        <div className="font-poppins gap-2 flex items-center">
            <img className="h-16 w-16"src={props.imagem} alt="" />
            <div>
                <h4 className="font-semibold text-2xl text-preto-escuro">{props.titulo}</h4>
                <p className="font-medium text-xl text-cinza-claro">{props.descricao}</p>
            </div>
        </div>
    );
}