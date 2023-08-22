import Image from "next/image"

export default function NavBar(){
    return(
        <div className="bg-Rosado/50 w-9/12 h-20 flex items-center ">
            <div className="basis-1/2">
                <Image src="/public/next.svg" width={60} height={60}></Image>
            </div>
            <div className="basis-1/2 space-x-10 text-xs">   
                <a src="/pages/index.js">Home</a>
                <a src="/pages/cartera.js">Cartera</a>
                <a src="/pages/movimientos.js">Movimientos</a>
                <button className="basis-1/4 bg-gray-900 w-32 h-12 rounded-md py-3.5 px-7"></button>
            </div>
            
        </div>
    )
}
