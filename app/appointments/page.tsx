'use client';

import { Calendar as CalendarIcon, Filter, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

const appointments = [
  { id: 1, patient: 'Sarah Johnson', email: 'sarah.j@example.com', doctor: 'Dr. Smith', date: '2026-04-24', time: '10:30 AM', type: 'Checkup', status: 'Approved' },
  { id: 2, patient: 'Michael Chen', email: 'm.chen@example.com', doctor: 'Dr. Patel', date: '2026-04-24', time: '11:15 AM', type: 'Surgeory', status: 'Pending' },
  { id: 3, patient: 'Emma Wilson', email: 'emma.w@example.com', doctor: 'Dr. Lee', date: '2026-04-24', time: '02:00 PM', type: 'Consultation', status: 'In Progress' },
  { id: 4, patient: 'James Miller', email: 'james.m@example.com', doctor: 'Dr. Smith', date: '2026-04-25', time: '09:00 AM', type: 'Follow-up', status: 'Scheduled' },
  { id: 5, patient: 'Olivia Garcia', email: 'olivia.g@example.com', doctor: 'Dr. Patel', date: '2026-04-25', time: '01:30 PM', type: 'Checkup', status: 'Scheduled' },
];

export default function AppointmentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Appointment Scheduler</h1>
            <p className="text-slate-500 font-medium">Coordinate and manage patient visits.</p>
          </div>
          <div className="flex items-center gap-3">
             <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-semibold shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Calendar View
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all active:scale-95">
              <Plus className="w-5 h-5" />
              Book Appointment
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
           <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-blue-600" />
                  April 2026
                </h3>
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={i} className="font-bold text-slate-400 py-1">{d}</div>)}
                  {Array.from({length: 30}, (_, i) => (
                    <div key={i} className={`py-2 rounded-lg cursor-pointer transition-colors ${i + 1 === 24 ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-100 text-slate-600'}`}>
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                  <button className="text-sm font-bold text-blue-600 hover:underline">View Full Calendar</button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-2xl text-white shadow-xl">
                 <h4 className="font-bold mb-2">Doctor's Note</h4>
                 <p className="text-sm text-indigo-100 opacity-90 leading-relaxed">
                   Please ensure all patients for Dr. Smith are notified of the clinic relocation before their Friday appointments.
                 </p>
                 <button className="mt-4 w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl py-2 text-sm font-bold transition-all">
                   Dismiss
                 </button>
              </div>
           </div>

           <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 border border-slate-200 rounded-lg p-1 bg-slate-50">
                        <button className="p-1 hover:bg-white rounded transition-colors"><ChevronLeft className="w-4 h-4 text-slate-500" /></button>
                        <span className="text-xs font-bold text-slate-700 px-2">Apr 24, 2026</span>
                        <button className="p-1 hover:bg-white rounded transition-colors"><ChevronRight className="w-4 h-4 text-slate-500" /></button>
                      </div>
                      <span className="text-sm font-bold text-slate-800">Friday</span>
                   </div>
                   <button className="text-slate-500 hover:text-blue-600"><Filter className="w-5 h-5" /></button>
                </div>

                <div className="divide-y divide-slate-100">
                  {appointments.map((apt) => (
                    <div key={apt.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-all group">
                       <div className="flex items-center gap-6">
                          <div className="flex flex-col items-center justify-center bg-slate-100 w-20 py-2 rounded-xl border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                            <span className="text-xs font-bold text-slate-400 group-hover:text-blue-400">TIME</span>
                            <span className="text-sm font-bold text-slate-800 group-hover:text-blue-800">{apt.time.split(' ')[0]}</span>
                            <span className="text-[10px] font-bold text-slate-500">{apt.time.split(' ')[1]}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 text-lg">{apt.patient}</h4>
                            <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                               <span className="flex items-center gap-1 font-medium"><CalendarIcon className="w-4 h-4" /> {apt.type}</span>
                               <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                               <span className="font-medium">{apt.doctor}</span>
                            </div>
                          </div>
                       </div>
                       <div className="flex items-center gap-6">
                          <span className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-sm ${
                            apt.status === 'Approved' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                            apt.status === 'Pending' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                            apt.status === 'In Progress' ? 'bg-purple-50 text-purple-600 border border-purple-100' :
                            'bg-slate-50 text-slate-600 border border-slate-100'
                          }`}>
                            {apt.status}
                          </span>
                          <button className="bg-slate-100 p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all opacity-0 group-hover:opacity-100">
                             <ChevronRight className="w-6 h-6" />
                          </button>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 p-6 flex items-center justify-center">
                   <button className="text-blue-600 font-bold hover:underline py-2">Load More Appointments</button>
                </div>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
