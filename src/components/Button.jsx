const Button = ({ type, title, icon, variant, full }) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && " w-full"
      } `}
      type={type}
    >
      {icon && <img src={icon} alt="Icon" width={24} height={24} />}
      <label className=" bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
