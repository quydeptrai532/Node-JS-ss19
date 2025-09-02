import React, { useReducer, useState } from "react";

// Định nghĩa state
type State = {
    loading: boolean;
    success: boolean;
    error: string | null;
};

// Định nghĩa action
type Action =
    | { type: "LOGIN_START" }
    | { type: "LOGIN_SUCCESS" }
    | { type: "LOGIN_ERROR"; payload: string };

// Reducer function
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "LOGIN_START":
            return { loading: true, success: false, error: null };
        case "LOGIN_SUCCESS":
            return { loading: false, success: true, error: null };
        case "LOGIN_ERROR":
            return { loading: false, success: false, error: action.payload };
        default:
            return state;
    }
};

export default function Ex08() {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        success: false,
        error: null,
    });

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });


        setTimeout(() => {
            if (username === "admin" && password === "123") {
                dispatch({ type: "LOGIN_SUCCESS" });
            } else {
                dispatch({ type: "LOGIN_ERROR", payload: "Sai tài khoản hoặc mật khẩu!" });
            }
        }, 1500);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
            <h1>🔐 Đăng nhập</h1>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        placeholder="Tên đăng nhập"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: "100%", padding: "10px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", padding: "10px" }}
                    />
                </div>
                <button type="submit" disabled={state.loading} style={{ padding: "10px 20px" }}>
                    {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
                </button>
            </form>


            {state.success && <p style={{ color: "green" }}>✅ Đăng nhập thành công!</p>}
            {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        </div>
    );
}
