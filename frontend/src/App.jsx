import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
// import { PrimeReactProvider } from 'primereact/api';
import Home from './components/home/Home.jsx';
import Layout from './components/layout/Layout.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import ExpenseList from './components/expense/ExpenseList.jsx';
import IncomeList from './components/income/IncomeList.jsx';
import Calendar from './components/calender/Calender.jsx';
import AppSettings from './components/settings/AppSettings.jsx';
import Profile from './components/profile/Profile.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';

function App() {
  return (
    // <PrimeReactProvider>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expense" element={<ExpenseList />} />
        <Route path="/income" element={<IncomeList />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<AppSettings />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  </Router>
    // </PrimeReactProvider>
  );
}

export default App;