import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 120 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="cabins" element={<Cabins />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="bookings" element={<Bookings />}></Route>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="account" element={<Account />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
