'use client';

import { Search, Bell, Menu } from 'lucide-react';

interface HeaderProps {
  user: {
    name: string;
    email: string;
  } | null;
  onMenuClick: () => void;
}

export default function Header({ user, onMenuClick }: HeaderProps) {
  if (!user) return null;

  return (
    <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="hidden sm:flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-full w-64 md:w-96 border border-slate-200">
          <Search className="w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search patients..." 
            className="bg-transparent border-none outline-none text-sm w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-slate-400 hover:text-blue-600 transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-800">{user.name}</p>
            <p className="text-xs text-slate-500 font-medium capitalize">Administrator</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
            {user.name.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
}
