"use server";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const request = await req.json();
    const {
      produk,
      volume,
      waktu_permintaan,
      waktu_exp,
      golongan_darah,
      rhesus,
      non_reaktif,
      no_kantong,
      suhu_penyimpanan,
      no_rmk,
      nama_pasien,
      ruangan,
      hasil_pemeriksaan,
    } = request;

    await prisma.labelDarah.create({
      data: {
        produk: produk,
        volume: volume,
        waktu_permintaan: new Date(waktu_permintaan),
        waktu_exp: new Date(waktu_exp),
        golongan_darah: golongan_darah,
        rhesus: rhesus,
        non_reaktif: non_reaktif,
        no_kantong: no_kantong,
        suhu_penyimpanan: suhu_penyimpanan,
        no_rmk: no_rmk,
        nama_pasien: nama_pasien,
        ruangan: ruangan,
        hasil_pemeriksaan: hasil_pemeriksaan,
      },
    });

    return NextResponse.json({ message: "success", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
