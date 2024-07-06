import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const request = await req.json();

    const { nama_lengkap, tanggal_lahir, Telpon, golongan_darah } = request;

    const a = await prisma.kartuGolonganDarah.create({
      data: {
        nama_lengkap: nama_lengkap,
        tanggal_lahir: new Date(tanggal_lahir),
        Telpon: Telpon,
        golongan_darah: golongan_darah,
      },
    });

    console.log(a);

    return NextResponse.json({ message: "Success", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
