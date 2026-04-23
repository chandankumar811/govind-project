'use client';

import { Search, UserPlus, MoreVertical, Filter } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

const patients = [
  { id: 'P001', name: 'Sarah Johnson', age: 34, gender: 'Female', phone: '555-0101', lastVisit: '2026-04-12', status: 'Healthy' },
  { id: 'P002', name: 'Michael Chen', age: 45, gender: 'Male', phone: '555-0102', lastVisit: '2026-04-20', status: 'Recovering' },
  { id: 'P003', name: 'Emma Wilson', age: 28, gender: 'Female', phone: '555-0103', lastVisit: '2026-04-18', status: 'Under Observation' },
  { id: 'P004', name: 'James Miller', age: 52, gender: 'Male', phone: '555-0104', lastVisit: '2026-04-23', status: 'Healthy' },
  { id: 'P005', name: 'Robert Davis', age: 39, gender: 'Male', phone: '555-0105', lastVisit: '2026-03-28', status: 'Pending Test' },
  { id: 'P006', name: 'Emily Brown', age: 31, gender: 'Female', phone: '555-0106', lastVisit: '2026-04-05', status: 'Healthy' },
];

export default function PatientsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Patients Database</h1>
            <p className="text-slate-500 font-medium">Manage and view all registered patients.</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all active:scale-95">
            <UserPlus className="w-5 h-5" />
            Add New Patient
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 flex-1 max-w-md">
              <Search className="w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by name, ID or phone..." 
                className="bg-transparent border-none outline-none text-sm w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm font-semibold">
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <div className="text-sm font-medium text-slate-500">
                Showing <span className="text-slate-800 font-bold">6</span> patients
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 text-slate-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Patient ID</th>
                  <th className="px-6 py-4 text-left font-semibold">Full Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Age / Gender</th>
                  <th className="px-6 py-4 text-left font-semibold">Phone Number</th>
                  <th className="px-6 py-4 text-left font-semibold">Last Visit</th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                  <th className="px-6 py-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {patients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{patient.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-800">{patient.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-600">{patient.age}y / {patient.gender}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 font-medium italic">
                      {patient.phone}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {patient.lastVisit}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        patient.status === 'Healthy' ? 'bg-emerald-100 text-emerald-600' :
                        patient.status === 'Recovering' ? 'bg-blue-100 text-blue-600' :
                        patient.status === 'Under Observation' ? 'bg-amber-100 text-amber-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-600 group-hover:bg-slate-100 p-1 rounded-md transition-all">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <button className="text-sm font-bold text-slate-400 cursor-not-allowed">Previous</button>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-md">1</button>
              <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-100">2</button>
              <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-100">3</button>
            </div>
            <button className="text-sm font-bold text-blue-600 hover:underline">Next</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
