import { useNavigate, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="flex items-center px-6 py-3 bg-white shadow">
      {/* ─── Left – nav links ─────────────────────────────
      <div className="flex items-center gap-6">
        <button
          onClick={() => navigate("/")}
          className={`text-sm font-medium hover:text-blue-600 ${
            location.pathname === "/" ? "text-blue-600 underline" : ""
          }`}
        >
          Home
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className={`text-sm font-medium hover:text-blue-600 ${
            location.pathname === "/dashboard" ? "text-blue-600 underline" : ""
          }`}
        >
          Dashboard
        </button>
      </div> */}

      {/* ─── Right – auth controls ──────────────────────── */}
      <div className="flex items-center gap-4 ml-auto">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
      </div>
    </nav>
  );
}
