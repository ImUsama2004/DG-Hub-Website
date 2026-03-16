import React, { useState, useRef, useEffect } from "react";

// ── Profile Component (inline) ────────────────────────────────────────────────
const Field = ({ label, children, isDark }) => (
  <div className="space-y-1.5">
    <label className={`block text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-emerald-500/60' : 'text-slate-500'}`}>{label}</label>
    {children}
  </div>
);

function ProfileComponent({ isDark }) {
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
        <div className="h-32 bg-linear-to-r from-emerald-600 to-emerald-800 relative">
          <div className="absolute -bottom-12 left-8 flex items-end gap-5">
            <div className={`w-24 h-24 rounded-2xl bg-emerald-500 border-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg ${isDark ? 'border-[#111c18]' : 'border-white'}`}>
              U
            </div>
            <button style={{ cursor: 'pointer' }} className="mb-2 px-4 py-1.5 text-xs font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all shadow-md active:scale-95">
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
            <button style={{ cursor: 'pointer' }} className={`px-6 py-2.5 text-sm font-medium rounded-xl transition-all ${isDark ? 'text-emerald-400 hover:bg-emerald-900/20' : 'text-slate-600 hover:bg-slate-100'}`}>
              Cancel
            </button>
            <button style={{ cursor: 'pointer' }} className="px-10 py-2.5 text-sm font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-900/20 active:scale-95 transition-all">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Nav / Icon helpers ────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: SquaresIcon },
  { id: "careers", label: "Career Management", icon: BriefcaseIcon },
  { id: "partners", label: "Partner Companies", icon: BuildingIcon },
  { id: "products", label: "Products", icon: CubeIcon },
  { id: "settings", label: "Settings", icon: GearIcon },
];

const TECH_OPTIONS = ["React", "Vue", "Angular", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "Docker", "AWS", "TypeScript", "GraphQL", "Tailwind CSS", "Python", "FastAPI"];

function SquaresIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="12.01" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <path d="M3 21h18M9 21V7l6-4v18M9 7H3v14M15 11h2M15 15h2M9 11H7M9 15H7" />
    </svg>
  );
}
function CubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PlusJobIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect width="48" height="48" rx="14" fill="#EEF2FF" />
      <path d="M16 24h16M24 16v16" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="13" y="19" width="22" height="16" rx="3" stroke="#4F46E5" strokeWidth="2" fill="none" />
      <path d="M19 19v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#4F46E5" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function PartnerIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect width="48" height="48" rx="14" fill="#F0FDF4" />
      <circle cx="17" cy="22" r="5" stroke="#16A34A" strokeWidth="2" fill="none" />
      <circle cx="31" cy="22" r="5" stroke="#16A34A" strokeWidth="2" fill="none" />
      <path d="M10 35c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M24 35c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}
function ProductIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect width="48" height="48" rx="14" fill="#FFF7ED" />
      <path d="M24 10l12 6.93V30L24 36.93 12 30V16.93L24 10z" stroke="#EA580C" strokeWidth="2" fill="none" />
      <path d="M24 10v26.93M12 16.93l12 7 12-7" stroke="#EA580C" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Modal Shell ───────────────────────────────────────────────────────────────
function Modal({ open, onClose, title, children, onSubmit, submitLabel = "Submit", isDark }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className={`relative rounded-2xl shadow-2xl w-full max-w-md overflow-hidden ${isDark ? 'bg-[#111c18] border border-emerald-900/40' : 'bg-white'}`}
        style={{ animation: "modalIn 0.22s cubic-bezier(.34,1.56,.64,1) both" }}
        onClick={e => e.stopPropagation()}
      >
        <div className={`flex items-center justify-between px-6 pt-6 pb-4 border-b ${isDark ? 'border-emerald-900/30' : 'border-slate-100'}`}>
          <h2 className={`text-base font-semibold tracking-tight ${isDark ? 'text-emerald-50' : 'text-slate-800'}`}>{title}</h2>
          <button style={{ cursor: 'pointer' }} onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all">
            <XIcon />
          </button>
        </div>
        <div className="px-6 py-5 space-y-4">{children}</div>
        <div className="flex items-center justify-end gap-2 px-6 pb-6 pt-2">
          <button style={{ cursor: 'pointer' }} onClick={onClose} className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${isDark ? 'bg-emerald-950/40 text-emerald-400 hover:bg-emerald-950' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
            Cancel
          </button>
          <button style={{ cursor: 'pointer' }} onClick={onSubmit} className="px-5 py-2 text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 active:scale-95 transition-all shadow-sm">
            {submitLabel}
          </button>
        </div>
      </div>
      <style>{`@keyframes modalIn{from{opacity:0;transform:scale(0.94) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}`}</style>
    </div>
  );
}

function ModalField({ label, children, isDark }) {
  return (
    <div className="space-y-1.5">
      <label className={`block text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-emerald-500/60' : 'text-slate-500'}`}>{label}</label>
      {children}
    </div>
  );
}

function AddJobModal({ open, onClose, isDark }) {
  const [form, setForm] = useState({ title: "", exp: "", location: "", workType: "onsite" });
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const inputCls = `w-full px-3.5 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${isDark ? 'bg-[#0a0f0d] border-emerald-900 text-emerald-50 placeholder-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400'}`;
  const handleSubmit = () => { alert(`Job "${form.title}" added!`); onClose(); setForm({ title: "", exp: "", location: "", workType: "onsite" }); };
  return (
    <Modal open={open} onClose={onClose} title="Post a New Job" onSubmit={handleSubmit} submitLabel="Add Job" isDark={isDark}>
      <ModalField label="Job Title" isDark={isDark}>
        <input className={inputCls} placeholder="e.g. Senior Frontend Engineer" value={form.title} onChange={set("title")} />
      </ModalField>
      <ModalField label="Experience Required" isDark={isDark}>
        <input className={inputCls} type="number" placeholder="e.g. 3 (years)" value={form.exp} onChange={set("exp")} />
      </ModalField>
      <ModalField label="Location" isDark={isDark}>
        <input className={inputCls} placeholder="e.g. New York, NY" value={form.location} onChange={set("location")} />
      </ModalField>
      <ModalField label="Work Type" isDark={isDark}>
        <div className="flex gap-3">
          {["onsite", "remote", "hybrid"].map(t => (
            <label key={t} style={{ cursor: 'pointer' }} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${form.workType === t ? (isDark ? "border-emerald-500 bg-emerald-900/30 text-emerald-400" : "border-indigo-500 bg-indigo-50 text-indigo-700") : (isDark ? "border-emerald-900 text-emerald-800 hover:bg-emerald-900/10" : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50")}`}>
              <input type="radio" className="hidden" value={t} checked={form.workType === t} onChange={set("workType")} />
              <span className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${form.workType === t ? (isDark ? "border-emerald-500" : "border-indigo-500") : (isDark ? "border-emerald-900" : "border-slate-300")}`}>
                {form.workType === t && <span className={`w-1.5 h-1.5 rounded-full block ${isDark ? "bg-emerald-500" : "bg-indigo-500"}`} />}
              </span>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </label>
          ))}
        </div>
      </ModalField>
    </Modal>
  );
}

function AddPartnerModal({ open, onClose, isDark }) {
  const [form, setForm] = useState({ name: "", file: null });
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();
  const inputCls = `w-full px-3.5 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${isDark ? 'bg-[#0a0f0d] border-emerald-900 text-emerald-50 placeholder-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400'}`;
  const handleFile = (e) => {
    const f = e.target.files[0];
    if (f) { setForm(p => ({ ...p, file: f })); setPreview(URL.createObjectURL(f)); }
  };
  const handleSubmit = () => { alert(`Company "${form.name}" saved!`); onClose(); setForm({ name: "", file: null }); setPreview(null); };
  return (
    <Modal open={open} onClose={onClose} title="Add Partner Company" onSubmit={handleSubmit} submitLabel="Save Company" isDark={isDark}>
      <ModalField label="Company Name" isDark={isDark}>
        <input className={inputCls} placeholder="e.g. Acme Corporation" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
      </ModalField>
      <ModalField label="Company Logo" isDark={isDark}>
        <div onClick={() => fileRef.current.click()} style={{ cursor: 'pointer' }}
          className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center hover:border-emerald-500 hover:bg-emerald-500/5 transition-all group ${isDark ? 'border-emerald-900' : 'border-slate-200'}`}
        >
          {preview ? (
            <img src={preview} alt="logo" className="h-16 object-contain rounded-lg" />
          ) : (
            <>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${isDark ? 'bg-emerald-900/20 text-emerald-800 group-hover:text-emerald-500' : 'bg-slate-100 text-slate-400 group-hover:text-green-500'}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-xs font-medium text-slate-500 group-hover:text-emerald-500 transition-all">Click to upload logo</p>
            </>
          )}
          <input ref={fileRef} type="file" className="hidden" accept="image/*" onChange={handleFile} />
        </div>
      </ModalField>
    </Modal>
  );
}

function AddProductModal({ open, onClose, isDark }) {
  const [form, setForm] = useState({ name: "", desc: "", tags: [] });
  const toggleTag = (tag) => setForm(f => ({ ...f, tags: f.tags.includes(tag) ? f.tags.filter(t => t !== tag) : [...f.tags, tag] }));
  const inputCls = `w-full px-3.5 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${isDark ? 'bg-[#0a0f0d] border-emerald-900 text-emerald-50 placeholder-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400'}`;
  const handleSubmit = () => { alert(`Product "${form.name}" added!`); onClose(); setForm({ name: "", desc: "", tags: [] }); };
  return (
    <Modal open={open} onClose={onClose} title="Add New Product" onSubmit={handleSubmit} submitLabel="Add Product" isDark={isDark}>
      <ModalField label="Product Name" isDark={isDark}>
        <input className={inputCls} placeholder="e.g. Analytics Platform" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
      </ModalField>
      <ModalField label="Product Description" isDark={isDark}>
        <textarea className={`${inputCls} resize-none`} rows={3} placeholder="Describe what this product does..." value={form.desc} onChange={e => setForm(f => ({ ...f, desc: e.target.value }))} />
      </ModalField>
      <ModalField label="Tech Stack" isDark={isDark}>
        <div className="flex flex-wrap gap-2">
          {TECH_OPTIONS.map(tech => (
            <button key={tech} type="button" style={{ cursor: 'pointer' }} onClick={() => toggleTag(tech)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${form.tags.includes(tech) ? "bg-emerald-600 text-white shadow-sm" : (isDark ? "bg-emerald-900/20 text-emerald-700 hover:bg-emerald-900/40" : "bg-slate-100 text-slate-600 hover:bg-slate-200")}`}>
              {tech}
            </button>
          ))}
        </div>
      </ModalField>
    </Modal>
  );
}

function ActionCard({ icon, title, desc, accent, onClick, isDark }) {
  return (
    <button onClick={onClick} style={{ cursor: 'pointer' }}
      className={`group relative flex flex-col items-start gap-5 p-7 rounded-2xl border transition-all duration-300 text-left w-full overflow-hidden ${isDark ? 'bg-[#111c18] border-emerald-900/40 hover:border-emerald-500/50 hover:-translate-y-1.5' : 'bg-white border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5'}`}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${accent}`} style={{ background: "linear-gradient(135deg, transparent 60%, rgba(0,0,0,0.02))" }} />
      <div className="relative z-10">{icon}</div>
      <div className="relative z-10">
        <h3 className={`text-base font-semibold mb-1.5 tracking-tight ${isDark ? 'text-emerald-50' : 'text-slate-800'}`}>{title}</h3>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-emerald-500/60' : 'text-slate-500'}`}>{desc}</p>
      </div>
      <div className="relative z-10 mt-auto flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-emerald-500 transition-colors">
        <span>Open</span>
        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  );
}

function ProfileDropdown({ isDark, onNavigateProfile }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleItemClick = (label) => {
    setOpen(false);
    if (label === "Profile") onNavigateProfile();
  };

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(o => !o)} style={{ cursor: 'pointer' }}
        className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all group ${isDark ? 'hover:bg-emerald-900/20' : 'hover:bg-slate-100'}`}
      >
        <div className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-xs font-bold shadow-sm">A</div>
        <div className="hidden sm:block text-left">
          <p className={`text-sm font-semibold leading-tight ${isDark ? 'text-emerald-50' : 'text-slate-800'}`}>Usama Saeed</p>
          <p className="text-xs text-emerald-600 leading-tight">Admin</p>
        </div>
        <span className="text-slate-400 group-hover:text-slate-600 transition-colors ml-1"><ChevronDown /></span>
      </button>
      {open && (
        <div className={`absolute right-0 top-full mt-2 w-48 rounded-xl shadow-xl border overflow-hidden z-40 ${isDark ? 'bg-[#111c18] border-emerald-900' : 'bg-white border-slate-100'}`}
          style={{ animation: "modalIn 0.15s ease both" }}
        >
          {[["Profile", "👤"], ["Settings", "⚙️"], ["Logout", "🚪"]].map(([label, emoji]) => (
            <button key={label} onClick={() => handleItemClick(label)} style={{ cursor: 'pointer' }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors text-left ${isDark ? 'text-emerald-50/70 hover:bg-emerald-900/40 hover:text-white' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              <span>{emoji}</span>{label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const PAGE_TITLES = {
  dashboard: { title: "Dashboard", sub: "Overview" },
  careers: { title: "Career Management", sub: "Jobs" },
  partners: { title: "Partner Companies", sub: "Partners" },
  products: { title: "Products", sub: "Catalogue" },
  settings: { title: "Settings", sub: "Preferences" },
  profile: { title: "My Profile", sub: "Account" },
};

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [page, setPage] = useState("dashboard");
  const [modal, setModal] = useState(null);
  const [theme, setTheme] = useState("light");

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");

  const navigateTo = (id) => {
    setPage(id);
    if (id !== "profile") setActiveNav(id);
  };

  const currentPageMeta = PAGE_TITLES[page] || PAGE_TITLES.dashboard;

  return (
    <div className={`flex h-screen transition-colors duration-300 font-sans overflow-hidden ${isDark ? 'bg-[#0a0f0d]' : 'bg-slate-50'}`} style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: ${isDark ? '#111c18' : '#e2e8f0'}; border-radius: 4px; }
        @keyframes modalIn{from{opacity:0;transform:scale(0.94) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}
      `}</style>

      {/* ── Sidebar ── */}
      <aside className={`w-60 shrink-0 flex flex-col h-full border-r transition-colors ${isDark ? 'bg-[#061a14] border-emerald-900/30' : 'bg-slate-900 border-transparent'}`}>
        {/* Logo */}
        <div className={`px-5 py-5 border-b ${isDark ? 'border-emerald-900/30' : 'border-slate-800'}`}>
          <button onClick={() => navigateTo("dashboard")} style={{ cursor: 'pointer' }}
            className="flex items-center gap-2.5 w-full hover:opacity-80 transition-opacity"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m12.72-12.72l1.41-1.41M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-white font-semibold text-sm tracking-tight">AdminPanel</span>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          <p className="px-3 text-xs font-semibold text-emerald-500/50 uppercase tracking-widest mb-3">Menu</p>
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => navigateTo(id)} style={{ cursor: 'pointer' }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${activeNav === id && page !== "profile" ? "bg-emerald-600 text-white shadow-sm shadow-emerald-900/50" : (isDark ? "text-emerald-100/40 hover:text-white hover:bg-emerald-800/20" : "text-slate-400 hover:text-white hover:bg-slate-800")}`}
            >
              <Icon />{label}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className={`px-3 py-4 border-t ${isDark ? 'border-emerald-900/30' : 'border-slate-800'}`}>
          {/* Theme toggle — shows what you'll switch TO */}
          <button onClick={toggleTheme} style={{ cursor: 'pointer' }}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl mb-3 transition-all ${isDark ? 'bg-emerald-900/20 border border-emerald-900/30 text-emerald-300 hover:bg-emerald-900/40' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            {isDark ? (
              <>
                <span className="text-yellow-300"><SunIcon /></span>
                <span className="text-xs font-medium">Light Mode</span>
              </>
            ) : (
              <>
                <span className="text-slate-400"><MoonIcon /></span>
                <span className="text-xs font-medium">Dark Mode</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2.5 px-2">
            <div className="w-7 h-7 rounded-full bg-linear-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-xs font-bold">U</div>
            <div>
              <p className="text-xs font-semibold text-white leading-tight">Usama Saeed</p>
              <p className="text-[10px] text-emerald-500 font-medium leading-tight">Web Developer</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Nav — search bar removed */}
        <header className={`h-16 border-b flex items-center justify-between px-6 shrink-0 transition-colors ${isDark ? 'bg-[#0a0f0d] border-emerald-900/30' : 'bg-white border-slate-100'}`}>
          <div>
            <h1 className={`text-sm font-semibold ${isDark ? 'text-emerald-50' : 'text-slate-800'}`}>{currentPageMeta.title}</h1>
            <p className="text-[10px] font-bold text-emerald-500 tracking-widest uppercase">{currentPageMeta.sub}</p>
          </div>
          <ProfileDropdown isDark={isDark} onNavigateProfile={() => navigateTo("profile")} />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8 lg:p-12">

          {page === "profile" && <ProfileComponent isDark={isDark} />}

          {page === "dashboard" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { label: "Active Jobs", value: "12", change: "+3 this month", color: "text-emerald-500", icon: "💼" },
                  { label: "Partner Companies", value: "8", change: "+1 this week", color: "text-emerald-500", icon: "🤝" },
                  { label: "Products Listed", value: "5", change: "2 in review", color: "text-emerald-500", icon: "📦" },
                ].map(({ label, value, change, color, icon }) => (
                  <div key={label} className={`rounded-3xl border p-6 shadow-sm transition-colors ${isDark ? 'bg-[#111c18] border-emerald-900/30' : 'bg-white border-slate-100'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-emerald-500/50' : 'text-slate-500'}`}>{label}</p>
                      <span className="text-lg">{icon}</span>
                    </div>
                    <p className={`text-4xl font-black ${color} mb-1`}>{value}</p>
                    <p className={`text-xs font-medium ${isDark ? 'text-emerald-900' : 'text-slate-400'}`}>{change}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h2 className={`text-xl font-bold tracking-tight ${isDark ? 'text-emerald-50' : 'text-slate-800'}`}>Quick Actions</h2>
                <p className={`text-sm mt-0.5 ${isDark ? 'text-emerald-500/60' : 'text-slate-400'}`}>Manage your website content from here</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
                <ActionCard isDark={isDark} icon={<PlusJobIcon />} title="Add Job" desc="Post a new job opportunity to your careers page." accent="bg-emerald-500/5" onClick={() => setModal("job")} />
                <ActionCard isDark={isDark} icon={<PartnerIcon />} title="Add Partner Company" desc="Showcase a new partner on your website." accent="bg-emerald-500/5" onClick={() => setModal("partner")} />
                <ActionCard isDark={isDark} icon={<ProductIcon />} title="Add New Product" desc="List a new product with its tech stack and details." accent="bg-emerald-500/5" onClick={() => setModal("product")} />
              </div>

              <div className="mt-12 max-w-4xl">
                <h2 className={`text-sm font-bold mb-4 ${isDark ? 'text-emerald-500/80' : 'text-slate-700'}`}>Recent Activity</h2>
                <div className={`rounded-2xl border shadow-sm divide-y ${isDark ? 'bg-[#111c18] border-emerald-900/30 divide-emerald-900/20' : 'bg-white border-slate-100 divide-slate-50'}`}>
                  {[
                    { action: "New job posted", detail: "Senior Designer · Remote", time: "2h ago", dot: "bg-emerald-500" },
                    { action: "Partner added", detail: "TechCorp Inc.", time: "1d ago", dot: "bg-emerald-400" },
                    { action: "Product updated", detail: "Analytics Platform v2.0", time: "3d ago", dot: "bg-emerald-300" },
                  ].map(({ action, detail, time, dot }) => (
                    <div key={detail} className="flex items-center justify-between px-6 py-4">
                      <div className="flex items-center gap-4">
                        <span className={`w-2 h-2 rounded-full ${dot} shadow-sm`} />
                        <div>
                          <p className={`text-sm font-semibold ${isDark ? 'text-emerald-50/90' : 'text-slate-700'}`}>{action}</p>
                          <p className={`text-xs ${isDark ? 'text-emerald-500/40' : 'text-slate-400'}`}>{detail}</p>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold ${isDark ? 'text-emerald-900' : 'text-slate-400'}`}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {["careers", "partners", "products", "settings"].includes(page) && (
            <div className="flex flex-col items-center justify-center h-full gap-4 opacity-40">
              <div className="text-6xl">🚧</div>
              <p className={`text-sm font-semibold ${isDark ? 'text-emerald-500' : 'text-slate-500'}`}>{currentPageMeta.title} — coming soon</p>
            </div>
          )}

        </main>
      </div>

      <AddJobModal open={modal === "job"} onClose={() => setModal(null)} isDark={isDark} />
      <AddPartnerModal open={modal === "partner"} onClose={() => setModal(null)} isDark={isDark} />
      <AddProductModal open={modal === "product"} onClose={() => setModal(null)} isDark={isDark} />
    </div>
  );
}
