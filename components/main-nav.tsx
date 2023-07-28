"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";


interface MainNavProps {
}

const MainNav: React.FC<MainNavProps> = ({
  
}) => {
  const pathname = usePathname();

  

  return (
    <nav
      className="mx-6 flex items-center space-x-4 lg:space-x-6"
    >
      {}
    </nav>
  )
};

export default MainNav;