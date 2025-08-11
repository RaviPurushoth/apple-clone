import { FaApple } from "react-icons/fa"
import photo1 from "../assets/c1.png"
import photo2 from "../assets/heroimage2.png"
import photo3 from "../assets/heroimage3.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
function Hero() {
    return (
        <div className="space-y-5">
            <div className="relative w-full h-[500px]">
                <img className="w-full h-full object-cover cursor-pointer" src={photo1} alt="" />

                <div className="absolute top-1/4 left-60 text-white space-y-4">
                    <h1 className="text-4xl font-bold">Mac Book Air</h1>
                    <p className="text-lg">Every colors are Available in our Showroom</p>

                    <div className="flex space-x-4">
                        <button className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition">
                            Learn More
                        </button>
                        <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                            Buy Now
                        </button>
                    </div>

                    <p className="text-sm mt-2">High Performance with M4</p>
                </div>
            </div>

            <img className="cursor-pointer" src={photo2} alt="" />
            <img className="cursor-pointer" src={photo3} alt="" />


            <div className="grid grid-cols-2 gap-5 p-5">
                <div className="relative font-bold">
                    <img src={img1} alt="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-center">
                        <h1 className="text-white text-4xl font-semibold">iPad Pro</h1>
                        <p className="text-white text-lg">Unbelievably thin. Incredibly powerful.</p>
                        <div className="flex space-x-4">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Learn more</button>
                            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white">Buy</button>
                        </div>
                    </div>
                </div>

                <div className="relative font-bold">
                    <img src={img2} alt="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 text-center">
                        <div className="flex items-center space-x-1 text-white text-5xl font-semibold">
                            <FaApple />WATCH
                        </div>
                        <p className="text-sm tracking-widest text-white">SERIES 10</p>
                        <p className="text-white text-lg">Thinstant classic.</p>
                        <div className="flex space-x-4 mt-2">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Learn more</button>
                            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white">Buy</button>
                        </div>
                    </div>
                </div>

                <div className="relative"><img src={img3} alt="" />
                    <button className="absolute inset-0 m-auto h-10 w-32 bg-white text-black rounded-full hover:bg-gray-200">Learn more</button>
                </div>

                <div className="relative font-bold">
                    <img src={img4} alt="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-3">
                        <h1 className="text-6xl font-semibold text-white">Air Pods 4</h1>
                        <p className="text-white">
                            Iconic. Now supersonic, available with Active Noise Cancellation.
                        </p>
                        <div className="flex space-x-3">
                            <button className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
                                Learn more
                            </button>
                            <button className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>


                <div className="relative font-bold">
                    <img src={img5} alt="" />
                    <div className="absolute top-0 left-0 w-full flex flex-col items-center text-center mt-4 space-y-2">
                        <h1 className="text-3xl font-semibold text-black">Mac Book Pro</h1>
                        <p className="text-black">A Work of Smart</p>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
                                Learn more
                            </button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>


                <div className="relative font-bold">
                    <img src={img6} alt="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-2">
                        <h1 className="text-6xl font-semibold text-white">Air Pods 4</h1>
                        <div className="flex items-center text-white">
                            <FaApple />
                            <p>Trade In</p></div>
                        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full">Get your estimate</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Hero;