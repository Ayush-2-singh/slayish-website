'use client'

import { useEffect, useRef, useState } from 'react'
import { PHOTOS, CATEGORIES, FEATURED_PHOTOS } from '@/data/photos'
import type { Photo } from '@/data/photos'
import Image from 'next/image'

/* ══════════════════════════════════════════════════════════════════════════════
   SLAYISH — Handcrafted Gifts & Accessories
   Apple/Vercel-inspired premium business portfolio
══════════════════════════════════════════════════════════════════════════════ */

// ─── Intersection Observer Hook ───────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ─── Data ─────────────────────────────────────────────────────────────────
const PRODUCTS = [
  { name: 'Gift Hampers', desc: 'Curated boxes with love, wrapped in aesthetics', icon: '🎁', photo: '/images/gift-hamper-rakhi-1.jpg' },
  { name: 'Resin Art', desc: 'Custom resin pieces — earrings, coasters, keychains', icon: '🎨', photo: '/images/resin-earrings.jpg' },
  { name: 'Bouquets', desc: 'Hand-tied bouquets — roses, snacks, money', icon: '💐', photo: '/images/bouquet-roses-red.jpg' },
  { name: 'Love Letters', desc: 'Handwritten letters that speak from the heart', icon: '💌', photo: '/images/love-letter-bouquet.jpg' },
  { name: 'Crochet', desc: 'Handknitted beanies, scarves & accessories', icon: '🧶', photo: '/images/crochet-beanie-pink.jpg' },
  { name: 'Birthday Setups', desc: 'Complete birthday surprise packages', icon: '🎂', photo: '/images/birthday-setup-full.jpg' },
]

const TESTIMONIALS = [
  { name: 'Priya M.', text: 'Ordered a gift hamper for my bestie — she literally cried! The packaging was *chef\'s kiss* 🤌', rating: 5 },
  { name: 'Arjun K.', text: 'Got a custom resin frame for my girlfriend. She hasn\'t stopped showing it to everyone. Worth every penny!', rating: 5 },
  { name: 'Sneha R.', text: 'The love letter service is so unique. My boyfriend wasspeechless. 10/10 would recommend!', rating: 5 },
  { name: 'Vikram P.', text: 'Best quality handcrafted stuff I\'ve seen. The attention to detail is unreal. Pan India shipping was super fast too.', rating: 5 },
]

const STATS = [
  { value: '3.2K+', label: 'Happy Customers' },
  { value: '500+', label: 'Orders Delivered' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '28', label: 'States Covered' },
]

// ─── Components ───────────────────────────────────────────────────────────

function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
  }, [])
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
  }
  return (
    <button onClick={toggle} aria-label="Toggle theme" style={{
      width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border)',
      background: 'var(--bg-card)', cursor: 'pointer', display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontSize: 18, transition: 'all 0.2s ease',
    }}>
      {dark ? '☀️' : '🌙'}
    </button>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'color-mix(in srgb, var(--bg) 80%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease', padding: '0 24px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'var(--gradient-1)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 18, color: '#fff', fontWeight: 800,
          }}>S</div>
          <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Slay<span className="text-gradient-static">ish</span>
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="#products" style={{ fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Products</a>
          <a href="#gallery" style={{ fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Gallery</a>
          <a href="#reviews" style={{ fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Reviews</a>
          <a href="#contact" className="btn-glow btn-glow-primary" style={{ padding: '8px 20px', fontSize: 13 }}>Order Now</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const { ref, visible } = useInView(0.1)
  return (
    <section ref={ref} style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--gradient-hero)', padding: '120px 24px 80px', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'var(--glow)', filter: 'blur(80px)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(244,114,182,0.08)', filter: 'blur(80px)', opacity: 0.5 }} />

      <div style={{ maxWidth: 800, position: 'relative', zIndex: 1 }} className={visible ? 'animate-fade-up' : 'opacity-0'}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px',
          borderRadius: 999, border: '1px solid var(--border)', background: 'var(--bg-card)',
          fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500, marginBottom: 32,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          Pan India Shipping · DM to Order
        </div>

        <h1 style={{
          fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 800, lineHeight: 1.05,
          letterSpacing: '-0.03em', marginBottom: 24, color: 'var(--text-primary)',
        }}>
          Handcrafted with<br />
          <span className="text-gradient">love & artistry</span>
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text-secondary)',
          lineHeight: 1.6, maxWidth: 560, margin: '0 auto 40px', fontWeight: 400,
        }}>
          Custom gifts, resin art, bouquets & love letters — each piece made with intention, delivered with care.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn-glow btn-glow-primary" style={{ padding: '14px 32px', fontSize: 15 }}>
            🎁 Order Now
          </a>
          <a href="#products" className="btn-glow btn-glow-secondary" style={{ padding: '14px 32px', fontSize: 15 }}>
            Explore Products →
          </a>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
          marginTop: 64, borderRadius: 'var(--radius)', overflow: 'hidden',
          border: '1px solid var(--border)', background: 'var(--bg-card)',
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: '20px 16px', textAlign: 'center',
              borderRight: i < 3 ? '1px solid var(--border)' : 'none',
            }}>
              <p style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em' }}>{s.value}</p>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '4px 0 0', fontWeight: 500 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Products() {
  const { ref, visible } = useInView(0.1)
  return (
    <section id="products" ref={ref} style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div className={visible ? 'animate-fade-up' : 'opacity-0'} style={{ textAlign: 'center', marginBottom: 60 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent-dark)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>What We Make</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
          Handcrafted for <span className="text-gradient-static">every occasion</span>
        </h2>
      </div>

      <div className={`stagger ${visible ? '' : 'opacity-0'}`} style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16,
      }}>
        {PRODUCTS.map((p, i) => (
          <div key={i} className="glass" style={{ overflow: 'hidden', cursor: 'default' }}>
            <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
              <img src={p.photo} alt={p.name} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.5s ease',
              }} loading="lazy"
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{
                position: 'absolute', top: 12, left: 12, width: 40, height: 40,
                borderRadius: 10, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 20,
                background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}>{p.icon}</div>
            </div>
            <div style={{ padding: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, letterSpacing: '-0.01em' }}>{p.name}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Gallery() {
  const { ref, visible } = useInView(0.1)
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const filtered = activeCategory === 'all' ? PHOTOS : PHOTOS.filter(p => p.category === activeCategory)

  return (
    <section id="gallery" ref={ref} style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div className={visible ? 'animate-fade-up' : 'opacity-0'} style={{ textAlign: 'center', marginBottom: 40 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent-dark)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Our Work</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
          Every piece tells a <span className="text-gradient-static">story</span>
        </h2>
      </div>

      {/* Category Filter */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
        {CATEGORIES.map(c => (
          <button key={c.key} onClick={() => setActiveCategory(c.key)} style={{
            padding: '8px 18px', borderRadius: 999, border: '1px solid var(--border)',
            background: activeCategory === c.key ? 'var(--text-primary)' : 'transparent',
            color: activeCategory === c.key ? 'var(--bg)' : 'var(--text-secondary)',
            fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
            transition: 'all 0.2s ease',
          }}>
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="insta-grid" style={{ borderRadius: 'var(--radius)', overflow: 'hidden' }}>
        {filtered.map((p, i) => (
          <div key={p.src} onClick={() => setSelectedPhoto(p)} style={{
            aspectRatio: '1', position: 'relative', overflow: 'hidden', cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={p.src} alt={p.alt} style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }} loading="lazy" />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '40px 12px 10px',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              color: '#fff', fontSize: 12, fontWeight: 500,
              opacity: 0, transition: 'opacity 0.3s ease',
            }}>
              {p.alt}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div onClick={() => setSelectedPhoto(null)} style={{
          position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.9)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 20, cursor: 'zoom-out', animation: 'fadeIn 0.2s ease',
        }}>
          <img src={selectedPhoto.src} alt={selectedPhoto.alt} style={{
            maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: 12,
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }} />
          <div style={{
            position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)',
            padding: '10px 20px', borderRadius: 999, color: '#fff',
            fontSize: 13, fontWeight: 500, textAlign: 'center', maxWidth: '80vw',
          }}>
            {selectedPhoto.alt}
          </div>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <a href="https://www.instagram.com/slayish3/" target="_blank" rel="noopener noreferrer" className="btn-glow btn-glow-secondary">
          📸 Follow on Instagram — @{PHOTOS.length}+ posts
        </a>
      </div>
    </section>
  )
}

function Process() {
  const { ref, visible } = useInView(0.1)
  const steps = [
    { num: '01', title: 'DM Your Vision', desc: 'Tell us what you want — the occasion, the vibe, the person.' },
    { num: '02', title: 'We Craft It', desc: 'Our artisans handcraft your order with premium materials.' },
    { num: '03', title: 'Shipped to You', desc: 'Carefully packaged and delivered Pan India at your doorstep.' },
  ]
  return (
    <section ref={ref} style={{ padding: '100px 24px', maxWidth: 1000, margin: '0 auto' }}>
      <div className={visible ? 'animate-fade-up' : 'opacity-0'} style={{ textAlign: 'center', marginBottom: 60 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent-dark)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>How It Works</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
          Three simple <span className="text-gradient-static">steps</span>
        </h2>
      </div>

      <div className={`stagger ${visible ? '' : 'opacity-0'}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '32px 20px' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', margin: '0 auto 20px',
              background: 'var(--gradient-1)', color: '#fff', fontSize: 20, fontWeight: 800,
              fontFamily: 'var(--font-playfair), serif',
            }}>{s.num}</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8, letterSpacing: '-0.01em' }}>{s.title}</h3>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 280, margin: '0 auto' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const { ref, visible } = useInView(0.1)
  return (
    <section id="reviews" ref={ref} style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div className={visible ? 'animate-fade-up' : 'opacity-0'} style={{ textAlign: 'center', marginBottom: 60 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent-dark)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Reviews</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
          Loved by <span className="text-gradient-static">everyone</span>
        </h2>
      </div>

      <div className={`stagger ${visible ? '' : 'opacity-0'}`} style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16,
      }}>
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="glass" style={{ padding: 28 }}>
            <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
              {Array.from({ length: t.rating }).map((_, j) => (
                <span key={j} style={{ fontSize: 16 }}>⭐</span>
              ))}
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>
              &ldquo;{t.text}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'var(--gradient-1)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 700,
              }}>{t.name[0]}</div>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function InstagramFeed() {
  const { ref, visible } = useInView(0.1)
  const latestPhotos = FEATURED_PHOTOS.slice(0, 6)

  return (
    <section ref={ref} style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div className={visible ? 'animate-fade-up' : 'opacity-0'} style={{ textAlign: 'center', marginBottom: 60 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent-dark)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>From Instagram</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
          Follow <span className="text-gradient-static">@slayish3</span>
        </h2>
        <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 12 }}>3,200+ followers who love handcrafted gifts</p>
      </div>

      <div className={`stagger ${visible ? '' : 'opacity-0'}`} style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16,
      }}>
        {latestPhotos.map((p, i) => (
          <div key={i} className="glass" style={{ overflow: 'hidden' }}>
            <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
              <img src={p.src} alt={p.alt} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.5s ease',
              }} loading="lazy"
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
            <div style={{ padding: 20 }}>
              <p style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: 8 }}>{p.alt}</p>
              <span style={{ fontSize: 12, color: 'var(--accent-dark)', fontWeight: 600 }}>{p.category}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <a href="https://www.instagram.com/slayish3/" target="_blank" rel="noopener noreferrer" className="btn-glow btn-glow-primary">
          📸 Follow @slayish3 on Instagram
        </a>
      </div>
    </section>
  )
}

function CTA() {
  const { ref, visible } = useInView(0.1)
  return (
    <section id="contact" ref={ref} style={{ padding: '100px 24px' }}>
      <div className={visible ? 'animate-fade-up' : 'opacity-0'} style={{
        maxWidth: 800, margin: '0 auto', textAlign: 'center', padding: '60px 40px',
        borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)',
        background: 'var(--bg-card)', position: 'relative', overflow: 'hidden',
      }}>
        {/* Glow */}
        <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: 400, height: 400, borderRadius: '50%', background: 'var(--glow)', filter: 'blur(80px)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 16 }}>
            Ready to <span className="text-gradient-static">slay</span>?
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 480, margin: '0 auto 36px' }}>
            DM us on Instagram with your vision. We&apos;ll craft something beautiful, just for you.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.instagram.com/slayish3/" target="_blank" rel="noopener noreferrer" className="btn-glow btn-glow-primary" style={{ padding: '14px 32px', fontSize: 15 }}>
              📩 DM on Instagram
            </a>
            <a href="https://www.instagram.com/slayish3/" target="_blank" rel="noopener noreferrer" className="btn-glow btn-glow-secondary" style={{ padding: '14px 32px', fontSize: 15 }}>
              📸 @slayish3
            </a>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 20 }}>
            🚫 No COD · 📦 Pan India Shipping · 💳 Online Payment
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)', padding: '40px 24px',
      maxWidth: 1200, margin: '0 auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8, background: 'var(--gradient-1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 13, fontWeight: 800,
          }}>S</div>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>Slayish</span>
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="https://www.instagram.com/slayish3/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Instagram</a>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>© 2026 Slayish</span>
        </div>
      </div>
    </footer>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Gallery />
      <Process />
      <Testimonials />
      <InstagramFeed />
      <CTA />
      <Footer />
    </main>
  )
}
