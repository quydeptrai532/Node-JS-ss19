import React, { useEffect, useState } from "react";

export default function Ex06() {
    const [lastKey, setLastKey] = useState("");

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setLastKey(e.key);
        };

        window.addEventListener("keydown", handleKeyDown);

        // cleanup khi component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "80px",
                fontWeight: "bold"
            }}
        >
            {lastKey || "Nhấn phím bất kỳ..."}
        </div>
    );
}
