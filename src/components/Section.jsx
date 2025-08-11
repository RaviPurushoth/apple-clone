import React from "react";
import img1 from "../assets/img1.png";

function Section() {
    return (
        <section className="w-full h-[500px] relative p-10 ">
            <div className="w-full h-full">
                <img src={img1} alt="Carousel" className="w-full h-full object-cover"/>
            </div>

            <div className="absolute bottom-5 left-5 text-white space-y-3 p-10">
                <p className="text-lg">This is a single image carousel section.</p>
                <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition">
                    Learn More
                </button>
            </div>
        </section>
    );
}

export default Section;