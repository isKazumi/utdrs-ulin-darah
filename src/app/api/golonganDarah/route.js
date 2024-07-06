import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.stokDarah.findMany();
    return NextResponse.json({ message: "Success", status: 200, data });
  } catch (error) {
    return NextResponse.json({ error: "Error" });
  }
}

export async function PUT(req, res) {
  try {
    const request = await req.json();
    const { id, jumlah } = request;

    await prisma.stokDarah.update({
      where: {
        id: Number(id),
      },
      data: {
        jumlah: Number(jumlah),
      },
    });

    return NextResponse.json({ message: "Success", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
