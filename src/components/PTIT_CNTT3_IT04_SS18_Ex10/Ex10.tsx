import React, { memo, useCallback, useMemo, useState } from "react";

type RowProps = {
    index: number;
    selected: boolean;
    onSelect: (index: number) => void;
};

const Row = memo<RowProps>(
    ({ index, selected, onSelect }) => {
        console.log("render row:", index, "selected:", selected);

        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 12px",
                    marginBottom: 6,
                    borderRadius: 8,
                    border: "1px solid #ddd",
                    background: selected ? "#e6f4ff" : "#fff",
                    transition: "background 0.2s ease",
                }}
            >
                <span style={{ fontWeight: 600 }}>Item #{index}</span>
                <button onClick={() => onSelect(index)}>
                    {selected ? "Đang chọn" : "Chọn"}
                </button>
            </div>
        );
    },
    (prev, next) => prev.selected === next.selected
);

export default function Ex10() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleSelect = useCallback((idx: number) => {
        setSelectedIndex(idx);
    }, []);

    const items = useMemo(() => Array.from({ length: 100 }, (_, i) => i), []);

    return (
        <div style={{ maxWidth: 520, margin: "40px auto", fontFamily: "sans-serif" }}>
            <h2 style={{ textAlign: "center", marginBottom: 16 }}>Danh sách 100 item</h2>
            {items.map((i) => (
                <Row
                    key={i}
                    index={i}
                    selected={selectedIndex === i}
                    onSelect={handleSelect}
                />
            ))}
        </div>
    );
}
