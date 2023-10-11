import CardCategoria from "../CardCategoria";

export default function SectionCategorias() {
    return (
        <section className="font-poppins text-preto mt-14">
            <div className="text-center">
                <h3 className="font-bold text-3xl">
                    Browse The Range
                </h3>
                <p className="text-cinza">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <div>
                <CardCategoria texto="Dining" imagem="./images/dining.png"></CardCategoria>
            </div>
        </section>
    );
}