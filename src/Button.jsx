
const Button = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={() => onClick(text.toLowerCase())}
      className="bg-[#4CAF50] py-2 px-4 rounded-md"
    >
      <i className={`fa-solid ${icon}`}></i> {text}
    </button>
  );
};

export default Button