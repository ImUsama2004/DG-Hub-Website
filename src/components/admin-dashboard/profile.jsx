import React, { useState } from "react";

// Helper Field Component for internal use
const Field = ({ label, children, isDark }) => (
  <div className="space-y-1.5">
    <label className={`block text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-emerald-500/60' : 'text-slate-500'}`}>{label}</label>
    {children}
  </div>
);

export default function ProfileComponent({ isDark }) {
  const [profile, setProfile] = useState({
    name: "Usama Saeed",
    email: "usama.dev@example.com",
    phone: "+92 300 1234567",
    password: "••••••••",
    location: "Peshawar, Pakistan",
    bio: "Full Stack Web Developer specialized in React, Next.js, and Tailwind CSS."
  });

  const inputCls = `w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
    isDark 
      ? 'bg-[#0a0f0d] border-emerald-900 text-emerald-50 placeholder-emerald-800' 
      : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400'
  }`;

  return (
    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-emerald-50' : 'text-slate-800'}`}>My Profile</h2>
        <p className={`text-sm mt-1 ${isDark ? 'text-emerald-500/60' : 'text-slate-500'}`}>Update your personal information and public presence</p>
      </div>

      <div className={`rounded-3xl border overflow-hidden shadow-sm ${isDark ? 'bg-[#111c18] border-emerald-900/30' : 'bg-white border-slate-100'}`}>
        {/* Profile Banner */}
        <div className="h-32 bg-linear-to-r from-emerald-600 to-emerald-800 relative">
          <div className="absolute -bottom-12 left-8 flex items-end gap-5">
            <div className={`w-24 h-24 rounded-2xl bg-emerald-500 border-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg ${isDark ? 'border-[#111c18]' : 'border-white'}`}>
              U
            </div>
            <button className="mb-2 px-4 py-1.5 text-xs font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all shadow-md active:scale-95">
              Update Photo
            </button>
          </div>
        </div>

        <div className="pt-16 p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Full Name" isDark={isDark}>
              <input className={inputCls} value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
            </Field>
            
            <Field label="Email Address" isDark={isDark}>
              <input className={inputCls} type="email" value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} />
            </Field>

            <Field label="Contact Number" isDark={isDark}>
              <input className={inputCls} value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} />
            </Field>

            <Field label="Password" isDark={isDark}>
              <input className={inputCls} type="password" value={profile.password} onChange={e => setProfile({...profile, password: e.target.value})} />
            </Field>

            <Field label="Location" isDark={isDark}>
              <input className={inputCls} value={profile.location} onChange={e => setProfile({...profile, location: e.target.value})} />
            </Field>

            <Field label="Designation" isDark={isDark}>
              <input className={inputCls} value="Web Developer / Admin" disabled />
            </Field>
          </div>

          <Field label="Professional Bio" isDark={isDark}>
            <textarea 
              className={`${inputCls} resize-none`} 
              rows={4} 
              value={profile.bio} 
              onChange={e => setProfile({...profile, bio: e.target.value})}
              placeholder="Tell us about yourself..."
            />
          </Field>

          <div className="pt-6 border-t border-emerald-900/10 flex justify-end gap-3">
             <button className={`px-6 py-2.5 text-sm font-medium rounded-xl transition-all ${isDark ? 'text-emerald-400 hover:bg-emerald-900/20' : 'text-slate-600 hover:bg-slate-100'}`}>
                Cancel
             </button>
             <button className="px-10 py-2.5 text-sm font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-900/20 active:scale-95 transition-all">
                Update Profile
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}