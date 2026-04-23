'use client';

import { Bell, Info, AlertTriangle, CheckCircle, Clock, Trash2, CheckSquare } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

const notifications = [
  { id: 1, type: 'info', title: 'New System Update', message: 'Version 2.0 has been deployed with improved Atlas synchronization.', time: '2 mins ago', read: false },
  { id: 2, type: 'warning', title: 'Low Server Capacity', message: 'Cloud storage usage is at 85%. Consider upgrading your plan.', time: '45 mins ago', read: false },
  { id: 3, type: 'success', title: 'Appointment Confirmed', message: 'Sarah Johnson confirmed her visit for Dr. Smith tomorrow at 10:30 AM.', time: '2 hours ago', read: true },
  { id: 4, type: 'info', title: 'Patient Record Updated', message: 'Michael Chen\'s lab results have been uploaded to the system.', time: '1 day ago', read: true },
  { id: 5, type: 'error', title: 'Payment Failed', message: 'Subscription auto-renewal failed. Please check your billing details.', time: '2 days ago', read: true },
];

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Notifications Center</h1>
            <p className="text-slate-500 font-medium">Keep track of system alerts and patient activities.</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 p-2.5 rounded-xl transition-all" title="Mark all as read">
              <CheckSquare className="w-5 h-5" />
            </button>
            <button className="bg-red-50 hover:bg-red-100 text-red-500 p-2.5 rounded-xl transition-all" title="Clear All">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {notifications.map((notif) => (
            <div key={notif.id} className={`p-5 rounded-2xl border transition-all ${
              notif.read ? 'bg-white border-slate-200 opacity-70 hover:opacity-100' : 'bg-white border-blue-200 shadow-sm ring-1 ring-blue-50 ring-offset-0'
            }`}>
              <div className="flex gap-5">
                 <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${
                   notif.type === 'info' ? 'bg-blue-100 text-blue-600' :
                   notif.type === 'warning' ? 'bg-amber-100 text-amber-600' :
                   notif.type === 'success' ? 'bg-emerald-100 text-emerald-600' :
                   notif.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'
                 }`}>
                    {notif.type === 'info' && <Info className="w-6 h-6" />}
                    {notif.type === 'warning' && <AlertTriangle className="w-6 h-6" />}
                    {notif.type === 'success' && <CheckCircle className="w-6 h-6" />}
                    {notif.type === 'error' && <AlertTriangle className="w-6 h-6" />}
                 </div>
                 
                 <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                       <h3 className={`font-bold ${notif.read ? 'text-slate-700' : 'text-slate-800'}`}>{notif.title}</h3>
                       <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                         <Clock className="w-3 h-3" /> {notif.time}
                       </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{notif.message}</p>
                    {!notif.read && (
                       <div className="mt-3 flex items-center gap-3">
                          <button className="text-blue-600 text-xs font-bold hover:underline">Mark as Read</button>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <button className="text-slate-400 text-xs font-bold hover:text-slate-600 transition-colors">Dismiss</button>
                       </div>
                    )}
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-100/50 rounded-2xl p-8 text-center border-2 border-dashed border-slate-200">
           <Bell className="w-12 h-12 text-slate-300 mx-auto mb-4" />
           <h4 className="font-bold text-slate-500">No more notifications</h4>
           <p className="text-xs text-slate-400 mt-1">You're all caught up for today!</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
