import Link from "next/link"

export default ()=> (
    <div className="flex gap-3 py-6 justify-center w-full">
        <Link href="#" className="border-r-2 px-3 border-gray-400 hover:text-blue-400">Нүүр</Link>
        <Link href="#" className="border-r-2 pr-3 border-gray-400 hover:text-blue-400">сургалт</Link>
        <Link href="#" className=" hover:text-blue-400">фэйсбүүк</Link>
    </div>
)