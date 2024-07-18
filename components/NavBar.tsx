import Link from "next/link";
import { Session } from "next-auth";
import Logout from "./Logout";

export default function NavBar({ session }: { session: Session | null }) {
    const isAuthenticated = session?.user?.username;
    return (
        <nav>
            <div className="container">
                <div className="flex items-center justify-between py-2">
                    <Link href={"/"} className="text-2xl font-bold">
                        Ai
                    </Link>
                    <div className="flex items-center gap-6">
                        {!isAuthenticated ? (
                            <>
                                <Link
                                    href={"/signup"}
                                    className="rounded-md border px-2 py-1.5 hover:bg-slate-100 transition-all duration-200 ease-in-out"
                                >
                                    Signup
                                </Link>
                                <Link
                                    href={"/signin"}
                                    className="rounded-md border px-2 py-1.5 bg-primary text-white hover:opacity-65 transition-all duration-200 ease-in-out"
                                >
                                    Login
                                </Link>
                            </>
                        ) : (
                            <Logout />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
