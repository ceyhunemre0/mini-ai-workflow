import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AuthForm from "./components/AuthForm";

const theme = createTheme({
    palette: {
        mode: "light",
    },
});
  
function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/login" element={<AuthForm />} />
                    <Route path="/register" element={<AuthForm />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
