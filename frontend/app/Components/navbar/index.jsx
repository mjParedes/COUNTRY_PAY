import Image from "next/image"

export  function NavBar(){
    return(
        <div className="bg-Morado/50 w-full h-24 flex items-center ">
            <div className="basis-1/3 place-content-center p-12">
                <Image src="/logos/Logo-CPweb.svg" width={255.64} height={46}  />
            </div>
            <div className="basis-1/3 space-x-10 text-base place-content-center">   
                <a src="/pages/index.js">Sobre nosotros</a>
                <a src="/pages/cartera.js">Características</a>
            </div>
            <div className="flex basis-1/3 place-content-center">
                <button className=" bg-Morado/700 w-32 h-12 rounded-md py-3.5 px-7 flex items-center justify-center text-white ">Registrarme</button>
            </div>
            
        </div>
    )
}
