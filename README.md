✨ ModaMatch
Terzi ve Moda Platformu

👗 “Tarzını Tasarla, En Doğru Ustayla Buluş.” ✂️

---

📌 Proje Hakkında

ModaMatch, kullanıcıları terziler, butik işletmeleri ve moda tasarımcıları ile buluşturmayı amaçlayan modern bir full-stack moda platformudur.

Projenin temel amacı:

- Yerel terzileri dijital ortama taşımak
- Kullanıcıların kendilerine uygun terzilere ulaşmasını kolaylaştırmak
- Modern ve kullanıcı dostu bir moda deneyimi sunmak
- Gelecekte yapay zeka destekli sistemler için altyapı oluşturmak

Kullanıcılar sistem üzerinden:

✅ Terzi keşfedebilir  
✅ Terzi detaylarını görüntüleyebilir  
✅ Favorilere ekleme yapabilir  
✅ Mesaj gönderebilir  
✅ Randevu oluşturabilir  
✅ Profil bilgilerini yönetebilir  

---

🎯 Projenin Amacı

ModaMatch projesi:

- Terzi ve kullanıcı iletişimini dijitalleştirmeyi
- Küçük işletmeleri desteklemeyi
- Kullanıcı deneyimini geliştirmeyi
- Responsive ve modern bir platform oluşturmayı
- Gelecekte AI destekli moda sistemleri geliştirmeyi

amaçlamaktadır.

---

🧠 Proje Fikri ve Tasarım Süreci

ModaMatch fikri:

> “Tarzını Tasarla, En Doğru Ustayla Buluş.”

sloganı ile ortaya çıkmıştır.

Projenin ilk tasarım sürecinde aşağıdaki sistemler planlanmıştır:

- Yakındaki terziler sistemi
- AI destekli moda önerileri planı
- Kullanıcı-terzi mesajlaşması
- Randevu sistemi
- Fotoğraf ile kıyafet analizi fikri
- Kişisel stil önerileri

Bazı gelişmiş sistemler UI/UX olarak tasarlanmış ancak proje süresi nedeniyle tam entegre edilememiştir.

---

🚀 Gerçekleştirilen Özellikler

| Özellik | Açıklama |
|---|---|
| Authentication Sistemi | Kullanıcı kayıt ve giriş sistemi |
| Terzi Listeleme | Terzi kartları ve detay ekranları |
| Favoriler Sistemi | Favorilere ekleme ve çıkarma |
| Mesajlaşma Sistemi | Kullanıcı-terzi iletişimi |
| Randevu Sistemi | Tarih ve saat seçimi |
| Responsive Tasarım | Mobil, tablet ve desktop uyumluluğu |

---

⚠️ Planlanan Ancak Tamamlanamayan Özellikler

| Planlanan Özellik | Durum |
|---|---|
| AI öneri sistemi | Tasarlandı ancak entegre edilmedi |
| Gerçek zamanlı chat | Planlandı |
| Harita API sistemi | UI tasarlandı |
| JWT Authentication | Planlandı |
| Bildirim sistemi | Planlandı |
| Ödeme sistemi | Planlandı |
| Ölçü analizi sistemi | Fikir aşamasında |
| Fotoğraf ile kıyafet analizi | UI tasarlandı |

---

🛠️ Kullanılan Teknolojiler

| Katman | Teknolojiler |
|---|---|
| Frontend | React.js, Vite, CSS3, React Router DOM |
| Backend | Node.js, Express.js |
| Veritabanı | PostgreSQL |
| Geliştirme Araçları | VS Code, Git, GitHub, Postman |
| Paket Yönetimi | npm |
| API Testi | Postman |

---

🤖 Kullanılan Yapay Zeka Araçları

| Yapay Zeka Aracı | Versiyon | Kullanım Amacı |
|---|---|---|
| ChatGPT | GPT-5.5 | Kod geliştirme, hata çözme, responsive yapı |
| Gemini | Gemini 3.1 | UI/UX fikirleri ve proje planlama |

Yapay zeka araçları:

- Kod geliştirme desteği
- Responsive tasarım önerileri
- UI/UX fikirleri
- Hata çözme
- Sistem planlama

amaçlarıyla kullanılmıştır.

---

🏗️ Yazılım Mimarisi

## Sistem Mimarisi

```txt
Kullanıcı
   ↓
React Frontend
   ↓
Express.js API
   ↓
PostgreSQL Database
```

---

🧩 Frontend Mimarisi

- Component tabanlı React yapısı
- Sayfa bazlı routing sistemi
- Responsive layout mimarisi
- Tekrar kullanılabilir component yapısı

---

⚙️ Backend Mimarisi

- REST API yapısı
- Express.js server mimarisi
- PostgreSQL bağlantısı
- Endpoint tabanlı request yönetimi

---

# 📂 Proje Yapısı

```txt
ModaMatch
 ├── modamatch-frontend
 │     ├── src
 │     ├── public
 │     ├── components
 │     ├── pages
 │     └── package.json
 │
 └── modamatch-backend
       ├── node_modules
       ├── package-lock.json
       ├── package.json
       └── server.js
```

---

# ⚙️ Kurulum Rehberi

## 1️⃣ Projeyi Klonlama

```bash
git clone https://github.com/Ayse-rumeysa964/ModaMatch.git
```

---

## 2️⃣ Frontend Kurulumu

```bash
cd modamatch-frontend

npm install

npm run dev
```

Frontend çalışacağı adres:

```txt
http://localhost:5173
```

---

## 3️⃣ Backend Kurulumu

```bash
cd modamatch-backend

npm install

node server.js
```

Backend çalışacağı adres:

```txt
http://localhost:5000
```

---

## 4️⃣ PostgreSQL Kurulumu

PostgreSQL içerisinde:

```txt
modamatch
```

isimli bir database oluşturulmalıdır.

Daha sonra:

```txt
server.js
```

dosyası içerisindeki PostgreSQL bağlantı bilgileri düzenlenmelidir.

Örnek:

```js
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "modamatch",
  password: "ŞİFRENİZ",
  port: 5432,
});
```

---

# 🖼️ Kullanıcı Arayüzü Tasarımları

Proje geliştirme sürecinde aşağıdaki arayüzler tasarlanmıştır:

- Login & Register ekranları
- Mesajlaşma ekranı
- Yakındaki terziler ekranı
- Moda keşfetme ekranları
- Terzi detay ekranları
- Randevu ekranları

Tasarım sürecinde:

✅ modern görünüm  
✅ responsive yapı  
✅ kullanıcı dostu navigasyon  
✅ erişilebilirlik  

hedeflenmiştir.

---

📚 Proje Uyumluluğu

| Kriter | Açıklama |
|---|---|
| Dil Modeli Kullanımı | ChatGPT ve Gemini kullanılmıştır |
| Teknik Değerlendirme | Component tabanlı yapı ve temiz UI mimarisi uygulanmıştır |
| Dokümantasyon | Detaylı README dokümantasyonu hazırlanmıştır |
| Veritabanı Kullanımı | PostgreSQL kullanılmıştır |

---

# 🧼 Yazılım Geliştirme Yaklaşımları

Projede:

- Component tabanlı mimari
- Temiz kod yaklaşımı
- Responsive tasarım prensipleri
- Frontend/backend ayrımı
- Düzenli klasör yapısı

uygulanmıştır.

Kod düzeni ve okunabilirliği için:

- Modüler yapı
- Tekrar kullanılabilir component sistemi

kullanılmıştır.

---

# 🔒 Güvenlik Yaklaşımı

Proje geliştirme sürecinde:

- Hassas bilgilerin korunması
- SQL Injection riskleri
- Güvenli kullanıcı işlemleri
- Hardcoded şifrelerden kaçınma

konularına dikkat edilmiştir.

Gelecek sürümlerde:

- JWT Authentication
- Şifre hashleme
- Yetkilendirme sistemi

eklenmesi planlanmaktadır.

---

# 🧠 Yapay Zeka Araştırmaları

Proje geliştirme sürecinde:

- yapay zeka destekli öneri sistemleri
- kullanıcı eşleştirme sistemleri
- modern AI mimarileri

üzerine araştırmalar yapılmıştır.

Bu sistemler gelecekte:

- akıllı terzi önerileri
- kişisel stil analizi
- moda asistanı sistemleri

gibi özelliklerde kullanılabilecek altyapılar olarak değerlendirilmiştir.

---

# 🚀 Geliştirme Yol Haritası

```txt
✅ Authentication Sistemi
✅ Responsive UI
✅ PostgreSQL Entegrasyonu
✅ Mesajlaşma Arayüzü
✅ Randevu Sistemi
⬜ JWT Authentication
⬜ Gerçek Zamanlı Chat
⬜ AI Öneri Sistemi
⬜ Harita API Entegrasyonu
⬜ Mobil Uygulama
```

---

# 👩‍💻 Geliştiriciler

## Ayşe Rümeysa Özçelik  
## Melike Bayer

---

# 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiş olup gelecekte gerçek bir uygulamaya dönüştürülmesi hedeflenmektedir.
