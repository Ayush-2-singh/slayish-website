export type Photo = {
  src: string
  alt: string
  category: string
  featured?: boolean
}

export const PHOTOS: Photo[] = [
  // ─── Gift Hampers ───
  { src: '/images/gift-hamper-rakhi-1.jpg', alt: 'Raksha Bandhan gift hamper with Scrabble letters', category: 'Gift Hampers', featured: true },
  { src: '/images/gift-hamper-rakhi-2.jpg', alt: 'Handcrafted Rakhi gift box with bouquet', category: 'Gift Hampers' },
  { src: '/images/gift-hamper-rakhi-3.jpg', alt: 'Premium Raksha Bandhan hamper with chocolates', category: 'Gift Hampers' },
  { src: '/images/gift-hamper-men-1.jpg', alt: "Men's grooming gift hamper with Nivea & KitKat", category: 'Gift Hampers' },
  { src: '/images/gift-hamper-men-2.jpg', alt: "Premium men's gift box with rose bouquet", category: 'Gift Hampers' },
  { src: '/images/gift-hersheys-wheels.jpg', alt: "Hershey's & Hot Wheels surprise gift box", category: 'Gift Hampers' },
  { src: '/images/gift-wrapping-black.jpg', alt: 'Elegant black gift wrapping with red ribbons', category: 'Gift Hampers' },

  // ─── Bouquets ───
  { src: '/images/bouquet-roses-red.jpg', alt: 'Red rose bouquet with Ferrero Rocher', category: 'Bouquets', featured: true },
  { src: '/images/bouquet-pink-flowers.jpg', alt: 'Pink translucent flower bouquet with Lakme gift', category: 'Bouquets' },
  { src: '/images/bouquet-white-roses.jpg', alt: 'Elegant white rose bouquet with black wrapping', category: 'Bouquets' },
  { src: '/images/bouquet-roses-spiderman.jpg', alt: 'Spiderman themed red rose bouquet', category: 'Bouquets' },
  { src: '/images/bouquet-money-1.jpg', alt: 'Money bouquet with Cadbury chocolates', category: 'Bouquets', featured: true },
  { src: '/images/bouquet-money-2.jpg', alt: 'Custom currency note bouquet with roses', category: 'Bouquets' },
  { src: '/images/bouquet-money-3.jpg', alt: 'Premium money bouquet with black wrapping', category: 'Bouquets' },
  { src: '/images/bouquet-snack-1.jpg', alt: 'KitKat & Pringles snack bouquet', category: 'Bouquets' },
  { src: '/images/bouquet-snack-2.jpg', alt: 'Chocolate & chips snack bouquet', category: 'Bouquets' },
  { src: '/images/bouquet-snack-3.jpg', alt: 'Bingo & KitKat snack arrangement', category: 'Bouquets' },
  { src: '/images/bouquet-snack-4.jpg', alt: 'Premium snack bouquet with red ribbon', category: 'Bouquets' },
  { src: '/images/love-letter-bouquet.jpg', alt: 'Pink satin rose bouquet with handwritten love letter', category: 'Bouquets' },

  // ─── Resin Art ───
  { src: '/images/resin-earrings.jpg', alt: 'Handmade resin daisy flower jhumka earrings', category: 'Resin Art', featured: true },

  // ─── Crochet ───
  { src: '/images/crochet-beanie-pink.jpg', alt: 'Black crochet beanie with pink bow & heart', category: 'Crochet', featured: true },
  { src: '/images/crochet-scarf-red.jpg', alt: 'Red handknitted scarf with cream bow', category: 'Crochet' },

  // ─── Rakhi / Bracelets ───
  { src: '/images/rakhi-bracelet-red.jpg', alt: 'Handmade red rose rakhi bracelet', category: 'Rakhi', featured: true },
  { src: '/images/rakhi-bracelet-red-2.jpg', alt: 'Red crochet rose bracelet pair', category: 'Rakhi' },

  // ─── Love Letters & Cards ───
  { src: '/images/birthday-card-text.jpg', alt: 'Handwritten birthday letters in black envelope', category: 'Love Letters', featured: true },

  // ─── Birthday Setups ───
  { src: '/images/birthday-scrapbook.jpg', alt: 'Happy Birthday photo scrapbook with messages', category: 'Birthday Setups', featured: true },
  { src: '/images/birthday-scrapbook-2.jpg', alt: 'Birthday scrapbook with photos and Hindi poetry', category: 'Birthday Setups' },
  { src: '/images/birthday-setup-gifts.jpg', alt: 'Birthday surprise with numbered gift boxes', category: 'Birthday Setups' },
  { src: '/images/birthday-setup-full.jpg', alt: 'Full birthday setup with balloons, gifts & cake', category: 'Birthday Setups' },
  { src: '/images/birthday-setup-balloons.jpg', alt: 'Birthday balloon arch with wrapped presents', category: 'Birthday Setups' },
]

export const CATEGORIES = [
  { key: 'all', label: 'All Work', icon: '✨' },
  { key: 'Gift Hampers', label: 'Gift Hampers', icon: '🎁' },
  { key: 'Bouquets', label: 'Bouquets', icon: '💐' },
  { key: 'Resin Art', label: 'Resin Art', icon: '🎨' },
  { key: 'Crochet', label: 'Crochet', icon: '🧶' },
  { key: 'Rakhi', label: 'Rakhi', icon: '🪢' },
  { key: 'Love Letters', label: 'Love Letters', icon: '💌' },
  { key: 'Birthday Setups', label: 'Birthday Setups', icon: '🎂' },
]

export const FEATURED_PHOTOS = PHOTOS.filter(p => p.featured)
