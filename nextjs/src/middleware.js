import { NextResponse } from 'next/server';

export function middleware(request) {
    return NextResponse.redirect(new URL('/S5', request.url));
    
}

export const config = {
    matcher : "/S6/api"
}