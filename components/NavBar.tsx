import Link from "next/link";
import { Button } from "./ui/button";

export default function NavBar() {
    return (
        <nav>
            <div className="container">
                <div className="flex items-center justify-between py-2">
                    <div className="text-2xl font-bold">Ai</div>
                    <div className="flex items-center gap-6">
                        <Link
                            href={"#"}
                            className="rounded-md border px-2 py-1.5 hover:bg-slate-100 transition-all duration-200 ease-in-out"
                        >
                            Signup
                        </Link>
                        <Link
                            href={"#"}
                            className="rounded-md border px-2 py-1.5 bg-primary text-white hover:opacity-65 transition-all duration-200 ease-in-out"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
