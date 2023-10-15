export default function CardProduto(props) {
    return (
        <div className="flex flex-col w-72 font-poppins">
            <img src={props.imagem} alt="Produto" />
            <div className="bg-cinza-claro p-4 pb-7">
                <h4 className="text-2xl font-semibold text-cinza-escuro">{props.produto}</h4>
                <p className="text-base font-medium text-cinza-claro mt-3">{props.categoria}</p>
                <div className="flex gap-4 mt-2 items-center">
                    <p className="text-cinza-escuro text-xl font-semibold">{props.preco}</p>
                    <p className="text-cinza-transparente"><s>{props.precoAntigo}</s></p>
                </div>
            </div>
        </div>
    );
}