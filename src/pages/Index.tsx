import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import CartSidebar from '@/components/CartSidebar';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Беспроводные наушники Pro',
    price: 299,
    image: '/img/f3eaf57b-6070-4960-8f45-d828ce52d730.jpg',
    category: 'Аудио'
  },
  {
    id: 2,
    name: 'Умные часы Elite',
    price: 399,
    image: '/img/8e6686fb-a2d0-4edf-839e-b2ce26578507.jpg',
    category: 'Гаджеты'
  },
  {
    id: 3,
    name: 'Смартфон Ultra',
    price: 799,
    image: '/img/553829fd-b69a-4f55-8c88-5b944c433f6e.jpg',
    category: 'Телефоны'
  },
  {
    id: 4,
    name: 'Беспроводные наушники Classic',
    price: 199,
    image: '/img/f3eaf57b-6070-4960-8f45-d828ce52d730.jpg',
    category: 'Аудио'
  },
  {
    id: 5,
    name: 'Умные часы Sport',
    price: 249,
    image: '/img/8e6686fb-a2d0-4edf-839e-b2ce26578507.jpg',
    category: 'Гаджеты'
  },
  {
    id: 6,
    name: 'Смартфон Pro',
    price: 599,
    image: '/img/553829fd-b69a-4f55-8c88-5b944c433f6e.jpg',
    category: 'Телефоны'
  }
];

const categories = ['Все товары', 'Аудио', 'Гаджеты', 'Телефоны'];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Все товары');

  const filteredProducts = selectedCategory === 'Все товары' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-inter font-bold mb-8 text-center">Популярные товары</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-black text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-inter font-bold mb-4">Быстрая доставка</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Бесплатная доставка по всей стране для заказов свыше $100. 
            Экспресс-доставка в течение 24 часов в крупных городах.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Узнать больше о доставке
          </Button>
        </section>
      </main>

      <footer className="bg-black text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-inter font-bold text-xl mb-4">OlaZuZu</h3>
              <p className="text-gray-400">
                Премиальные технологии для современной жизни
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Аудио</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гаджеты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Телефоны</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (800) 123-45-67</li>
                <li>info@olazuzu.com</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OlaZuZu. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
};

export default Index;