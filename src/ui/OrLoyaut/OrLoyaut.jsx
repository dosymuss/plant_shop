import styled from "styled-components";

const Decor = styled.span`
  font-family: var(--space);
  font-weight: 500;
  font-size: 20px;
  color: #9f9797;
  position: relative;
  display: inline-block; // Используйте inline-block для лучшего контроля над позиционированием
  margin: 15px 30px; // Добавляем отступы слева и справа от текста

  &::before,
  &::after {
    content: ""; // Необходимо для создания псевдоэлементов
    display: block;
    background-color: #9f9797; // Цвет линий
    height: 2px; // Высота линий
    width: 200px; // Ширина каждой линии
    position: absolute; // Абсолютное позиционирование
    top: 50%; // Центрирование по вертикали
    transform: translateY(-50%);
  }

  &::before {
    left: -210px; // Смещаем линию слева от текста на 110px
  }

  &::after {
    right: -210px; // Смещаем линию справа от текста на 110px
  }
`;

const OrLoyaut = () => {
  return (
    <div>
      <Decor>OR</Decor>
    </div>
  );
};

export default OrLoyaut;
