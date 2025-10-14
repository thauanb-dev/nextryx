interface ProcessItemProps{
    name : string
}

function ProcessItem({name}:ProcessItemProps){
    return(
            <div className="flex h-[50px] w-[250px] border-l-8 border-green-500 bg-emerald-50 text-stone-900 rounded-xl hover:shadow-neutral-300 hover:shadow-md  transition-all duration-300 cursor-pointer items-center p-1">
                <p>{name}</p>
            </div>

    )
}

export default ProcessItem