import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Brain",
      title: "AI Интеграция в бизнес-процессы",
      description:
        "Внедрение искусственного интеллекта в существующие системы компании для автоматизации рутинных задач и повышения эффективности.",
      features: [
        "Анализ текущих процессов",
        "Разработка AI-решений",
        "Интеграция с CRM/ERP",
        "Обучение персонала",
      ],
      price: "от 300 000 ₽",
    },
    {
      icon: "MessageSquare",
      title: "Чат-боты и виртуальные ассистенты",
      description:
        "Создание умных помощников для клиентского сервиса, которые работают 24/7 и обрабатывают до 80% запросов автоматически.",
      features: [
        "Многоканальность",
        "Интеграция с базами знаний",
        "Машинное обучение",
        "Аналитика диалогов",
      ],
      price: "от 150 000 ₽",
    },
    {
      icon: "BarChart3",
      title: "Аналитика и прогнозирование",
      description:
        "Системы машинного обучения для анализа больших данных, выявления трендов и прогнозирования бизнес-показателей.",
      features: [
        "Предиктивная аналитика",
        "Обработка больших данных",
        "Визуализация результатов",
        "Автоматические отчеты",
      ],
      price: "от 250 000 ₽",
    },
    {
      icon: "Eye",
      title: "Компьютерное зрение",
      description:
        "Решения для автоматического анализа изображений и видео: от контроля качества продукции до видеоаналитики.",
      features: [
        "Распознавание объектов",
        "Анализ видеопотоков",
        "Контроль качества",
        "Безопасность",
      ],
      price: "от 400 000 ₽",
    },
    {
      icon: "FileText",
      title: "Обработка документов",
      description:
        "Автоматизация работы с документами: извлечение данных, классификация, поиск по содержимому.",
      features: [
        "OCR технологии",
        "Извлечение данных",
        "Классификация документов",
        "Интеллектуальный поиск",
      ],
      price: "от 200 000 ₽",
    },
    {
      icon: "Headphones",
      title: "Голосовые технологии",
      description:
        "Системы распознавания и синтеза речи для создания голосовых интерфейсов и автоматизации call-центров.",
      features: [
        "Распознавание речи",
        "Синтез речи",
        "Голосовые интерфейсы",
        "Анализ эмоций",
      ],
      price: "от 350 000 ₽",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши услуги
            </h1>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг по внедрению искусственного интеллекта в ваш
              бизнес. От консультаций до готовых решений под ключ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                      <Icon
                        name={service.icon}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <CardTitle className="font-montserrat text-xl text-gray-900">
                        {service.title}
                      </CardTitle>
                      <div className="font-open-sans text-lg font-semibold text-purple-600">
                        {service.price}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="font-open-sans text-gray-600">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-900 mb-3">
                      Что входит:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-2 font-open-sans text-gray-600"
                        >
                          <Icon
                            name="Check"
                            size={16}
                            className="text-green-500"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Получить консультацию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
              <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
                Нужно индивидуальное решение?
              </h2>
              <p className="font-open-sans text-gray-600 mb-6">
                Мы разрабатываем кастомные AI-решения под уникальные задачи
                вашего бизнеса
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
