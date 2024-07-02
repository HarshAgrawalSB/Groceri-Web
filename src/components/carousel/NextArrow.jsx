export const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} md:-right-5 bg-gray-600 hover:bg-[#0b4635] h-8 w-8 inline-flex justify-center items-center absolute top-1/2 right-4 transform -translate-y-1/2 z-10  p-2 rounded-full shadow-lg`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};
