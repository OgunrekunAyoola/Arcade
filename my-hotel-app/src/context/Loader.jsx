const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="w-16 h-16 border-4 border-white border-t-orange-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
