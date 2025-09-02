import React, { useState } from "react";

export default function RandomQuote() {
    const quotes = [
        "Học, học nữa, học mãi.",
        "Thất bại là mẹ thành công.",
        "Không gì là không thể.",
        "Kiến tha lâu đầy tổ.",
        "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
    ];

    const [quote, setQuote] = useState("");

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>✨ Random Quote ✨</h1>
            <p style={{ fontSize: "20px", fontStyle: "italic", minHeight: "50px" }}>
                {quote || "Nhấn nút để lấy câu nói"}
            </p>
            <button onClick={getRandomQuote} style={{ padding: "10px 20px", cursor: "pointer" }}>
                Lấy câu nói mới
            </button>
        </div>
    );
}
