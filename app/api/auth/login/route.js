import { NextResponse } from 'next/server';
import { api } from '@/lib/api';

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password required' }, { status: 400 });
    }

    const { data: users } = await api.get('/users', { params: { email } });
    const user = Array.isArray(users) ? users[0] : null;

    if (!user || user.password !== password) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const res = NextResponse.json({ id: user.id, email: user.email }, { status: 200 });
    res.cookies.set('session', String(user.id), {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 30, // 60 * 60 * 24 * 7,
    });

    return res;
  } catch (e) {
    return NextResponse.json({ message: 'Login failed' }, { status: 500 });
  }
}
