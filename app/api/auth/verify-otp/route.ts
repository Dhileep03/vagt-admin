import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { phonenumber, otp } = await req.json();

    if (!phonenumber || !otp) {
      return NextResponse.json({ error: 'Phone number and OTP are required.' }, { status: 400 });
    }

    // Find the OTP record by phone number
    const otpRecord = await prisma.otp.findUnique({
      where: { phonenumber },
    });

    // Check if the OTP exists and matches
    if (!otpRecord || otpRecord.otp !== otp) {
      return NextResponse.json({ error: 'Invalid OTP.' }, { status: 400 });
    }

    // OTP is correct, delete the record from the database
    await prisma.otp.delete({
      where: { phonenumber },
    });

    return NextResponse.json({ message: 'OTP verified successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json({ error: 'Error verifying OTP.' }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects after request
  }
}
