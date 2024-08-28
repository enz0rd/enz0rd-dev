const Experiences = () => {
    return (
        <div id='experiences' className="w-full py-[5rem] flex align-middle justify-center col-span-1 bg-gradient-to-br from-[#FFDA58] via-[#FDC500] to-[#BB9200]">
            <div className="m-[2rem] w-fit my-auto flex flex-col gap-5">
                <h1 className="text-3xl font-bold">My Experiences</h1>
                <div className="w-fit h-fit grid grid-cols-2 grid-rows-2 gap-2">
                    <div className="w-full h-full flex flex-col m-auto justify-center text-center bg-zinc-50 p-3 rounded-2xl">
                        <span className="font-regular">Feb/2022</span>
                        <span className="font-light">Graphic designer at</span>
                        <span className="font-bold">Microsite Agency</span>
                    </div>
                    <div className="w-full h-full flex flex-col m-auto justify-center text-center bg-zinc-50 p-3 rounded-2xl">
                        <span className="font-regular">Jan/2023</span>
                        <span className="font-light">Customer Experience at</span>
                        <span className="font-bold">Gdoor Zucchetti</span>
                    </div>
                    <div className="w-full h-full flex flex-col m-auto justify-center text-center bg-zinc-50 p-3 rounded-2xl">
                        <span className="font-regular">Jun/2024</span>
                        <span className="font-light">Quality assurance at</span>
                        <span className="font-bold">Gdoor Zucchetti</span>
                    </div>
                    <div className="w-full h-full flex flex-col m-auto justify-center text-center bg-zinc-50 p-3 rounded-2xl">
                        <span className="font-regular">Future</span>
                        <span className="font-light">Web Developer at</span>
                        <span className="font-bold">???</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences;