'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Activity, 
  Users, 
  Calendar, 
  Clock, 
  Bell, 
  LogOut 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col h-screen transition-transform duration-300 lg:translate-x-0 lg:static lg:block
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="p-6 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">E-Health</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <NavItem icon={Activity} label="Dashboard" href="/" active={pathname === '/'} onClick={() => setOpen(false)} />
        <NavItem icon={Users} label="Patients" href="/patients" active={pathname === '/patients'} onClick={() => setOpen(false)} />
        <NavItem icon={Calendar} label="Appointments" href="/appointments" active={pathname === '/appointments'} onClick={() => setOpen(false)} />
        <NavItem icon={Clock} label="Schedules" href="/schedules" active={pathname === '/schedules'} onClick={() => setOpen(false)} />
        <NavItem icon={Bell} label="Notifications" href="/notifications" active={pathname === '/notifications'} onClick={() => setOpen(false)} />
      </nav>

      <div className="p-4 border-t border-slate-100">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all font-medium"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}

function NavItem({ icon: Icon, label, href, active = false, onClick }: { icon: any, label: string, href: string, active?: boolean, onClick?: () => void }) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 w-full rounded-xl transition-all font-medium ${
        active 
          ? 'bg-blue-50 text-blue-600 shadow-sm shadow-blue-600/5' 
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </Link>
  );
}
