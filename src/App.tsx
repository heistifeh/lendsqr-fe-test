import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Users from "./components/pages/Users";


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
           <Route path="/customers/users" element={<Users />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
