import React from 'react';
import './Footer.css'; // Подключаем файл стилей
import { useGetAndSetData } from '../../hooks/useGetAndSetData';
import { useGetImg } from '../../hooks/useGetImg';
import ImgService from '../../API/ImgService';

function Footer() {
    const [Dataimg, setimg, isLoading, Err] = useGetAndSetData(ImgService.getMainImg);
    let logo = useGetImg('logo', Dataimg);
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="logo.png" alt="Логотип" />
        </div>
        <div className="footer-info">
          <p>Адрес: Улица, Город, Страна</p>
          <p>Телефон: +7 (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/about">О нас</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/contact">Контакты</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Название вашей компании. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;