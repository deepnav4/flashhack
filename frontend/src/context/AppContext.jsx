import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import ExpenseList from './components/expense/ExpenseList';
import IncomeList from './components/income/IncomeList';
import Calendar from './components/calendar/Calendar';
import AppSettings from './components/settings/AppSettings';
import Profile from './components/profile/Profile';

// Import styles
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import './assets/styles/main.css';

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="expense" element={<ExpenseList />} />
            <Route path="income" element={<IncomeList />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="settings" element={<AppSettings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
