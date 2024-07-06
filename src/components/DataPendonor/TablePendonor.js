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
import axios from "axios";

const TablePendonor = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/pendonorDarah", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`/api/pendonorDarah/${id}`)
      .finally(() => window.location.reload());
  };

  return (
    <>
      <Table>
        <TableCaption>List Pendonor Darah</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>NO</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>Nama Pendonor</TableHead>
            <TableHead>Golongan Darah</TableHead>
            <TableHead>Kategori Donor</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className="text-black">
              <TableCell className="font-medium">{item.nomer}</TableCell>
              <TableCell className="font-medium">
                {dateTimeConversi(item.tanggal)}
              </TableCell>
              <TableCell className="font-medium">
                {item.golongan_darah}
              </TableCell>
              <TableCell className="font-medium">
                {item.kategori_donor}
              </TableCell>
              <TableCell className="font-medium">
                {item.kategori_donor}
              </TableCell>
              <TableCell>
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

export default TablePendonor;
