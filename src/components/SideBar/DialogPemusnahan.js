import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const DialogPemusnahan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [create, setCreate] = useState({
    nama: "",
    jabatan: "",
    ruangan: "",
    nomor: "",
    telah_melakukan_pemusnaha: "",
    tempat_melakukan_pemusnahan: "",
  });

  const handleSubmit = async () => {
    await axios
      .post("/api/pemusnahanDarah", create, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .finally(() => {
        alert("Berhasil pemusnahan darah");
        setIsOpen(!isOpen);
      });
  };

  const handleChange = (e) => {
    setCreate({ ...create, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex gap-2 font-bold text-md p-4 text-white">
          <span>
            <Trash2 />
          </span>
          <span>Pemusnahan Darah</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] className=">
        <DialogHeader>
          <DialogTitle>Pemusnahan Darah</DialogTitle>
          <DialogDescription>Record data pemusnahan darah</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-black max-h-96 overflow-auto">
          <Input
            name="nama"
            onChange={handleChange}
            type="text"
            placeholder="Nama Lengkap"
          />
          <Input
            name="jabatan"
            onChange={handleChange}
            type="text"
            placeholder="Jabatan"
          />
          <Input
            name="ruangan"
            onChange={handleChange}
            type="text"
            placeholder="Ruangan"
          />
          <Input
            name="nomor"
            onChange={handleChange}
            type="text"
            placeholder="Nomor"
          />
          <Input
            name="telah_melakukan_pemusnaha"
            onChange={handleChange}
            type="text"
            placeholder="Telah Melakukan Pemusnahan"
          />
          <Input
            name="tempat_melakukan_pemusnahan"
            onChange={handleChange}
            type="text"
            placeholder="Tempat Melakukan Pemusnahan"
          />
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

export default DialogPemusnahan;
