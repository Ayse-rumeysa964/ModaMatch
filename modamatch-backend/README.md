⚙️ ModaMatch Backend

ModaMatch backend tarafı, frontend ile veritabanı arasındaki iletişimi sağlayan server yapısını içermektedir.

Backend kısmı Node.js, Express.js ve PostgreSQL kullanılarak geliştirilmiştir.

---

# 🚀 Özellikler

- REST API yapısı
- Kullanıcı işlemleri
- PostgreSQL veritabanı bağlantısı
- Terzi verilerinin yönetimi
- Mesajlaşma altyapısı
- Randevu sistemi altyapısı
- Frontend ile veri iletişimi

---

# 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|---|---|
| Node.js | Backend çalışma ortamı |
| Express.js | Server ve API yönetimi |
| PostgreSQL | Veritabanı sistemi |
| npm | Paket yönetimi |
| Postman | API test işlemleri |

---

# 🏗️ Backend Mimarisi

```txt
Client
   ↓
Express.js API
   ↓
PostgreSQL Database
```

---

📂 Klasör Yapısı

```txt
modamatch-backend
 ├── node_modules
 ├── package-lock.json
 ├── package.json
 └── server.js
```
---

# ⚙️ Kurulum

## Paketleri yükleme

```bash
npm install
```

---

## Server çalıştırma

```bash
node server.js
```

---

Backend çalışacağı adres:

```txt
http://localhost:5000
```

---

# 🗄️ Veritabanı Kurulumu

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

Örnek bağlantı:

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

# 🔌 API Yapısı

Backend tarafında:

- Kullanıcı işlemleri
- Veri listeleme
- Veri gönderme
- API endpoint yönetimi

işlemleri gerçekleştirilmiştir.

---

# 🧼 Kod Yapısı

Backend geliştirme sürecinde:

- Düzenli klasör yapısı
- Okunabilir kod yapısı
- Modüler sistem yaklaşımı
- Frontend/backend ayrımı

dikkate alınmıştır.

---

# 🔒 Güvenlik Yaklaşımı

Backend geliştirme sürecinde:

- Hassas bilgilerin korunması
- Veritabanı bağlantı güvenliği
- Hardcoded şifrelerden kaçınılması

konularına dikkat edilmiştir.

Gelecek sürümlerde:

- JWT Authentication
- Yetkilendirme sistemi
- Şifre hashleme

eklenmesi planlanmaktadır.

---
👩‍💻 Geliştirici

Ayşe Rümeysa Özçelik
Meelike Bayer
---

# 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiş olup gelecekte gerçek bir uygulamaya dönüştürülmesi hedeflenmektedir.
