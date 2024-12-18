import React from 'react'

const projectCard = ({ imgUrl, title, description }: { imgUrl: string, title: string, description: string }) => {
    return (
        <div>
            <div 
                className="h-52 md:h-72 rounded-t-xl relative" 
                style={{ background: 'url(${imgUrl})', backgroundSize: "cover"}}></div>
                <div className="overlay absolute top-0 left-0 w-full h-full bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-a;; duration-500"></div>
                <div className="rounded-b-xl py-6 px-4">
                        <h5 className="text-xl font-semibold mb-2">{title}</h5>
                        <p className="text-[#ADB7BE]">{description}</p>
                </div>
        </div>
    )
}

export default projectCard
