import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: "Brain",
      title: "AI Интеграция",
      description:
        "Внедрение ИИ в существующие системы и процессы вашего бизнеса",
    },
    {
      icon: "MessageSquare",
      title: "Чат-боты и Ассистенты",
      description: "Умные помощники для автоматизации клиентского сервиса",
    },
    {
      icon: "BarChart3",
      title: "Аналитика данных",
      description: "Машинное обучение для анализа и прогнозирования",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Превратите ваш бизнес с помощью
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {" "}
                ИИ
              </span>
            </h1>
            <p className="font-open-sans text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Мы помогаем компаниям внедрять искусственный интеллект для
              автоматизации процессов, улучшения клиентского опыта и роста
              прибыли
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-lg px-8 py-3"
              >
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3"
                asChild
              >
                <Link to="/services">Наши услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что мы предлагаем
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Комплексные решения на базе ИИ для различных областей бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="font-open-sans text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-montserrat text-4xl font-bold text-purple-600 mb-2">
                100+
              </div>
              <div className="font-open-sans text-gray-600">Проектов</div>
            </div>
            <div>
              <div className="font-montserrat text-4xl font-bold text-purple-600 mb-2">
                50+
              </div>
              <div className="font-open-sans text-gray-600">Клиентов</div>
            </div>
            <div>
              <div className="font-montserrat text-4xl font-bold text-purple-600 mb-2">
                95%
              </div>
              <div className="font-open-sans text-gray-600">Успешность</div>
            </div>
            <div>
              <div className="font-montserrat text-4xl font-bold text-purple-600 mb-2">
                24/7
              </div>
              <div className="font-open-sans text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы начать трансформацию?
          </h2>
          <p className="font-open-sans text-xl text-purple-100 mb-8">
            Получите бесплатную консультацию и узнайте, как ИИ может изменить
            ваш бизнес
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-3"
            asChild
          >
            <Link to="/contacts">Связаться с нами</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
