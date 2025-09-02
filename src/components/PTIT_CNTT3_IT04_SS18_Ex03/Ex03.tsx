import React, { useRef, useState, useEffect } from 'react'

export default function Ex03() {
    const [input, setInputValue] = useState("")
    const a = useRef(0)
    useEffect(() => {
        console.log(a.current);

        a.current = a.current + 1;
    });
    return (
        <div>
            <h1>🔢Component Render Counter</h1>
            <input type="text" value={input} onChange={(e) => setInputValue(e.target.value)} />
            <h2>Component đã render:{a.current} lần</h2>
        </div>
    )
}
