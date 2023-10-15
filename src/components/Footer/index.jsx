export default function Footer() {
    return (
        <footer className="font-poppins">
            <div className="py-12 pl-24 flex flex-wrap gap-24">
                <div>
                    <h2 className="font-bold text-2xl">Funiro.</h2>
                    <address className="text-[#9F9F9F] mt-16">
                        400 University Drive Suite 200 Coral Gables,<br />
                        FL 33134 USA
                    </address>
                </div>
                <nav>
                    <p className="text-[#9F9F9F] font-medium">Links</p>
                    <ul className="font-medium flex flex-col gap-11 mt-16">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <nav>
                    <p className="text-[#9F9F9F] font-medium">Help</p>
                    <ul className="font-medium flex flex-col gap-11 mt-16">
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </nav>
                <div>
                    <p className="text-[#9F9F9F] font-medium">Newsletter</p>
                    <div className="font-medium mt-16">
                        <input className="border-b border-black text-sm" type="email" placeholder="Enter Your Email Address" />
                        <button className="border-b border-black ml-3 text-sm font-medium">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <hr className="mx-24"/>
            <p className="ml-24 my-9">2023 Funiro. All rights reserved</p>
        </footer>
    );
}