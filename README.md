# Gokalp's Shop

A simple e‑commerce demo built with **Next.js 15**, **React**, **Tailwind CSS**, and a local **JSON Server**

---
> Vercel Link
>
> - **https://gokalp-s-shop.vercel.app/**

> Default ports
>
> - Frontend (Next.js): **http://localhost:3000**
> - API (json‑server): **http://localhost:4000**

---

## Quick Start

1) **Install dependencies**
```bash
npm install
```

2) **Start the JSON Server (Terminal A)**

```bash
npm run json-server
```

3) **Start the Next.js dev server (Terminal B)**

```bash
npm run dev
```

4) **Open http://localhost:3000 in your browser.**


---

***Authentication***

Login/Register API routes validate against JSON Server and set an auth cookie (stores the user ID).

middleware.js checks the cookie to gate private routes (e.g., /profile, /wishlist) before rendering.

The current session returns { id, email, name }.

/api/auth/logout deletes the cookie; the client clears in-memory user state and redirects to /login.

***State Management***

React Context is used for both Cart and Wishlist actions (add/remove/update/clear).

Cart and Wishlist are saved to localStorage so they survive reloads.


***API Communication***

Single Axios instance (baseURL = http://localhost:4000) for all requests to JSON Server.

Home/Listing/Detail pages fetch product data (server components for fast initial render).

Cart posts a new order (POST /orders with userId, items, total, date), clears the cart, and redirects to /profile since past orders are visible there.

Profile retrieves history with GET /orders?userId= and shows past purchases.
