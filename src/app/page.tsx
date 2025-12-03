"use client"

import { Footer } from "@/components/interface/Footer"
import { Header } from "@/components/interface/Header"
import { PizzaList } from "@/components/products/PizzaList"
import { SkeletonList } from "@/components/products/Skeleton"
import { CartProvider } from "@/contexts/CartContext"
import { UserProvider } from "@/contexts/UserContext"
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