
import { BarChart as BarChartIcon, Calendar, DollarSign, Settings, TrendingUp, Users } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { PageTransition } from "../../components/layout/PageTransition";
import { Button } from "../../components/ui/button";
import { GlassContainer } from "../../components/ui/glass-container";

const data = [
  { name: 'Mon', revenue: 4000, bookings: 24 },
  { name: 'Tue', revenue: 3000, bookings: 18 },
  { name: 'Wed', revenue: 2000, bookings: 12 },
  { name: 'Thu', revenue: 2780, bookings: 20 },
  { name: 'Fri', revenue: 5890, bookings: 35 },
  { name: 'Sat', revenue: 8390, bookings: 50 },
  { name: 'Sun', revenue: 6490, bookings: 42 },
];

export function AdminDashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-24 gap-6">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col sticky top-24 h-[calc(100vh-7rem)] z-40 rounded-3xl border border-white/20 bg-white/25 backdrop-blur-xl shadow-lg overflow-hidden shrink-0 dark:bg-black/30 dark:border-white/10">
         <div className="h-14 flex items-center px-6 border-b border-white/10 font-bold text-lg text-primary">
            Admin Panel
         </div>
         <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
            <Button variant="secondary" className="w-full justify-start rounded-xl cursor-pointer shadow-sm bg-white/50 hover:bg-white/70 border-0"><BarChartIcon className="mr-2 w-4 h-4"/> Overview</Button>
            <Button variant="ghost" className="w-full justify-start rounded-xl cursor-pointer hover:bg-white/30"><Calendar className="mr-2 w-4 h-4"/> Bookings</Button>
            <Button variant="ghost" className="w-full justify-start rounded-xl cursor-pointer hover:bg-white/30"><Users className="mr-2 w-4 h-4"/> Customers</Button>
            <Button variant="ghost" className="w-full justify-start rounded-xl cursor-pointer hover:bg-white/30"><DollarSign className="mr-2 w-4 h-4"/> Finance</Button>
            <Button variant="ghost" className="w-full justify-start"><Settings className="mr-2 w-4 h-4"/> Settings</Button>
         </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 pt-0">
        <PageTransition>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Dashboard Overview</h1>
                <div className="flex gap-2">
                   <Button variant="outline">Download Report</Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <GlassContainer className="p-6 flex flex-col justify-between shadow-sm border-0 bg-card/60">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-green-500/10 rounded-full text-green-600"><DollarSign className="w-6 h-6"/></div>
                        <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">+20.1% ↗</span>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground font-medium">Total Revenue</p>
                        <h3 className="text-3xl font-bold mt-1 text-foreground shadow-sm">₹45,231</h3>
                    </div>
                </GlassContainer>

                <GlassContainer className="p-6 flex flex-col justify-between shadow-sm border-0 bg-card/60">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-blue-500/10 rounded-full text-blue-600"><Calendar className="w-6 h-6"/></div>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">+15.3% ↗</span>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground font-medium">Total Bookings</p>
                        <h3 className="text-3xl font-bold mt-1 text-foreground shadow-sm">1,240</h3>
                    </div>
                </GlassContainer>

                <GlassContainer className="p-6 flex flex-col justify-between shadow-sm border-0 bg-card/60">
                     <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-purple-500/10 rounded-full text-purple-600"><Users className="w-6 h-6"/></div>
                        <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">+12.5% ↗</span>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground font-medium">Active Customers</p>
                        <h3 className="text-3xl font-bold mt-1 text-foreground shadow-sm">850</h3>
                    </div>
                </GlassContainer>

                <GlassContainer className="p-6 flex flex-col justify-between shadow-sm border-0 bg-card/60">
                     <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-orange-500/10 rounded-full text-orange-600"><TrendingUp className="w-6 h-6"/></div>
                        <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-full">Daily</span>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground font-medium">Avg. Daily Sales</p>
                        <h3 className="text-3xl font-bold mt-1 text-foreground shadow-sm">₹1,240</h3>
                    </div>
                </GlassContainer>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <GlassContainer className="p-6 shadow-sm border-0 bg-card/60">
                    <h3 className="font-bold text-lg mb-6">Revenue Overview</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                             <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} tickFormatter={(value) => `₹${value}`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                                    formatter={(value) => [`₹${value}`, 'Revenue']}
                                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </GlassContainer>

                <GlassContainer className="p-6 shadow-sm border-0 bg-card/60">
                    <h3 className="font-bold text-lg mb-6">Bookings Activity</h3>
                    <div className="h-[300px] w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} />
                                <Tooltip
                                    cursor={{fill: 'transparent'}}
                                    contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                                />
                                <Bar dataKey="bookings" fill="#82ca9d" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </GlassContainer>
            </div>

            {/* Recent Bookings Table */}
            <GlassContainer className="p-0 overflow-hidden shadow-sm border-0 bg-card/60">
                 <div className="p-6 pb-4">
                     <h3 className="font-bold text-lg">Recent Bookings</h3>
                 </div>
                 <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left">
                         <thead className="bg-muted/50 text-muted-foreground font-medium uppercase text-xs">
                             <tr>
                                 <th className="px-6 py-4">Customer</th>
                                 <th className="px-6 py-4">Service</th>
                                 <th className="px-6 py-4">Date</th>
                                 <th className="px-6 py-4">Status</th>
                                 <th className="px-6 py-4 text-right">Total</th>
                             </tr>
                         </thead>
                         <tbody className="divide-y divide-border/50">
                             {[
                                 { customer: "Alice Myers", service: "Luxury Facial", date: "Oct 24, 2026", status: "Confirmed", price: "₹90.00" },
                                 { customer: "John Doe", service: "Haircut & Styling", date: "Oct 24, 2026", status: "Pending", price: "₹65.00" },
                                 { customer: "Emma Wilson", service: "Manicure", date: "Oct 23, 2026", status: "Completed", price: "₹55.00" },
                                 { customer: "Michael Brown", service: "Massage", date: "Oct 23, 2026", status: "Cancelled", price: "₹90.00" },
                             ].map((row, i) => (
                                 <tr key={i} className="hover:bg-muted/30 transition-colors">
                                     <td className="px-6 py-4 font-medium">{row.customer}</td>
                                     <td className="px-6 py-4">{row.service}</td>
                                     <td className="px-6 py-4 text-muted-foreground">{row.date}</td>
                                     <td className="px-6 py-4">
                                         <span className={`px-2 py-1 rounded-md text-xs font-semibold
                                            ${row.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                                              row.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                              row.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                                              'bg-red-100 text-red-700'
                                            }
                                         `}>
                                            {row.status}
                                         </span>
                                     </td>
                                     <td className="px-6 py-4 text-right font-medium">{row.price}</td>
                                 </tr>
                             ))}
                         </tbody>
                     </table>
                 </div>
            </GlassContainer>

        </PageTransition>
      </div>
    </div>
  );
}
