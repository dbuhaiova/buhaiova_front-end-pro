import '../ProductsHeader/header.css'
const ButtonHeader = ({text, icon}) => {
  return (
    <button className="preview-button">
      {icon}
      {text}
    </button>
  );
};


export default ButtonHeader;

