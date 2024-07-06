"use client";
import Header from "../Header";
import Image from "next/image";
import { Button } from "../ui/button";
import { RefreshCw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const route = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [update, setUpdate] = useState({
    id: "",
    jumlah: "",
  });

  useEffect(() => {
    fetch("/api/golonganDarah")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [isOpen]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  const a = data.map((item) => item.jumlah);
  const b = a.reduce((a, b) => a + b, 0);

  const handleUpdate = async () => {
    await axios.put("/api/golonganDarah", update).finally(() => {
      route.refresh();
      setIsOpen(!isOpen);
    });
  };

  return (
    <div className="text-gray-600">
      <Header />
      <div className="flex flex-col items-end group">
        <div className="my-10 w-full text-3xl text-center font-bold">
          Stock : {b}
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="success" className="group mb-4">
              <span className="mr-2">
                <RefreshCw size={20} className="group-hover:animate-spin" />
              </span>
              <span> Update</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Update Stock</DialogTitle>
              <DialogDescription>
                Untuk Melakukan Update Stock darah silahkan isi inputan di bawah
                ini !!!
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Select
                onValueChange={(e) => setUpdate({ ...update, id: Number(e) })}
              >
                <SelectTrigger className="w-full text-black">
                  <SelectValue placeholder="Pilih Golongan Darah" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="text-red-600">
                    <SelectLabel>Golongan Darah</SelectLabel>
                    <SelectItem value="1">A</SelectItem>
                    <SelectItem value="3">B</SelectItem>
                    <SelectItem value="2">AB</SelectItem>
                    <SelectItem value="4">O</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="grid grid-cols-1">
                <Input
                  placeholder="Jumlah"
                  type="number"
                  className="text-black"
                  onChange={(e) =>
                    setUpdate({ ...update, jumlah: Number(e.target.value) })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="success" onClick={handleUpdate}>
                Update
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-2 gap-2 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-4 w-full h-[150px] bg-white shadow-lg flex justify-center items-center gap-14 rounded-lg"
          >
            <Image src="/blood.png" alt="blood" width={80} height={60} />
            <div className="text-3xl font-bold text-center">
              <div>{item.golongan}</div>
              <div>{item.jumlah}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
