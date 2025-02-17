const Button = ({ network }) => {
  return (
    <a
      className="bg-Grey-700  h-[35px] text-White px-16 font-semibold font-Inter text-xs flex items-center justify-center rounded-md hover:bg-Green
      hover:text-Grey-900
      transition-all"
      href="#"
    >
      {network}
    </a>
  );
};

export default Button;
