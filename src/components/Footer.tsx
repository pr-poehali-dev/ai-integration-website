import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-montserrat font-bold text-xl">
                NeuralTech
              </span>
            </div>
            <p className="font-open-sans text-gray-400 mb-6 max-w-md">
              Лидер в области внедрения искусственного интеллекта. Помогаем
              бизнесу использовать мощь AI для роста и автоматизации.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold mb-4">
              Быстрые ссылки
            </h3>
            <ul className="space-y-2 font-open-sans text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="hover:text-white transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 font-open-sans text-gray-400">
              <p>+7 (495) 123-45-67</p>
              <p>info@neuraltech.ru</p>
              <p>Москва, ул. Технологическая, 15</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center font-open-sans text-gray-400">
          <p>&copy; 2024 NeuralTech. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
