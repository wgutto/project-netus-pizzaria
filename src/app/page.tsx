import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { PizzaList } from "@/components/PizzaList"
import { PizzaProvider } from "@/contexts/PizzaContext"

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <PizzaProvider>
        <Header />

        <main className="flex-1 mb-5">
          <PizzaList />
        </main>
      </PizzaProvider>

      <Footer />
    </div>
  )
}

export default Page