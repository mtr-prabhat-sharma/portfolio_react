const CallToActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="px-6 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition">
        Download CV
      </button>

      <button className="px-6 py-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
        Contact
      </button>
    </div>
  );
};

export default CallToActionButtons;
