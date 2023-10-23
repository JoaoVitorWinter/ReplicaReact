export default function SectionQuartos() {
    return (
        <section className="text-center md:text-start font-poppins bg-secundaria-clara mt-16 flex items-center md:items-stretch flex-col gap-6 py-11 md:pl-24 md:flex-row">
            <div className="flex flex-col w-4/5 md:w-1/3 self-center items-center md:items-start">
                <h3 className="text-4xl font-bold text-cinza-escuro">50+ Beautiful rooms inspiration</h3>
                <p className="font-medium text-cinza mt-2">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <a href="#" className="font-semibold bg-primaria w-44 py-3 text-white text-center mt-6">Explore More</a>
            </div>
            <div className="ml-4 h-96 md:h-auto w-1/3 bg-quarto flex items-end bg-contain bg-no-repeat bg-top ">
                <div className="backdrop-blur-sm bg-white/50 p-8 pr-4 ml-10 mb-6 hidden md:block">
                    <p className="text-cinza font-medium">01 - Bed Room</p>
                    <h1 className="text-cinza-escuro text-3xl font-semibold">Inner Peace</h1>
                </div>
                <img className="bg-primaria border-8 border-primaria mb-10 hidden md:block" src="./images/setaAdiante.svg" alt="->" />
            </div>
            <div className="flex flex-col gap-10 justify-start items-center md:items-start w-1/3">
                <div className=" hidden md:flex md:items-center">
                    <img className="h-full mr-6 self-start" src="images/quartoNaoAtivo.png" alt="Quarto secundário" />
                    <div className="w-0 h-0">
                        <button className="text-primaria hidden md:block bg-white p-3 rounded-full drop-shadow absolute w-16 h-16 right-5">&gt;</button>
                    </div>
                    <img src="images/quartoNaoAtivo.png" alt="Quarto secundário" />
                </div>
                <div className="flex items-center gap-5">
                    <div className="border rounded-full border-primaria p-2"><div className="bg-primaria w-3 h-3 rounded-full"></div></div>
                    <div><div className="bg-cinza-palido w-3 h-3 rounded-full"></div></div>
                    <div><div className="bg-cinza-palido w-3 h-3 rounded-full"></div></div>
                    <div><div className="bg-cinza-palido w-3 h-3 rounded-full"></div></div>
                </div>
            </div>
        </section>
    );
}