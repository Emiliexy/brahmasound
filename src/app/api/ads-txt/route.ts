import { NextResponse } from 'next/server';

export async function GET() {
  // 返回ads.txt文件内容
  return new NextResponse('google.com, pub-2909094795372025, DIRECT, f08c47fec0942fa0', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 