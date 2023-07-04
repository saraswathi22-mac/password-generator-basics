const Days = () => {
  return (
    <div className="h-14 bg-gradient-to-r from-purple-300 to-pink-300 shadow rounded-2xl shadow-2xl">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-300 h-10 w-10 items-center">1</div>
        <div className="flex-1 space-y-6 py-1">
          Introduction
        </div>
        <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-full p-4">+</button>
      </div>
    </div>
  );
};

export default Days;
