"use server";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const request = await req.json();
    const {
      nama,
      jabatan,
      ruangan,
      nomor,
      telah_melakukan_pemusnaha,
      tempat_melakukan_pemusnahan,
    } = request;

    await prisma.pemusnahanDarah.create({
      data: {
        nama: nama,
        jabatan: jabatan,
        ruangan: ruangan,
        nomor: nomor,
        telah_melakukan_pemusnaha: telah_melakukan_pemusnaha,
        tempat_melakukan_pemusnahan: tempat_melakukan_pemusnahan,
      },
    });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
