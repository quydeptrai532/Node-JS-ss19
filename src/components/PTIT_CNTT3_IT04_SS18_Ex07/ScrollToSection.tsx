import React, { useRef } from "react";

export default function ScrollToSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            {/* Nút ở đầu trang */}
            <div style={{ position: "fixed", top: "10px", left: "10px", zIndex: 10 }}>
                <button onClick={handleScroll} style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Đi tới phần nội dung
                </button>
            </div>

            {/* Nội dung giả lập */}
            <div style={{ padding: "20px" }}>
                <h1>Trang Demo Cuộn</h1>
                {[...Array(15)].map((_, i) => (
                    <p key={i}>
                        Đây là đoạn văn bản số {i + 1}. Nội dung chỉ để giả lập chiều dài trang.
                    </p>
                ))}

                {/* Mục tiêu */}
                <div
                    ref={sectionRef}
                    style={{
                        marginTop: "100px",
                        padding: "50px",
                        background: "#f0f0f0",
                        textAlign: "center",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    🎯 Đây là phần nội dung mục tiêu
                </div>

                {[...Array(10)].map((_, i) => (
                    <p key={i}>Nội dung phía dưới {i + 1}</p>
                ))}
            </div>
        </div>
    );
}
