import "./Banner.css";

export default function Banner() {
    return (
        <section className="bg-banner w-full h-720 font-poppins text-black flex items-center justify-end">
            <div className="bg-secundaria px-10 pt-15 pb-9">
                <p className="tracking-3 font-semibold text-base">New Arrival</p>
                <h2 className="text-primaria text-5xl font-bold leading-largo">Discover Our New Collection</h2>
                <p className="text-lg font-normal leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus, tempora fuga nesciunt alias corrupti? Dignissimos qui libero quae! Deleniti aliquid quidem nobis obcaecati eaque vero ex voluptatibus reprehenderit iste?</p>
            </div>
        </section>
    )
}