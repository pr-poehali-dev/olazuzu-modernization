import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-inter font-bold mb-6 leading-tight">
            Современные
            <span className="block text-primary">технологии</span>
            для вас
          </h1>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Откройте для себя коллекцию премиальных товаров с инновационным дизайном 
            и непревзойденным качеством
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Смотреть каталог
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
              О компании
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </section>
  );
}