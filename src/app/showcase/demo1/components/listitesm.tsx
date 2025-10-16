"use client";
import { useState } from "react";
import { useCart } from "./store/cartContext";
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const { cart, removeFromCart } = useCart();
  const [open, setOpen] = useState(false);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md relative">
      <h1 className="font-bold text-xl">فروشگاه من</h1>

      <div className="relative">
        <button onClick={() => setOpen(!open)} className="relative">
          <ShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg p-4 z-50">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-sm">سبد خرید خالی است</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-3"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="object-contain rounded"
                      />
                      <div className="flex flex-col">
                        <span className="text-gray-800">{item.name}</span>
                        <span className="text-gray-500 text-sm">
                          {item.quantity}x
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700">
                        {(item.price * item.quantity).toLocaleString("fa-IR")}{" "}
                        تومان
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-gray-800">
                  <span>مجموع:</span>
                  <span>{totalPrice.toLocaleString("fa-IR")} تومان</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
