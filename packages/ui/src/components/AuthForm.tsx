import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";

const API_URL = "http://localhost:5000/api";

export default function AuthForm() {
    const location = useLocation();
    const isLogin = location.pathname === "/login";
    
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            const endpoint = isLogin ? `${API_URL}/login` : `${API_URL}/register`;
            const response = await axios.post(endpoint, formData);
            console.log("Success:", response.data);
        } catch (err) {
            setError("Bir hata oluştu. Lütfen tekrar deneyin.");
        }
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{ mt: 8, textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>
                    {isLogin ? "Giriş Yap" : "Kayıt Ol"}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        fullWidth 
                        margin="normal" 
                        label="Email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <TextField 
                        fullWidth 
                        margin="normal" 
                        label="Şifre" 
                        name="password" 
                        type="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                    {error && <Typography color="error">{error}</Typography>}
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                        {isLogin ? "Giriş Yap" : "Kayıt Ol"}
                    </Button>
                </form>
            </Box>
        </Container>
    );
}
