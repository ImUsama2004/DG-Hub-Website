import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMoved, setIsMoved] = useState(false);
  const [showJoke, setShowJoke] = useState(false);

  // Check if form is missing data
  const isFormInvalid = email === '' || password === '';

  const handleHover = () => {
    if (isFormInvalid) {
      // Toggle position
      setIsMoved(!isMoved);
      // Show the "Mazak he kya" text
      setShowJoke(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Finally! You filled it and caught me.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200 p-4">
      <form 
        onSubmit={handleSubmit}
        className="p-8 bg-white shadow-2xl rounded-2xl w-full max-w-sm flex flex-col gap-5 border border-gray-100"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800"> Sign In naah
            <br/>Legend Form</h2>
        
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            placeholder="example@mail.com"
            className="p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-red-400 transition-all outline-none"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
                if(e.target.value !== '' && password !== '') setShowJoke(false);
            }}
          />
        </div>
        
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-red-400 transition-all outline-none"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
                if(email !== '' && e.target.value !== '') setShowJoke(false);
            }}
          />
        </div>

        {/* Message Container */}
        <div className="h-6 text-center">
            {isFormInvalid && showJoke && (
                <p className="text-red-600 font-bold animate-bounce text-lg">
                    Mazak he kya? 😂
                </p>
            )}
        </div>

        {/* Button Container */}
        <div className="relative h-14 w-full bg-gray-50 rounded-lg overflow-hidden border-dashed border-2 border-gray-200">
          <button
            type="submit"
            onMouseEnter={handleHover}
            // Transition is set to 0.1s for "instant" teleportation
            style={{
              transform: isFormInvalid && isMoved ? 'translateX(180px)' : 'translateX(10px)',
              transition: 'transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              top: '8px'
            }}
            className="absolute w-32 bg-indigo-600 text-white py-2 rounded-md font-bold shadow-lg active:scale-95"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;