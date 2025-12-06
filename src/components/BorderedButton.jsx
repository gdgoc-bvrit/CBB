function BorderedButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform transition-transform duration-300 hover:scale-[1.05]"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4cdef5_0%,#1e3a8a_50%,#4cdef5_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-10 py-1 text-md font-semibold text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
}

export default BorderedButton;