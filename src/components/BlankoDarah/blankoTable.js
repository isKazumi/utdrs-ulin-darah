"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import { Pencil, Printer, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { dateTimeConversi } from "@/lib/dateTimeConversi";
import { useRouter } from "next/navigation";
import axios from "axios";

const BelankoTable = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/blankoDarah", {
      method: "GET",
      next: { revalidate: 10 },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`/api/blankoDarah/${id}`)
      .finally(() => window.location.reload());
  };

  return (
    <>
      <Table>
        <TableCaption>List belanko darah</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>NO</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>NO.RMK</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Ruangan</TableHead>
            <TableHead>Golongan Darah</TableHead>
            <TableHead>Rhesus</TableHead>
            <TableHead>No Cross-Test</TableHead>
            <TableHead>No Kantong</TableHead>
            <TableHead>Jenis Darah</TableHead>
            <TableHead>Hasil Pemeriksaan</TableHead>
            <TableHead>Reaksi Transfusi</TableHead>
            <TableHead>Keterangan</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-medium">
                {dateTimeConversi(item.tanggal)}
              </TableCell>
              <TableCell className="font-medium">{item.no_rmk}</TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="font-medium">{item.ruangan}</TableCell>
              <TableCell className="font-medium">
                {item.golongan_darah}
              </TableCell>
              <TableCell className="font-medium">{item.rhesus}</TableCell>
              <TableCell className="font-medium">
                {item.no_cross_test}
              </TableCell>
              <TableCell className="font-medium">{item.no_kantong}</TableCell>
              <TableCell className="font-medium">{item.jenis_darah}</TableCell>
              <TableCell className="font-medium">
                {item.hasil_pemeriksaan}
              </TableCell>
              <TableCell className="font-medium">
                {item.reaksi_transfusi}
              </TableCell>
              <TableCell className="font-medium">{item.keterangan}</TableCell>
              <TableCell className="font-medium">
                <Button size="icon" variant="success">
                  <Pencil size={16} />
                </Button>
                <Button size="icon" variant="success">
                  <Printer size={16} />
                </Button>
                <Button
                  size="icon"
                  variant="danger"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default BelankoTable;
