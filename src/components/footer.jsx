import './style.css'

// export funcion Elemento
const Footer = (props) => {
  return (
    <div className='pes'>
      <p> Copyright © 2023 by {props.my_name} </p>
    </div>
  );
};

export default Footer;
