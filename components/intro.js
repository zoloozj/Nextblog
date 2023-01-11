import Image from "next/image"
import {logo} from "public"
export default () => (
    <div className="flex justify-start gap-6 items-center pb-4 bottom-line">
        <Image src={logo} className="rounded-full" width={64} />
        <div className="flex flex-col justify-start">
            <h2 className="font-bold">One Piece - Манга Монгол хэлээр унших</h2>
            <p>Бид дэлхийн хамгийн алдартай манга болох <strong>One Piece</strong>-ыг орчуулан та бүхэнд хүргэж байна.</p>
        </div>
    </div>
)
    
