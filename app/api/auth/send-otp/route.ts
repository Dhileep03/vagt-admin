import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Prisma and Vonage
const prisma = new PrismaClient();
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY as string,
  apiSecret: process.env.VONAGE_API_SECRET as string,
});

// Handle POST request
export async function POST(req: NextRequest) {
  try {
    const { phoneNumber } = await req.json();

    if (!phoneNumber) {
      return NextResponse.json({ message: 'Phone number is required' }, { status: 400 });
    }

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store the OTP and phone number in the database
    await prisma.otp.create({
      data: {
        otp,
        phonenumber: phoneNumber,
      },
    });

    // Send the OTP via SMS
    const from = 'Vonage APIs';
    const text = `Your OTP is ${otp}`;
    
    const response = await vonage.sms.send({ to: phoneNumber, from, text });
    console.log('SMS send response:', response);

    return NextResponse.json({ message: 'OTP sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json({ message: 'Failed to send OTP' }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects after request
  }
}
