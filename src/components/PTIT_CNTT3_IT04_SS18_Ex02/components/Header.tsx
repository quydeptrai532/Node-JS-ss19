import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header
            style={{
                padding: "10px",
                background: theme === "light" ? "#eee" : "#333",
                color: theme === "light" ? "#000" : "#fff",
            }}
        >
            <h1>My App</h1>
            <button onClick={toggleTheme}>Đổi theme</button>
        </header>
    );
}
