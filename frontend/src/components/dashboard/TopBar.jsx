import React from 'react';
import { Link } from 'react-router-dom';
import Bell from 'lucide-react/dist/esm/icons/bell.js';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down.js';
import Menu from 'lucide-react/dist/esm/icons/menu.js';
import Search from 'lucide-react/dist/esm/icons/search.js';
import Settings from 'lucide-react/dist/esm/icons/settings.js';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.js';
import { Button } from '@/components/ui/button';

export function TopBar({ user, onSidebarToggle }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-slate-200 bg-white/95 backdrop-blur-lg shadow-sm">
      <div className="flex h-full items-center justify-between gap-3 px-4 md:px-6">
        <div className="flex min-w-0 items-center gap-3 md:gap-4">
          <button
            type="button"
            aria-label="Open sidebar"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
            onClick={onSidebarToggle}
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/dashboard" className="flex min-w-0 items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm">
            <span>Alumni Sangham</span>
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-center px-4 md:flex">
          <div className="flex w-full max-w-4xl items-center justify-center gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white px-2 py-1 shadow-sm scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-white">
            {['Networking', 'Posts & Jobs', 'Hall of Fame', 'Write Article', 'My Requests'].map((item) => (
              <button
                key={item}
                className={`min-w-max rounded-full px-3 py-1 text-xs font-semibold transition ${item === 'Networking'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
                  }`}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#7c63ff] shadow-[0_0_10px_rgba(124,99,255,0.45)]" />
          </button>

          <button
            type="button"
            className="hidden h-10 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 transition hover:bg-slate-50 md:inline-flex"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </button>

          <Button className="h-10 rounded-2xl border-0 bg-gradient-to-r from-[#7E8BFF] to-[#4B65FF] px-5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(81,89,235,0.35)] hover:from-[#8f97ff] hover:to-[#5a78ff]">
            Deposit
          </Button>
        </div>
      </div>
    </header>
  );
}
