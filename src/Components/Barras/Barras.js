import React, { useState } from 'react';
import './Barras.css';
import Item from '../Itens/Item';
//import './Barras.css';

const SandwichMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sandwich-menu">
      <button className="sandwich-menu__button" onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <ul className="sandwich-menu__list">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>

        </ul>
      )}
    </div>
  );
};

export default SandwichMenu;

/* passar um array de strings simples, cada item um string */