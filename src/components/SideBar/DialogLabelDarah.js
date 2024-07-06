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
import { Tag } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const DialogLabelDarah = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [create, setCreate] = useState({
    produk: "",
    volume: "",
    waktu_permintaan: "",
    waktu_exp: "",
    golongan_darah: "",
    rhesus: "",
    non_reaktif: "",
    no_kantong: "",
    suhu_penyimpanan: "",
    no_rmk: "",
    nama_pasien: "",
    ruangan: "",
    hasil_pemeriksaan: "",
  });

  const handleSubmit = async () => {
    await axios
      .post("/api/labelDarah", create, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .finally(() => {
        alert("Berhasil membuat label darah");
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
            <Tag />
          </span>
          <span>Label Darah</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] className=">
        <DialogHeader>
          <DialogTitle>Label Darah</DialogTitle>
          <DialogDescription>Cetak label darah untuk pasien</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-black max-h-96 overflow-auto">
          <Input
            name="produk"
            onChange={handleChange}
            type="text"
            placeholder="Produk"
          />
          <Input
            name="volume"
            onChange={handleChange}
            type="text"
            placeholder="Volume"
          />
          <div>
            <label className="text-white">Waktu Permintaan</label>
            <Input
              name="waktu_permintaan"
              onChange={handleChange}
              type="date"
            />
          </div>
          <div>
            <label className="text-white">Waktu Exp</label>
            <Input name="waktu_exp" onChange={handleChange} type="date" />
          </div>
          <Input
            name="golongan_darah"
            onChange={handleChange}
            type="text"
            placeholder="Golongan darah"
          />
          <Input
            name="rhesus"
            onChange={handleChange}
            type="text"
            placeholder="Rhesus"
          />
          <Input
            name="non_reaktif"
            onChange={handleChange}
            type="text"
            placeholder="Non Reaktif"
          />
          <Input
            name="no_kantong"
            onChange={handleChange}
            type="text"
            placeholder="No Kantong"
          />
          <Input
            name="suhu_penyimpanan"
            onChange={handleChange}
            type="text"
            placeholder="Suhu Penyimpanan"
          />
          <Input
            name="no_rmk"
            onChange={handleChange}
            type="text"
            placeholder="No.Rmk"
          />
          <Input
            name="nama_pasien"
            onChange={handleChange}
            type="text"
            placeholder="Nama Pasien"
          />
          <Input
            name="ruangan"
            onChange={handleChange}
            type="text"
            placeholder="Ruangan"
          />
          <Input
            name="hasil_pemeriksaan"
            onChange={handleChange}
            type="text"
            placeholder="Hasil Pemeriksaan"
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

export default DialogLabelDarah;
