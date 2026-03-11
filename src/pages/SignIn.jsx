import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMoved, setIsMoved] = useState(false);
  const [showJoke, setShowJoke] = useState(false);

  const isFormInvalid = email === '' || password === '';

  const handleHover = () => {
    if (isFormInvalid) {
      setIsMoved(!isMoved);
      setShowJoke(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple Admin Authentication
    if (email === "admin@gmail.com" && password === "admin123") {

      localStorage.setItem("adminAuth", "true");

      alert("Login Successful");

      navigate("/admin-dashboard");

    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-16 bg-slate-200 p-4">
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="p-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl w-full max-w-sm flex flex-col gap-6 border border-gray-100"
      >

        <div className="text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-500 text-sm">Please enter your Credentials</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
          <input
            type="email"
            placeholder="example@mail.com"
            className="p-3 bg-gray-50 border rounded-xl border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="p-3 bg-gray-50 border rounded-xl border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="h-6 text-center">
          <AnimatePresence>
            {isFormInvalid && showJoke && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-red-500 font-bold text-sm italic"
              >
                Mazak he kya? Pehle form bharo 😂
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="relative h-14 w-full bg-gray-100 rounded-xl flex items-center">
          <motion.button
            type="submit"
            onMouseEnter={handleHover}
            animate={{ x: isFormInvalid && isMoved ? 175 : 0}}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`w-32 py-2 rounded-lg font-bold shadow-md ${
              isFormInvalid 
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Login
          </motion.button>
        </div>

      </motion.form>
    </div>
  );
};

export default SignIn;