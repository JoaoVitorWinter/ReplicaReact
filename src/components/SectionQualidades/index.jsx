import Qualidade from "/src/components/Qualidade";


export default function SectionQualidades() {
    return (
        <section className="py-24 px-14 flex flex-wrap bg-secundaria-media gap-x-20 gap-y-10 justify-center">
            <Qualidade imagem={"./images/trophy 1.png"} titulo={"High Quality"} descricao={"Crafted from top materials"}></Qualidade>
            <Qualidade imagem={"./images/guarantee.png"} titulo={"Warranty Protection"} descricao={"Over 2 years"}></Qualidade>
            <Qualidade imagem={"./images/shipping.png"} titulo={"Free Shipping"} descricao={"Order over 150 $"}></Qualidade>
            <Qualidade imagem={"./images/customer-support.png"} titulo={"24 / 7 Support"} descricao={"Dedicated support"}></Qualidade>
        </section>
    );
}