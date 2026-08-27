'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from 'framer-motion'
import { PHOTOS, FEATURED_PHOTOS } from '@/data/photos'
import type { Photo } from '@/data/photos'
import Logo, { LogoMark } from '@/components/Logo'

/* ══════════════════════════════════════════════════════════════════════════════
   SLAYISH — Handcrafted Gifts & Accessories
   Chocolatey Brown + Copper | Framer Motion | Mobile First
══════════════════════════════════════════════════════════════════════════════ */

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
  { name: 'Sneha R.', text: 'The love letter service is so unique. My boyfriend was speechless. 10/10 would recommend!', rating: 5 },
  { name: 'Vikram P.', text: 'Best quality handcrafted stuff I\'ve seen. The attention to detail is unreal. Pan India shipping was super fast too.', rating: 5 },
]

const STATS = [
  { value: '3.2K+', label: 'Happy Customers' },
  { value: '500+', label: 'Orders Delivered' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '28', label: 'States Covered' },
]

// ─── Framer Variants ──────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
}

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
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      style={{
        width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border)',
        background: 'var(--bg-card)', cursor: 'pointer', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: 18, transition: 'all 0.2s ease',
      }}
    >
      {dark ? '☀️' : '🌙'}
    </motion.button>
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
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease', padding: '0 16px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Logo size={36} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.08em', lineHeight: 1.1 }}>SLAYISH</span>
            <span style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 500, fontStyle: 'italic' }}>Gifts and Accessories</span>
          </div>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="#products" className="desktop-nav-link">Products</a>
          <a href="#gallery" className="desktop-nav-link">Gallery</a>
          <a href="#reviews" className="desktop-nav-link">Reviews</a>
          <motion.a href="#contact" className="btn-glow btn-glow-primary" style={{ padding: '8px 20px', fontSize: 13 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Order Now</motion.a>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--gradient-hero)', padding: '100px 16px 60px', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Animated background orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '15%', left: '5%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(139,69,19,0.06)', filter: 'blur(80px)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ position: 'absolute', bottom: '15%', right: '5%', width: 250, height: 250, borderRadius: '50%', background: 'rgba(184,115,51,0.06)', filter: 'blur(80px)' }}
      />

      <motion.div style={{ maxWidth: 800, position: 'relative', zIndex: 1, y, opacity }}>
        <motion.div
          variants={popIn}
          initial="hidden"
          animate="visible"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px',
            borderRadius: 999, border: '1px solid var(--border)', background: 'var(--bg-card)',
            fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500, marginBottom: 32,
          }}
        >
          <span style={{
            background: 'var(--gradient-1)', backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', animation: 'gradientShift 3s ease infinite',
            fontWeight: 700, fontSize: 14,
          }}>✨</span>
          <span style={{
            background: 'var(--gradient-1)', backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', animation: 'gradientShift 3s ease infinite',
            fontWeight: 600,
          }}>Pan India Shipping · DM to Order</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 'clamp(36px, 7vw, 76px)', fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-0.03em', marginBottom: 24, color: 'var(--text-primary)',
          }}
        >
          Handcrafted with<br />
          <span className="text-gradient">love & artistry</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          style={{
            fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--text-secondary)',
            lineHeight: 1.6, maxWidth: 520, margin: '0 auto 36px', fontWeight: 400,
          }}
        >
          Custom gifts, resin art, bouquets & love letters — each piece made with intention, delivered with care.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a href="#contact" className="btn-glow btn-glow-primary" style={{ padding: '14px 32px', fontSize: 15 }} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            🎁 Order Now
          </motion.a>
          <motion.a href="#products" className="btn-glow btn-glow-secondary" style={{ padding: '14px 32px', fontSize: 15 }} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            Explore Products →
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
            marginTop: 56, borderRadius: 'var(--radius)', overflow: 'hidden',
            border: '1px solid var(--border)', background: 'var(--bg-card)',
          }}
        >
          {STATS.map((s, i) => (
            <motion.div key={i} variants={staggerItem} style={{
              padding: '20px 12px', textAlign: 'center',
              borderRight: i < 3 ? '1px solid var(--border)' : 'none',
            }}>
              <p style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em' }}>{s.value}</p>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '4px 0 0', fontWeight: 500 }}>{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function Products() {
  return (
    <section id="products" style={{ padding: '80px 16px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 48 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>What We Make</p>
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
          Handcrafted for <span className="text-gradient-static">every occasion</span>
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}
      >
        {PRODUCTS.map((p, i) => (
          <motion.div key={i} variants={staggerItem} whileHover={{ y: -6, scale: 1.02 }} className="glass" style={{ overflow: 'hidden' }}>
            <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
              <motion.img src={p.photo} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} loading="lazy" />
              <div style={{
                position: 'absolute', top: 10, left: 10, width: 36, height: 36,
                borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}>{p.icon}</div>
            </div>
            <div style={{ padding: 18 }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{p.name}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <section id="gallery" style={{ padding: '80px 16px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 32 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Our Work</p>
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
          Every piece tells a <span className="text-gradient-static">story</span>
        </h2>
      </motion.div>

      {/* All photos grid — no category filter */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="insta-grid"
        style={{ borderRadius: 'var(--radius)', overflow: 'hidden' }}
      >
        {PHOTOS.map((p) => (
          <motion.div
            key={p.src}
            variants={staggerItem}
            onClick={() => setSelectedPhoto(p)}
            whileHover={{ scale: 1.03, zIndex: 2 }}
            style={{ aspectRatio: '1', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
          >
            <img src={p.src} alt={p.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.92)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 16, cursor: 'zoom-out',
            }}
          >
            <motion.img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring' as const, stiffness: 300, damping: 25 }}
              style={{ maxWidth: '92vw', maxHeight: '82vh', objectFit: 'contain', borderRadius: 12 }}
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
                background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)',
                padding: '10px 20px', borderRadius: 999, color: '#fff',
                fontSize: 12, fontWeight: 500, textAlign: 'center', maxWidth: '85vw',
              }}
            >
              {selectedPhoto.alt}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginTop: 28 }}>
        <motion.a href="https://www.instagram.com/slayish3/" target="_blank" rel="noopener noreferrer" className="btn-glow btn-glow-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          📸 Follow on Instagram — {PHOTOS.length}+ posts
        </motion.a>
      </motion.div>
    </section>
  )
}

function Process() {
  const steps = [
    { num: '01', title: 'DM Your Vision', desc: 'Tell us what you want — the occasion, the vibe, the person.' },
    { num: '02', title: 'We Craft It', desc: 'Our artisans handcraft your order with premium materials.' },
    { num: '03', title: 'Shipped to You', desc: 'Carefully packaged and delivered Pan India at your doorstep.' },
  ]
  return (
    <section style={{ padding: '80px 16px', maxWidth: 900, margin: '0 auto' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 48 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>How It Works</p>
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
          Three simple <span className="text-gradient-static">steps</span>
        </h2>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
        {steps.map((s, i) => (
          <motion.div key={i} variants={staggerItem} whileHover={{ y: -8, scale: 1.03 }} style={{ textAlign: 'center', padding: '28px 16px' }}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              style={{
                width: 60, height: 60, borderRadius: '50%', display: 'flex', alignItems: 'center',
                justifyContent: 'center', margin: '0 auto 18px',
                background: 'linear-gradient(135deg, #3c1a0a, #5c2a12)', color: '#c9a87c', fontSize: 18, fontWeight: 800,
                fontFamily: 'var(--font-playfair), serif', border: '2px solid rgba(184,115,51,0.2)',
              }}
            >{s.num}</motion.div>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{s.title}</h3>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 260, margin: '0 auto' }}>{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="reviews" style={{ padding: '80px 16px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 48 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Reviews</p>
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
          Loved by <span className="text-gradient-static">everyone</span>
        </h2>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {TESTIMONIALS.map((t, i) => (
          <motion.div key={i} variants={staggerItem} whileHover={{ y: -4 }} className="glass" style={{ padding: 24 }}>
            <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
              {Array.from({ length: t.rating }).map((_, j) => (
                <motion.span key={j} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: j * 0.1 }} style={{ fontSize: 14 }}>⭐</motion.span>
              ))}
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16, fontStyle: 'italic' }}>
              &ldquo;{t.text}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'linear-gradient(135deg, #3c1a0a, #5c2a12)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: '#c9a87c', fontSize: 13, fontWeight: 700,
                border: '1px solid rgba(184,115,51,0.2)',
              }}>{t.name[0]}</div>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{t.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function InstagramFeed() {
  const latestPhotos = FEATURED_PHOTOS.slice(0, 6)
  return (
    <section style={{ padding: '80px 16px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 48 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>From Instagram</p>
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
          Follow <span className="text-gradient-static">@slayish3</span>
        </h2>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8 }}>3,200+ followers who love handcrafted gifts</p>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {latestPhotos.map((p, i) => (
          <motion.div key={i} variants={staggerItem} whileHover={{ y: -6 }} className="glass" style={{ overflow: 'hidden' }}>
            <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
              <motion.img src={p.src} alt={p.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} whileHover={{ scale: 1.06 }} transition={{ duration: 0.4 }} loading="lazy" />
            </div>
            <div style={{ padding: 16 }}>
              <p style={{ fontSize: 13, color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: 6 }}>{p.alt}</p>
              <span style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600 }}>{p.category}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginTop: 28 }}>
        <motion.a href="https://www.instagram.com/slayish3/" target="_blank" rel="noopener noreferrer" className="btn-glow btn-glow-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          📸 Follow @slayish3 on Instagram
        </motion.a>
      </motion.div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" style={{ padding: '80px 16px' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={scaleIn} style={{
        maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '48px 24px',
        borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)',
        background: 'var(--bg-card)', position: 'relative', overflow: 'hidden',
      }}>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: 350, height: 350, borderRadius: '50%', background: 'rgba(184,115,51,0.08)', filter: 'blur(80px)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 14 }}>
            Ready to <span className="text-gradient-static">slay</span>?
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 440, margin: '0 auto 32px' }}>
            DM us on Instagram with your vision. We&apos;ll craft something beautiful, just for you.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a href="https://www.instagram.com/slayish3/" target="_blank" rel="noopener noreferrer" className="btn-glow btn-glow-primary" style={{ padding: '14px 28px', fontSize: 14 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              📩 DM on Instagram
            </motion.a>
            <motion.a href="https://www.instagram.com/slayish3/" target="_blank" rel="noopener noreferrer" className="btn-glow btn-glow-secondary" style={{ padding: '14px 28px', fontSize: 14 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              📸 @slayish3
            </motion.a>
          </motion.div>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 18 }}>
            🚫 No COD · 📦 Pan India Shipping · 💳 Online Payment
          </p>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <motion.footer initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{
      borderTop: '1px solid var(--border)', padding: '32px 16px',
      maxWidth: 1200, margin: '0 auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <LogoMark size={24} />
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.05em' }}>SLAYISH</span>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="https://www.instagram.com/slayish3/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500 }}>Instagram</a>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>© 2026 Slayish</span>
        </div>
      </div>
    </motion.footer>
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

      {/* Desktop nav link styles */}
      <style jsx>{`
        .desktop-nav-link {
          font-size: 13px; color: var(--text-secondary); text-decoration: none;
          font-weight: 500; transition: color 0.2s; display: none;
        }
        @media (min-width: 768px) {
          .desktop-nav-link { display: block; }
        }
      `}</style>
    </main>
  )
}
