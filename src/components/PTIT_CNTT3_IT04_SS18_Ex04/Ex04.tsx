import React, { useState } from "react";

export default function Ex04() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateName = (value: string) => {
        if (!value.trim()) {
            setNameError("Trường này là bắt buộc");
        } else {
            setNameError("");
        }
    };

    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@domain\.com$/;
        if (!value.trim()) {
            setEmailError("Trường này là bắt buộc");
        } else if (!emailRegex.test(value)) {
            setEmailError("Email không hợp lệ");
        } else {
            setEmailError("");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        validateName(name);
        validateEmail(email);

        if (name && email && !nameError && !emailError) {
            alert("Gửi thành công!");
        }
    };

    const isFormValid = name && email && !nameError && !emailError;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>📝 Đăng ký thông tin</h1>
                <div>
                    <label>Họ tên</label>
                    <br />
                    <input
                        type="text"
                        placeholder="Nhập họ tên"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            validateName(e.target.value);
                        }}
                    />
                    {nameError && <p style={{ color: "red" }}>{nameError}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <br />
                    <input
                        type="text"
                        placeholder="example@domain.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            validateEmail(e.target.value);
                        }}
                    />
                    {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                </div>
                <button type="submit" disabled={!isFormValid}>
                    Gửi
                </button>
            </form>
        </div>
    );
}
