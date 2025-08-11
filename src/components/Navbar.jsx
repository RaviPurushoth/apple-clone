import { FaApple, FaSearch, FaShoppingBag } from "react-icons/fa"
function Navbar() {
    return (
        <nav className="bg-white/90 sticky top-0 z-50 shadow ">
            <ul className="flex justify-center space-x-10 p-3 text-sm items-center">
                <li><FaApple /></li>
                <li>
                    <a href="">
                        Home
                    </a>
                </li>
                <li>
                    <a href="">
                        iPad
                    </a>
                </li>
                <li>
                    <a href="">
                        iPhone
                    </a>
                </li>
                <li>
                    <a href="">
                        Mac
                    </a>
                </li>
                <li>
                    <a href="">
                        Watch
                    </a>
                </li>
                <li>
                    <a href="">
                        Airpads
                    </a>
                </li>
                <li>
                    <a href="">
                        TW & Home
                    </a>
                </li>
                <li>
                    <a href="">
                        Entertainment
                    </a>
                </li>
                <li>
                    <a href="">
                        Accessories
                    </a>
                </li>
                <li>
                    <a href="">
                        Support
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaSearch />
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaShoppingBag />
                    </a>
                </li>
            </ul>
        </nav>

    )
}
export default Navbar;