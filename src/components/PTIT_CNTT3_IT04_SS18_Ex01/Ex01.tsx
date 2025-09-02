import React, { useMemo } from "react";

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

export default function ExShoppingCart() {
    const cartItems: CartItem[] = [
        { id: 1, name: "Áo thun", price: 120000, quantity: 2 },
        { id: 2, name: "Quần jean", price: 350000, quantity: 1 },
        { id: 3, name: "Giày sneaker", price: 500000, quantity: 1 },
    ];

    const total = useMemo(() => {
        console.log("Recalculating total...");
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [cartItems]);

    return (
        <div style={{ padding: "20px", maxWidth: "400px" }}>
            <h2>Giỏ hàng</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price.toLocaleString()}₫ × {item.quantity} ={" "}
                        {(item.price * item.quantity).toLocaleString()}₫
                    </li>
                ))}
            </ul>
            <h3>Tổng cộng: {total.toLocaleString()}₫</h3>
        </div>
    );
}
