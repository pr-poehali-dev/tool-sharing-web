import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const features = [
    {
      icon: "Wrench",
      title: "Широкий выбор",
      description: "Более 500 видов строительных инструментов для любых задач"
    },
    {
      icon: "Clock",
      title: "Аренда от часа",
      description: "Гибкие условия аренды: от нескольких часов до месяцев"
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставим инструмент в течение 2 часов в пределах города"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Все инструменты застрахованы и прошли проверку"
    }
  ];

  const tools = [
    {
      name: "Перфоратор Bosch",
      category: "Электроинструмент",
      price: "500 ₽/сутки",
      image: "🔨"
    },
    {
      name: "Бетономешалка",
      category: "Оборудование",
      price: "1200 ₽/сутки",
      image: "🏗️"
    },
    {
      name: "Шуруповерт Makita",
      category: "Электроинструмент",
      price: "300 ₽/сутки",
      image: "🔧"
    },
    {
      name: "Строительные леса",
      category: "Оборудование",
      price: "800 ₽/сутки",
      image: "🪜"
    }
  ];

  const plans = [
    {
      name: "Базовый",
      price: "0 ₽",
      period: "бесплатно",
      features: [
        "Доступ к каталогу",
        "Аренда от 3 суток",
        "Самовывоз",
        "Поддержка в чате"
      ],
      highlighted: false
    },
    {
      name: "Стандарт",
      price: "999 ₽",
      period: "в месяц",
      features: [
        "Всё из Базового",
        "Аренда от 1 суток",
        "Бесплатная доставка",
        "Скидка 10% на всё",
        "Приоритетная поддержка"
      ],
      highlighted: true
    },
    {
      name: "Профи",
      price: "2499 ₽",
      period: "в месяц",
      features: [
        "Всё из Стандарт",
        "Аренда от 1 часа",
        "Доставка за 1 час",
        "Скидка 20% на всё",
        "Личный менеджер",
        "Без залога"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Hammer" size={32} className="text-primary" />
            <span className="text-2xl font-bold">ToolShare</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Скачать</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">Новое приложение</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Аренда инструментов{" "}
                <span className="text-primary">стала проще</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Найди нужный инструмент за минуту. Забронируй онлайн. Получи с доставкой или самовывозом.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Apple" size={24} className="mr-2" />
                  App Store
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" size={24} className="mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/037032eb-404b-4e30-9e49-e59a65308136/files/89a75943-c6bf-4679-b422-89e742013e97.jpg" 
                  alt="ToolShare App Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Всё для комфортной аренды инструментов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Популярные инструменты</h2>
            <p className="text-xl text-muted-foreground">Инструменты, которые арендуют чаще всего</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="text-6xl mb-4 text-center">{tool.image}</div>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <CardDescription>{tool.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{tool.price}</span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Посмотреть все инструменты
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Выберите свой тариф</h2>
            <p className="text-xl text-muted-foreground">Гибкие планы для любых потребностей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all animate-fade-in ${plan.highlighted ? 'border-primary border-2 scale-105' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6" 
                    variant={plan.highlighted ? 'default' : 'outline'}
                    size="lg"
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Начните экономить уже сегодня</h2>
          <p className="text-xl mb-8 opacity-90">Скачайте приложение и получите скидку 20% на первую аренду</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Apple" size={24} className="mr-2" />
              App Store
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
              <Icon name="Play" size={24} className="mr-2" />
              Google Play
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Остались вопросы? Мы всегда на связи</p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите, чем мы можем помочь" rows={5} />
                </div>
                <Button size="lg" className="w-full">
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <p className="font-medium">support@toolshare.ru</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <p className="font-medium">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <p className="font-medium">Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Hammer" size={28} className="text-primary" />
                <span className="text-xl font-bold">ToolShare</span>
              </div>
              <p className="text-sm opacity-80">Сервис аренды строительных инструментов нового поколения</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">О нас</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Вакансии</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Как арендовать</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Icon name="Facebook" size={24} className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                <Icon name="Instagram" size={24} className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                <Icon name="Twitter" size={24} className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-60">
            <p>© 2024 ToolShare. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;