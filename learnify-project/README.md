# 📚 Learnify - Online Eğitim Platformu

Modern ve responsive bir online eğitim platformu. Yazılım, tasarım ve kişisel gelişim alanlarında kurslar sunmaktadır.

## 🚀 Teknolojiler

- **React** 19.0.1 - UI framework
- **Vite** 6.2.3 - Build tool
- **CSS** (Custom Utilities + Tailwind) - Styling
- **React Hook Form** - Form yönetimi
- **Lucide React** - Icons
- **Context API** - State management

## ⚡ Hızlı Başlangıç

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Kurulum

```bash
# Proje klasörüne git
cd learnify-project

# Bağımlılıkları yükle
npm install

# Dev server'ı başlat
npm run dev
```

Dev server açılacak: `http://localhost:5173`

### Build

```bash
npm run build
```

## 📁 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── Header.jsx      # Hero section
│   ├── Navbar.jsx      # Navigation (mobile responsive)
│   ├── CourseCard.jsx  # Kurs kartı
│   ├── CourseGrid.jsx  # Kurs grid listesi
│   ├── CourseDetail.jsx # Kurs detayı
│   ├── CategoriesList.jsx # Kategori listesi
│   ├── LoginModal.jsx  # Login formu
│   ├── AddCourseForm.jsx # Yeni kurs ekleme
│   └── diğer...
├── context/            # Context API
│   ├── UserContext.jsx
│   └── ThemeContext.jsx
├── hooks/              # Custom hooks (gelecek)
├── index.css          # Global styles
├── App.jsx            # Main component
└── main.jsx           # Entry point
```

## ✨ Özellikler

✅ Responsive tasarım (mobile, tablet, desktop)  
✅ Hamburger menu (mobil)  
✅ Kurs listeleme ve filtreleme  
✅ Kategori tabanlı görüntüleme  
✅ Kurs ekleme/silme  
✅ Arama fonksiyonu  
✅ Login sistemi  
✅ Modern UI/UX

## 🎨 Renk Paleti

- Primary (Mavi): `#4f46e5`
- Secondary (Mor): `#7c3aed`
- Emerald (Yeşil): `#10b981`
- Rose (Kırmızı): `#f43f5e`

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔒 Giriş Bilgileri (Demo)

```
Email: admin@learnify.com
Şifre: 123456
```

⚠️ **Not**: Demo amaçlıdır. Production'da güvenli authentication kullanılmalıdır.

## 🚧 Gelecek Özellikler

- [ ] localStorage veri persistance
- [ ] Custom hooks (useLocalStorage, useFetch)
- [ ] Backend API entegrasyonu
- [ ] TypeScript migration
- [ ] Unit tests

---

**Son Güncelleme**: Haziran 2026
