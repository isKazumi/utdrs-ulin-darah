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

const InputBlanko = () => {
  const [newBlanko, setNewBlanko] = useState({
    tanggal: "",
    no_rmk: "",
    name: "",
    ruangan: "",
    golongan_darah: "",
    rhesus: "",
    no_cross_test: "",
    no_kantong: "",
    jenis_darah: "",
    hasil_pemeriksaan: "",
    reaksi_transfusi: "",
    keterangan: "",
  });

  const handleSubmit = async () => {
    await axios.post("/api/blankoDarah", newBlanko).finally(() => {
      alert("Data Telah Disimpan");
      window.location.reload();
    });
  };

  const handleChange = (e) => {
    setNewBlanko({
      ...newBlanko,
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
            <DialogTitle>Tambah Blanko Darah</DialogTitle>
            <DialogDescription>
              Tambah belanko darah untuk pasien
            </DialogDescription>
          </DialogHeader>
          <div className="w-full text-black grid gap-2 max-h-96 overflow-y-auto">
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
              name="no_rmk"
              type="text"
              placeholder="No.RMK"
            />
            <Input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Nama Pasien"
            />
            <Input
              onChange={handleChange}
              name="ruangan"
              type="text"
              placeholder="Ruangan"
            />
            <Input
              onChange={handleChange}
              name="golongan_darah"
              type="text"
              placeholder="Golongan Darah"
            />
            <Input
              onChange={handleChange}
              name="rhesus"
              type="text"
              placeholder="Rehesus"
            />
            <Input
              onChange={handleChange}
              name="no_cross_test"
              type="text"
              placeholder="NO Cross-Test"
            />
            <Input
              onChange={handleChange}
              name="no_kantong"
              type="text"
              placeholder="No.Kantong Darah"
            />
            <Input
              onChange={handleChange}
              name="jenis_darah"
              type="text"
              placeholder="Jenis Darah"
            />
            <Input
              onChange={handleChange}
              name="hasil_pemeriksaan"
              type="text"
              placeholder="Hasil Pemeriksaan"
            />
            <Input
              onChange={handleChange}
              name="reaksi_transfusi"
              type="text"
              placeholder="Reaksi Transfusi"
            />
            <Input
              onChange={handleChange}
              name="keterangan"
              type="text"
              placeholder="Keterangan"
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

export default InputBlanko;
