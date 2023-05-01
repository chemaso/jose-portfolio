import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteWrapper from './components/SiteWrapper';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorksPage from './pages/WorksPage';
import WorkPage from './pages/WorkPage';
import AppThemeProvider from './components/AppProvider';
import './styles/global.scss';

export default function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteWrapper />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="work/:id" element={<WorkPage />} />
            <Route path="work" element={<WorksPage />} />
            <Route path="*" element={<div />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  );
}
