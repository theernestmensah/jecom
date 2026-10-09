import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  User, 
  ArrowRight
} from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: "Premium Leather Tote", price: 240, category: "Accessories", image: "https://images.unsplash.com/photo-1584917033904-493bb3cebaf7?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Minimalist Wristwatch", price: 185, category: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Cotton Twill Overshirt", price: 85, category: "Apparel", image: "https://images.unsplash.com/photo-1598033129183-c4f50c717658?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Wool Blend Beanie", price: 45, category: "Accessories", image: "https://images.unsplash.com/photo-1576871337622-98d48d38537c?auto=format&fit=crop&q=80&w=600" },
];

const Navbar = ({ cartCount }) => (
  <nav style={{ borderBottom: '1px solid var(--gray-200)', padding: '1rem 0', position: 'sticky', top: 0, background: '#fff', zIndex: 100 }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        <h1 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>MODERN_CO</h1>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Shop</a>
          <a href="#" style={{ color: 'var(--gray-500)', textDecoration: 'none' }}>Categories</a>
          <a href="#" style={{ color: 'var(--gray-500)', textDecoration: 'none' }}>About</a>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <Search size={20} strokeWidth={1.5} style={{ cursor: 'pointer' }} />
        <User size={20} strokeWidth={1.5} style={{ cursor: 'pointer' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
          <ShoppingBag size={20} strokeWidth={1.5} />
          <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{cartCount}</span>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section style={{ backgroundColor: 'var(--gray-100)', padding: '4rem 0', borderBottom: '1px solid var(--gray-200)' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', alignItems: 'center', gap: '3rem' }}>
      <div>
        <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent)' }}>
          New Collection
        </span>
        <h2 style={{ fontSize: '3rem', margin: '1rem 0', lineHeight: 1.1, letterSpacing: '-0.03em', fontWeight: 700 }}>
          Quality goods for the modern professional.
        </h2>
        <p style={{ color: 'var(--gray-500)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '420px', lineHeight: 1.6 }}>
          Sustainable materials, timeless design, and a lifetime guarantee on every piece we make.
        </p>
        <button style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '0.875rem 1.75rem', fontSize: '0.95rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          Shop Collection <ArrowRight size={16} />
        </button>
      </div>
      <div style={{ height: '380px', backgroundColor: '#e5e7eb', borderRadius: '6px', overflow: 'hidden' }}>
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" 
          alt="Featured hero collection" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
    </div>
  </section>
);

const ProductCard = ({ product, onAddToCart }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
    <div style={{ aspectRatio: '4/5', backgroundColor: 'var(--gray-100)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <button 
        onClick={() => onAddToCart(product)}
        title="Add to cart"
        style={{ position: 'absolute', bottom: '12px', right: '12px', background: '#fff', border: '1px solid var(--gray-200)', padding: '0.5rem', borderRadius: '50%', boxShadow: '0 2px 6px rgba(0,0,0,0.06)', display: 'flex' }}
      >
        <ShoppingBag size={16} />
      </button>
    </div>
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 500, margin: 0 }}>{product.name}</h3>
        <span style={{ fontSize: '0.9375rem', fontWeight: 600 }}>${product.price}</span>
      </div>
      <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)', margin: '0.25rem 0 0' }}>{product.category}</p>
    </div>
  </div>
);

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar cartCount={cartCount} />
      <Hero />
      
      <main className="container" style={{ padding: '4rem 2rem', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 700 }}>Featured Products</h2>
            <p style={{ color: 'var(--gray-500)', margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Our best sellers this week.</p>
          </div>
          <a href="#" style={{ color: 'var(--text)', fontSize: '0.875rem', fontWeight: 600 }}>View All Items &rarr;</a>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          {PRODUCTS.map(p => (
            <ProductCard 
              key={p.id} 
              product={p} 
              onAddToCart={() => setCartCount(c => c + 1)} 
            />
          ))}
        </div>
      </main>

      <footer style={{ borderTop: '1px solid var(--gray-200)', padding: '3.5rem 0', background: '#fafafa' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem' }}>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 1rem' }}>MODERN_CO</h4>
            <p style={{ color: 'var(--gray-500)', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '280px', margin: 0 }}>
              Crafting essentials for the modern lifestyle. Built on the principles of sustainability and durability.
            </p>
          </div>
          {['Shop', 'Company', 'Support'].map(title => (
            <div key={title}>
              <h5 style={{ fontSize: '0.75rem', fontWeight: 700, margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--gray-500)' }}>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Overview</a></li>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Catalog</a></li>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Returns & FAQ</a></li>
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
