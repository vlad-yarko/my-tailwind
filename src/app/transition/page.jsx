export default function Transition() {

    return (
            <div className="bg-pink-200 w-32 h-32 relative">
                <div className="transition delay-100 duration-1000 ease-in-out bg-lime-300 absolute bottom-0 right-2 w-16 h-8 text-center hover:-translate-x-8 active:bg-amber-500">
                    Box
                </div>
            </div>
    )
}

