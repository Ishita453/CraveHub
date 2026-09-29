# CraveHub — Restaurant Online Ordering & Order Management

A small but polished restaurant ordering application built for a frontend/full-stack assessment. It demonstrates Next.js App Router, Server/Client Components, TypeScript, Tailwind CSS, API route handlers, persistent client state, validation, responsive UI and a simple restaurant operations dashboard.

## Features

### Customer
- Restaurant landing/menu page
- Menu loaded from a documented JSON data source through a Next.js API route
- Search by dish name
- Category filtering
- Popular-item filter
- Responsive food cards with image, description, price and preparation time
- Persistent cart using Zustand + localStorage
- Add/remove/update quantity
- Subtotal, 5% tax and grand total
- Rule-based "Complete your meal" cross-sell suggestions
- Checkout form with Zod + React Hook Form validation
- Mock order submission through `/api/orders`
- Success and API-error states
- Generated order ID and confirmation screen

### Admin
- Separate `/admin/orders` operations page
- Revenue, order, pending and preparing metrics
- Search/filter orders
- Status filters: Pending, Accepted, Preparing, Completed
- Order detail drawer
- Change order status through a PATCH API route
- Responsive admin interface

## Tech stack
- Next.js 15 + App Router
- TypeScript
- Tailwind CSS
- React Hook Form 
- Next.js Route Handlers

## Folder structure
```text
app/
  api/menu/                 # Menu API route
  api/orders/               # Order GET/POST API
  api/orders/[id]/          # Order status PATCH API
  checkout/                 # Customer checkout
  order-success/            # Confirmation screen
  admin/orders/             # Admin order management
components/
  menu/                     # Menu search/filter/cards
  cart/                     # Cart drawer
  checkout/                 # Checkout form
  admin/                    # Admin UI
  ui/                       # Reusable UI primitives/toast
lib/
  recommendations.ts       # Business-focused cross-sell rules
  server-orders.ts          # Mock server-side order store
  utils.ts                  # Currency/tax/helpers
store/
  cart-store.ts             # Persistent client cart state
data/
  menu.json                 # Mock menu source
  orders.json               # Sample order source
types/
  index.ts                  # Shared TypeScript models
```
## Environment variables
Copy `.env.example` to `.env.local` if you want to customize the values:

```env
NEXT_PUBLIC_RESTAURANT_NAME=CraveHub
NEXT_PUBLIC_TAX_RATE=0.05
```
No secrets are required for this demo.

## Run locally
Requirements: Node.js 20+ recommended.
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.
Admin: `http://localhost:3000/admin/orders`

Production build check:
```bash
npm run build
npm start
```

## Production considerations / discussion points

### API security
- Validate every request on the server, not only in the browser.
- Add authentication and authorization middleware for admin routes.
- Store sensitive credentials in server-only environment variables.
- Rate-limit public order endpoints.
- Never trust client-calculated prices; fetch current item prices server-side before creating an order.
- Add database transactions for inventory/order creation.

### Admin authentication
A production app should use a proper identity provider/session system and enforce an `admin` role on the server. Hiding the admin link is not security.

### 1,000+ menu items
Use server-side filtering/search, pagination or infinite scrolling, database indexes, image optimization, caching and potentially category-specific endpoints. Search should not require shipping the full dataset to the browser.

### Real-time orders
Use WebSockets or Server-Sent Events for live kitchen updates. For a multi-instance deployment, use a shared event/pub-sub system rather than process-local memory.

## Features intentionally not included
- Real payment processing
- Persistent database
- Admin authentication/authorization
- Real-time WebSockets
- Inventory reservation
- Customer review 
