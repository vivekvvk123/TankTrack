import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function FlameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function Navbar() {
  return (
    <div className="">
      <header className="px-4 lg:px-6  h-14 flex items-center bg-gray-300 hover:bg-[rgb(89,91,92)] hover:text-white w-full">
        <a to={"#"} className="flex items-center justify-center">
          {""}
        </a>
        <FlameIcon className="h-6 w-6" />

        <span className="ml-2 text-lg font-medium">TankTrack</span>

        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            href="/"
            className="text-lg font-medium hover:underline underline-offset-4"
          >
            Home
          </a>

          <a
            href="/dashboard"
            className="text-lg font-medium hover:underline underline-offset-4"
          >
            Dashboard
          </a>

          <a
            href="registration"
            className="text-lg font-medium hover:underline underline-offset-4"
          >
            Registration
          </a>

          <a
            href="/logs"
            className="text-lg font-medium hover:underline underline-offset-4"
          >
            Logs
          </a>

          <a
            href="contact"
            className="text-lg font-medium hover:underline underline-offset-4"
          >
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// function FlameIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
//     </svg>
//   );
// }

// function Navbar() {
//   return (
//     <div className="">
//       <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-300 hover:bg-[rgb(89,91,92)] hover:text-white">
//         <Link to="/" className="flex items-center justify-center">
//           <FlameIcon className="h-6 w-6" />
//           <span className="ml-2 text-lg font-medium">TankTrack</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link
//             to="/"
//             className="text-lg font-medium hover:underline underline-offset-4"
//           >
//             Home
//           </Link>
//           <Link
//             to="/dashboard"
//             className="text-lg font-medium hover:underline underline-offset-4"
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/registration"
//             className="text-lg font-medium hover:underline underline-offset-4"
//           >
//             Registration
//           </Link>
//           <Link
//             to="/logs"
//             className="text-lg font-medium hover:underline underline-offset-4"
//           >
//             Logs
//           </Link>
//           <Link
//             to="/contact"
//             className="text-lg font-medium hover:underline underline-offset-4"
//           >
//             Contact
//           </Link>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Navbar;
