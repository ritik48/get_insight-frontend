import spinner from "@/public/spinner.svg";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="absolute inset-0 flex justify-center items-center">
            <Image src={spinner} width={50} height={50} alt="loading spinner" />
        </div>
    );
}
