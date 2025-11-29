import { PizzasSweetList } from "@/data/pizza_listData"
import { Skeleton } from "../ui/skeleton"

export const SkeletonList = () => {
    return (
        <div className="my-10">
            <Skeleton className="w-full h-9 rounded-md"/>

            <div className="mt-6 grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {Array.from({length: PizzasSweetList.length}, (item, index) => 
                    <div key={index}>
                        <Skeleton className="w-full h-70"/>
                    </div>
                )}

            </div>
        </div>
    )
}