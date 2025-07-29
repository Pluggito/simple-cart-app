"use client"

import { useSelector } from "react-redux"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Cart() {
  const { totalCount } = useSelector((state) => state.cart)

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button variant="outline" className="relative bg-transparent">
        <ShoppingCart className="w-5 h-5 mr-2" />
        Cart
        {totalCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {totalCount}
          </span>
        )}
      </Button>
    </div>
  )
}
