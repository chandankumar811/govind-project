'use client';

import { 
  Users, 
  Calendar, 
  Clock, 
  TrendingUp,
  UserPlus,
  ChevronRight,
  Activity
} from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

const stats = [
  { name: 'Total Patients', value: '1,284', icon: Users, color: 'bg-blue-500', trend: '+12%' },
  { name: 'Appointments', value: '42', icon: Calendar, color: 'bg-emerald-500', trend: '+5%' },
  { name: 'Average Wait', value: '18 min', icon: Clock, color: 'bg-amber-500', trend: '-2%' },
  { name: 'Success Rate', value: '98%', icon: TrendingUp, color: 'bg-purple-500', trend: '+1%' },
];

const recentAppointments = [
  { id: 1, patient: 'Sarah Johnson', doctor: 'Dr. Smith', time: '10:30 AM', status: 'Confirmed' },
  { id: 2, patient: 'Michael Chen', doctor: 'Dr. Patel', time: '11:15 AM', status: 'Pending' },
  { id: 3, patient: 'Emma Wilson', doctor: 'Dr. Lee', time: '02:00 PM', status: 'In Progress' },
  { id: 4, patient: 'James Miller', doctor: 'Dr. Smith', time: '04:30 PM', status: 'Scheduled' },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Hospital Overview</h2>
            <p className="text-slate-500 font-medium">Hello there, here's what's happening today.</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-600/20 flex items-center gap-2 transition-all active:scale-95">
            <UserPlus className="w-5 h-5" />
            New Patient
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-xl shadow-lg shadow-${stat.color.split('-')[1]}-500/20`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium">{stat.name}</h3>
              <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Appointments */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800">Todays Appointments</h3>
              <button className="text-blue-600 text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 text-slate-400 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Patient Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Doctor</th>
                    <th className="px-6 py-4 text-left font-semibold">Time</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                    <th className="px-6 py-4 text-right font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentAppointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold text-slate-800">{apt.patient}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600">{apt.doctor}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                        {apt.time}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          apt.status === 'Confirmed' ? 'bg-blue-100 text-blue-600' :
                          apt.status === 'Pending' ? 'bg-amber-100 text-amber-600' :
                          apt.status === 'In Progress' ? 'bg-purple-100 text-purple-600' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {apt.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-blue-600">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions / Activity */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-6">System Health</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-bold text-slate-800">Server Capacity</span>
                    <span className="text-sm text-slate-500">65%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-[65%] rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-bold text-slate-800">New Enrollments</span>
                    <span className="text-sm text-slate-500">82%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full w-[82%] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white overflow-hidden relative shadow-xl shadow-blue-600/20">
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-2">Upgrade System</h4>
                  <p className="text-blue-100 text-sm mb-4">Unlock advanced analytics and AI diagnostic tools.</p>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors">
                    Learn More
                  </button>
                </div>
                <Activity className="absolute -bottom-4 -right-4 w-24 h-24 text-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
