import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (495) 123-45-67",
      link: "tel:+74951234567",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "info@neuraltech.ru",
      link: "mailto:info@neuraltech.ru",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      content: "Москва, ул. Технологическая, 15, офис 301",
      link: null,
    },
    {
      icon: "Clock",
      title: "Время работы",
      content: "Пн-Пт: 9:00-18:00",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Контакты
            </h1>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы обсудить ваш проект? Свяжитесь с нами любым удобным
              способом или оставьте заявку на бесплатную консультацию.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon
                            name={info.icon}
                            size={24}
                            className="text-white"
                          />
                        </div>
                        <div>
                          <h3 className="font-montserrat font-semibold text-gray-900 mb-2">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="font-open-sans text-purple-600 hover:text-purple-700 transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="font-open-sans text-gray-600">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-0 shadow-md mt-8">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-gray-900 mb-4">
                    Следите за нами
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-purple-100 transition-colors"
                    >
                      <Icon
                        name="Linkedin"
                        size={20}
                        className="text-gray-600"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-purple-100 transition-colors"
                    >
                      <Icon name="Github" size={20} className="text-gray-600" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-purple-100 transition-colors"
                    >
                      <Icon
                        name="Twitter"
                        size={20}
                        className="text-gray-600"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-montserrat text-2xl text-gray-900">
                    Оставьте заявку
                  </CardTitle>
                  <p className="font-open-sans text-gray-600">
                    Расскажите о вашем проекте, и мы свяжемся с вами в течение
                    рабочего дня
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        placeholder="Ваше имя"
                        className="border-gray-200 focus:border-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания</Label>
                      <Input
                        id="company"
                        placeholder="Название компании"
                        className="border-gray-200 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="border-gray-200 focus:border-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        className="border-gray-200 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Интересующая услуга</Label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-purple-500 focus:outline-none"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="integration">AI Интеграция</option>
                      <option value="chatbots">Чат-боты и ассистенты</option>
                      <option value="analytics">Аналитика данных</option>
                      <option value="computer-vision">
                        Компьютерное зрение
                      </option>
                      <option value="document-processing">
                        Обработка документов
                      </option>
                      <option value="voice-tech">Голосовые технологии</option>
                      <option value="custom">Индивидуальное решение</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите подробнее о вашем проекте или задачах..."
                      rows={6}
                      className="border-gray-200 focus:border-purple-500"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <Label htmlFor="consent" className="text-sm text-gray-600">
                      Согласен на обработку персональных данных
                    </Label>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  >
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
