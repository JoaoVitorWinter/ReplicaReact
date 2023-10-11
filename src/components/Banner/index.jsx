import "./Banner.css";

export default function Banner() {
    return (
        <section className="bg-banner w-full h-720 font-poppins text-black flex items-start justify-end px-14 pt-40">
            <div className="flex flex-col bg-secundaria px-10 pt-16 pb-9">
                <p className="tracking-3 font-semibold text-base">
                    New Arrival
                </p>
                <h2 className="text-primaria text-5xl font-bold leading-largo w-96">
                    Discover Our New Collection
                </h2>
                <p className="text-lg font-normal leading-6 mt-4 w-544">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
                <a className="bg-primaria text-white font-bold text-base w-56 py-6 mt-11 text-center" href="#">BUY NOW</a>
            </div>
        </section>
    )
}