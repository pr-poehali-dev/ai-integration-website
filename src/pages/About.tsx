import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const team = [
    {
      name: "Алексей Иванов",
      role: "CEO & AI Architect",
      experience: "8 лет в ML/AI",
      description:
        "Эксперт по машинному обучению с опытом в крупных tech-компаниях",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Мария Петрова",
      role: "Head of Data Science",
      experience: "6 лет в Data Science",
      description: "Специалист по глубокому обучению и компьютерному зрению",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b665?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Дмитрий Сидоров",
      role: "Lead Developer",
      experience: "7 лет в разработке",
      description: "Архитектор AI-систем и интеграционных решений",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      icon: "Target",
      title: "Фокус на результат",
      description:
        "Каждое решение направлено на достижение конкретных бизнес-целей клиента",
    },
    {
      icon: "Shield",
      title: "Надежность",
      description:
        "Используем проверенные технологии и обеспечиваем стабильную работу систем",
    },
    {
      icon: "Lightbulb",
      title: "Инновации",
      description:
        "Следим за последними трендами в AI и внедряем передовые решения",
    },
    {
      icon: "Users",
      title: "Партнерство",
      description:
        "Строим долгосрочные отношения и поддерживаем клиентов на всех этапах",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О компании NeuralTech
            </h1>
            <p className="font-open-sans text-xl text-gray-600 mb-8">
              Мы — команда экспертов по искусственному интеллекту, которая
              помогает бизнесу использовать мощь AI для роста и автоматизации
              процессов.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-6">
                Наша миссия
              </h2>
              <p className="font-open-sans text-lg text-gray-600 mb-6">
                Сделать технологии искусственного интеллекта доступными для
                бизнеса любого масштаба. Мы верим, что AI должен быть
                инструментом роста, а не источником сложностей.
              </p>
              <p className="font-open-sans text-lg text-gray-600">
                За 5 лет работы мы реализовали более 100 проектов, помогли
                компаниям автоматизировать процессы и увеличить эффективность в
                среднем на 40%.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="font-montserrat text-4xl font-bold text-purple-600 mb-2">
                  100+
                </div>
                <div className="font-open-sans text-gray-600">
                  Успешных проектов
                </div>
              </div>
              <div className="text-center">
                <div className="font-montserrat text-4xl font-bold text-purple-600 mb-2">
                  50+
                </div>
                <div className="font-open-sans text-gray-600">
                  Довольных клиентов
                </div>
              </div>
              <div className="text-center">
                <div className="font-montserrat text-4xl font-bold text-purple-600 mb-2">
                  5
                </div>
                <div className="font-open-sans text-gray-600">Лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat text-4xl font-bold text-purple-600 mb-2">
                  95%
                </div>
                <div className="font-open-sans text-gray-600">
                  Успешность проектов
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Эксперты с многолетним опытом в области искусственного интеллекта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="font-open-sans text-purple-600 font-medium mb-2">
                    {member.role}
                  </div>
                  <div className="font-open-sans text-sm text-gray-500 mb-4">
                    {member.experience}
                  </div>
                  <p className="font-open-sans text-gray-600">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={value.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-montserrat text-lg font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="font-open-sans text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
