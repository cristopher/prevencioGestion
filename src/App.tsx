/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginScreen } from './components/LoginScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { AuthorizationSelectionScreen } from './components/AuthorizationSelectionScreen';
import { MachineryEntryScreen } from './components/MachineryEntryScreen';
import { MachineryListScreen } from './components/MachineryListScreen';
import { PersonnelEntryScreen } from './components/PersonnelEntryScreen';
import { ToolEntryScreen } from './components/ToolEntryScreen';
import { ToolsListScreen } from './components/ToolsListScreen';
import { WorkersListScreen } from './components/WorkersListScreen';
import { RiskRegistryScreen } from './components/RiskRegistryScreen';
import { SecurityTalksScreen } from './components/SecurityTalksScreen';

export default function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/prevencioGestion' : '';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/authorization" element={<AuthorizationSelectionScreen />} />
        <Route path="/machinery-entry" element={<MachineryEntryScreen />} />
        <Route path="/machinery" element={<MachineryListScreen />} />
        <Route path="/personnel-entry" element={<PersonnelEntryScreen />} />
        <Route path="/tool-entry" element={<ToolEntryScreen />} />
        <Route path="/tools" element={<ToolsListScreen />} />
        <Route path="/workers" element={<WorkersListScreen />} />
        <Route path="/risks" element={<RiskRegistryScreen />} />
        <Route path="/talks" element={<SecurityTalksScreen />} />
        
        {/* Placeholder routes */}
        <Route path="/reports" element={<DashboardScreen />} />
        <Route path="/export" element={<DashboardScreen />} />
        <Route path="/settings" element={<DashboardScreen />} />
        
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

