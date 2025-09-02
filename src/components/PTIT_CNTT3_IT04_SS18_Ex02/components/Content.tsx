import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Content() {
    const { theme } = useContext(ThemeContext);

    return (
        <main
            style={{
                padding: "20px",
                background: theme === "light" ? "#fff" : "#111",
                color: theme === "light" ? "#000" : "#fff",
            }}
        >
            <p>Đây là nội dung chính.</p>
        </main>
    );
}
