import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-gray-50 rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-inter font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${product.price}</span>
            <Button
              onClick={() => onAddToCart(product)}
              className="bg-black hover:bg-primary text-white transition-colors"
            >
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              В корзину
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}