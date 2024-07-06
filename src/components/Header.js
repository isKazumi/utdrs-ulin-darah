"use client";
import axios from "axios";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const logout = async () => {
    const isLogout = await axios
      .delete("/api/auth/logout")
      .catch((e) => console.log(e));

    if (isLogout) {
      router.push("/auth/login");
    }
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <div className="text-red-600 text-2xl font-bold">
          UNIT TRANSFUSI DARAH RSUD ULIN
        </div>
        <Button variant="danger" size="sm" onClick={logout}>
          Keluar
        </Button>
      </div>
    </div>
  );
};

export default Header;
