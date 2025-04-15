import React from "react";
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left: Auth Form */}
      <div className="w-full md:w-[60%] px-8 md:px-16 py-10 bg-white overflow-y-auto">
        <h2 className="text-2xl font-semibold font-effect-anaglyph text-gray-900 mb-6 ">
        <img src="\src\assets\images\E-T-Logo.png" alt="Expense Tracker Logo" className="h-15"/>
        </h2>
        {children}
      </div>

      {/* Right: Banner & Info */}
      <div className="hidden md:block w-[40%] h-full relative bg-gradient-to-br from-blue-100 to-indigo-100 p-10">
        {/* Decorative Blobs */}
        <div className="w-44 h-44 rounded-[40px] bg-blue-500 absolute -top-6 -left-6 opacity-80 blur-sm" />
        <div className="w-44 h-52 rounded-[40px] border-[20px] border-indigo-400 absolute top-1/3 -right-10 opacity-60" />
        <div className="w-44 h-44 rounded-[40px] bg-indigo-400 absolute -bottom-6 -left-6 opacity-80 blur-sm" />

        {/* Info Card */}
        <div className="relative z-10">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-blue-500"
          />
        </div>

        {/* Card Illustration */}
        <img
          src={CARD_2}
          className="absolute bottom-10 right-8 lg:right-12 w-64 lg:w-[85%] drop-shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-105"
          alt="Card Visual"
        />
      </div>
    </div>
  );
};

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-5 items-center bg-white p-5 rounded-2xl shadow-lg border border-gray-200/60 transition-all hover:shadow-xl">
      <div
        className={`w-14 h-14 flex items-center justify-center text-2xl text-white ${color} rounded-full shadow-md`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <h4 className="text-xl font-bold text-gray-900">₹{value}</h4> {}
      </div>
    </div>
  );
};

export default AuthLayout;
