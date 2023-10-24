import CardProduto from "../CardProduto";

export default function SectionProdutos() {
    return (
        <section className="flex flex-col items-center gap-8 mt-14">
            <h3 className="text-cinza-escuro font-bold font-poppins text-4xl">Our Products</h3>
            <div className="flex flex-wrap justify-center w-full px-5 gap-8">
                <CardProduto imagem="./images/produto.png" produto="Syltherine" categoria="Stylish cafe chair" preco="Rp 2.500.000" precoAntigo="Rp 3.500.000"></CardProduto>
                <CardProduto imagem="./images/produto.png" produto="Leviosa" categoria="Stylish cafe chair" preco="Rp 2.500.000" precoAntigo="Rp 3.500.000"></CardProduto>
                <CardProduto imagem="./images/produto.png" produto="Lolito" categoria="Stylish cafe chair" preco="Rp 2.500.000" precoAntigo="Rp 3.500.000"></CardProduto>
                <CardProduto imagem="./images/produto.png" produto="Respira" categoria="Stylish cafe chair" preco="Rp 2.500.000" precoAntigo="Rp 3.500.000"></CardProduto>
                <CardProduto imagem="./images/produto.png" produto="Grifo" categoria="Stylish cafe chair" preco="Rp 2.500.000" precoAntigo="Rp 3.500.000"></CardProduto>
                <CardProduto imagem="./images/produto.png" produto="Muggo" categoria="Stylish cafe chair" preco="Rp 2.500.000" precoAntigo="Rp 3.500.000"></CardProduto>
                <CardProduto imagem="./images/produto.png" produto="Pingky" categoria="Stylish cafe chair" preco="Rp 2.500.000" precoAntigo="Rp 3.500.000"></CardProduto>
                <CardProduto imagem="./images/produto.png" produto="Potty" categoria="Stylish cafe chair" preco="Rp 2.500.000" precoAntigo="Rp 3.500.000"></CardProduto>
            </div>
            <button className="border border-primaria text-primaria font-semibold font-poppins py-3 px-20">Show more</button>
        </section>
    );
}