"use client";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import axios from "axios";

const InputPendonor = () => {
  const [newPendonor, setNewPendonor] = useState({
    nomer: "",
    tanggal: "",
    name: "",
    golongan_darah: "",
    kategori_donor: "",
  });

  const handleSubmit = async () => {
    await axios
      .post("/api/pendonorDarah", newPendonor)
      .finally(() => {
        alert("Data Telah Disimpan");
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  const handleChange = (e) => {
    setNewPendonor({
      ...newPendonor,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="success" className="my-4">
            Input
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tambah pendonor</DialogTitle>
            <DialogDescription>Tambah data untuk pendonor</DialogDescription>
          </DialogHeader>
          <div className="w-full text-black grid gap-2 max-h-96 overflow-y-auto">
            <Input
              onChange={handleChange}
              name="nomer"
              type="text"
              placeholder="Nomor"
            />
            <div>
              <label className="text-white">Tanggal</label>
              <Input
                onChange={handleChange}
                name="tanggal"
                type="date"
                placeholder="Tanggal"
              />
            </div>
            <Input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Nama"
            />
            <Input
              onChange={handleChange}
              name="golongan_darah"
              type="text"
              placeholder="Golongan Darah"
            />
            <Input
              onChange={handleChange}
              name="kategori_donor"
              type="text"
              placeholder="Kategori Donor"
            />
          </div>
          <DialogFooter>
            <Button variant="success" type="button" onClick={handleSubmit}>
              Simpan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InputPendonor;
