import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const data = await prisma.blankoDarah.findMany();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

export async function POST(req, res) {
  try {
    const request = await req.json();
    const {
      tanggal,
      no_rmk,
      name,
      ruangan,
      golongan_darah,
      rhesus,
      no_cross_test,
      no_kantong,
      jenis_darah,
      hasil_pemeriksaan,
      reaksi_transfusi,
      keterangan,
    } = request;

    await prisma.blankoDarah.create({
      data: {
        tanggal: new Date(tanggal),
        no_rmk: no_rmk,
        name: name,
        ruangan: ruangan,
        golongan_darah: golongan_darah,
        rhesus: rhesus,
        no_cross_test: no_cross_test,
        no_kantong: no_kantong,
        jenis_darah: jenis_darah,
        hasil_pemeriksaan: hasil_pemeriksaan,
        reaksi_transfusi: reaksi_transfusi,
        keterangan: keterangan,
      },
    });

    return NextResponse.json({ message: "Success", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
