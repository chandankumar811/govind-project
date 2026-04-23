'use client';

import { Clock, User, ArrowRight, Calendar } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

const doctors = [
  { id: 1, name: 'Dr. Sarah Smith', specialty: 'Cardiology', shift: 'Morning', hours: '08:00 AM - 02:00 PM', availability: 'Mon, Wed, Fri' },
  { id: 2, name: 'Dr. Raj Patel', specialty: 'Neurology', shift: 'Afternoon', hours: '02:00 PM - 08:00 PM', availability: 'Tue, Thu, Sat' },
  { id: 3, name: 'Dr. Emma Lee', specialty: 'Pediatrics', shift: 'Full-Day', hours: '09:00 AM - 05:00 PM', availability: 'Mon, Tue, Thu' },
  { id: 4, name: 'Dr. James Miller', specialty: 'Orthopedics', shift: 'Night', hours: '08:00 PM - 04:00 AM', availability: 'Wed, Fri, Sun' },
];

export default function SchedulesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Staff Schedules</h1>
          <p className="text-slate-500 font-medium">Coordinate shifts and weekly availability for hospital staff.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScheduleCard title="Morning Shift" count="12 Doctors" color="bg-blue-500" />
          <ScheduleCard title="Afternoon Shift" count="8 Doctors" color="bg-amber-500" />
          <ScheduleCard title="Night Shift" count="5 Doctors" color="bg-indigo-600" />
          <ScheduleCard title="On Call" count="3 Specialists" color="bg-rose-500" />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Weekly Staff Roster</h3>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button className="px-3 py-1.5 text-xs font-bold rounded-md bg-white shadow-sm text-blue-600">List View</button>
              <button className="px-3 py-1.5 text-xs font-bold rounded-md text-slate-500 hover:text-slate-700">Grid View</button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 text-slate-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Doctor Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Specialty</th>
                  <th className="px-6 py-4 text-left font-semibold">Shift Timing</th>
                  <th className="px-6 py-4 text-left font-semibold">Working Days</th>
                  <th className="px-6 py-4 text-right font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {doctors.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-400" />
                      </div>
                      <span className="font-bold text-slate-800">{doc.name}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{doc.specialty}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-700 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" /> {doc.hours}
                        </span>
                        <span className="text-[10px] text-slate-400">{doc.shift} Shift</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" /> {doc.availability}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">Active</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
            <button className="text-blue-600 text-xs font-bold flex items-center gap-2 mx-auto hover:underline">
              Manage All Staff Schedules <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function ScheduleCard({ title, count, color }: { title: string, count: string, color: string }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${color}`} />
      <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">{title}</h3>
      <p className="text-xl font-bold text-slate-800 mt-2">{count}</p>
      <div className="mt-4 flex justify-end">
        <div className={`p-2 rounded-lg ${color.replace('bg-', 'bg-')}/10 text-${color.split('-')[1]}-600 group-hover:scale-110 transition-transform`}>
          <Clock className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
