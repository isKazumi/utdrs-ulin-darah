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
  SelectLabel,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CreditCard } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const DialogKartuGolongan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [create, setCreate] = useState({
    nama_lengkap: "",
    tanggal_lahir: "",
    Telpon: "",
    golongan_darah: "",
  });

  const handleSubmit = async () => {
    await axios
      .post("/api/kartuDarah", create, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .finally(() => {
        alert("Berhasil nambah kartu darah");
        setIsOpen(!isOpen);
      });
  };

  const handleChange = (e) => {
    setCreate({ ...create, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    setCreate({ ...create, golongan_darah: e });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex gap-2 font-bold text-md p-4 text-white">
          <span>
            <CreditCard />
          </span>
          <span>Kartu Golongan Darah</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] className=">
        <DialogHeader>
          <DialogTitle>Kartu Golongan Darah</DialogTitle>
          <DialogDescription>
            Membuat kartu golongan darah untuk pasien
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-black">
          <Input
            name="nama_lengkap"
            onChange={handleChange}
            type="text"
            placeholder="Nama Lengkap"
          />
          <div>
            <label className="text-white">Tanggal Lahir</label>
            <Input name="tanggal_lahir" onChange={handleChange} type="date" />
          </div>
          <Input
            name="tempat_lahir"
            onChange={handleChange}
            type="text"
            placeholder="Tempat Lahir"
          />
          <Input
            name="Telpon"
            onChange={handleChange}
            type="tlp"
            placeholder="No Telpon"
          />
          <Select onValueChange={handleSelect}>
            <SelectTrigger className="text-black">
              <SelectValue placeholder="Golongan Darah" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">A</SelectItem>
              <SelectItem value="B">B</SelectItem>
              <SelectItem value="AB">AB</SelectItem>
              <SelectItem value="O">O</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button type="button" variant="success" onClick={handleSubmit}>
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogKartuGolongan;
