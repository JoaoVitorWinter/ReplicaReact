import CardCategoria from "../CardCategoria";

export default function SectionCategorias() {
    return (
        <section className="flex flex-col font-poppins text-preto mt-14 gap-12">
            <div className="text-center flex flex-col items-center">
                <h3 className="font-bold text-3xl">
                    Browse The Range
                </h3>
                <p className="text-cinza w-96">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-20 md:gap-5">
                <CardCategoria texto="Dining" imagem="./images/dining.png"></CardCategoria>
                <CardCategoria texto="Living" imagem="./images/living.png"></CardCategoria>
                <CardCategoria texto="Bedroom" imagem="./images/bedroom.png"></CardCategoria>
            </div>
        </section>
    );
}