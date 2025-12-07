"use client"

import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { PizzaList } from "@/components/products/PizzaList"
import { SkeletonList } from "@/components/products/Skeleton"
import { CartProvider } from "@/features/cart/context/CartContext"
import { UserProvider } from "@/features/user/context/UserContext"
import { Suspense } from "react"

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <CartProvider>
        <UserProvider>
          <Header />

        <main className="flex-1 mb-5 p-4">
          <Suspense fallback={<SkeletonList/>}>
            <PizzaList/>
          </Suspense>
        </main>
        </UserProvider>
      </CartProvider>

      <Footer />
    </div>
  )
}

export default Page