import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const request = await req.json();
    const { nomer, tanggal, name, golongan_darah, kategori_donor } = request;
    await prisma.dataPendonor.create({
      data: {
        nomer: nomer,
        tanggal: new Date(tanggal),
        name: name,
        golongan_darah: golongan_darah,
        kategori_donor: kategori_donor,
      },
    });

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

export async function GET() {
  try {
    const data = await prisma.dataPendonor.findMany();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
