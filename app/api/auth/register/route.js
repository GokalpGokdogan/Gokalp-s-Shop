import { NextResponse } from 'next/server';
import { api } from '@/lib/api';

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password required' }, { status: 400 });
    }

    const { data: existed } = await api.get('/users', { params: { email } });
    if (Array.isArray(existed) && existed.length) {
      return NextResponse.json({ message: 'Email already registered' }, { status: 409 });
    }

    const { data: created } = await api.post('/users', { email, password });

    const res = NextResponse.json({ id: created.id, email: created.email }, { status: 201 });
    res.cookies.set('session', String(created.id), {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 30, //60 * 60 * 24 * 7,
    });

    return res;
  } catch (e) {
    return NextResponse.json({ message: 'Register failed' }, { status: 500 });
  }
}
