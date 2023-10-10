import "./Header.css";

export default function Header() {

    return (
        <header className="flex justify-between items-center px-20 py-8 font-poppins text-base bg-white font-medium">
            <div className="flex justify-center items-center g-1">
                <img src="./images/logo.png" alt="Logo" />
                <h1 className="text-4xl font-montserrat font-bold">Furniro</h1>
            </div>
            <nav>
                <ul className="flex justify-center items-center gap-20">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <nav className="flex justify-center items-center gap-11">
                <img src="./images/perfil.png" alt="Perfil" />
                <img src="./images/busca.png" alt="Busca" />
                <img src="./images/favoritos.png" alt="Favoritos" />
                <img src="./images/carrinho.png" alt="Carrinho" />
            </nav>
        </header>
    )
}