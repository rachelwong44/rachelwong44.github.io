'use client';

import { createContext, useContext, useMemo, useState } from 'react';

export type PanelId = 'home' | 'experience' | 'projects' | 'skills' | 'education' | 'contact';

type PanelStateValue = {
  active: PanelId;
  setActive: (panel: PanelId) => void;
};

const PanelStateContext = createContext<PanelStateValue | null>(null);

export function PanelStateProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<PanelId>('home');

  const value = useMemo(() => ({ active, setActive }), [active]);
  return <PanelStateContext.Provider value={value}>{children}</PanelStateContext.Provider>;
}

export function usePanelState() {
  const ctx = useContext(PanelStateContext);
  if (!ctx) throw new Error('usePanelState must be used within PanelStateProvider');
  return ctx;
}

