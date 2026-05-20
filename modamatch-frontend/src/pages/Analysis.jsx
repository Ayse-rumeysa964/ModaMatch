import "./Analysis.css";

import uploadImage from "../assets/modamatchfotografyuklemeAIanalizi.jpeg";

function Analysis() {
  return (
    <div className="analysis-page">

      {/* HEADER */}
      <div className="analysis-header">

        <h1>
          AI Moda Analizi
        </h1>

        <p>
          Fotoğraf yükleyerek sana en uygun tasarım önerilerini al.
        </p>

      </div>

      {/* CONTENT */}
      <div className="analysis-content">

        {/* LEFT */}
        <div className="upload-card">

          <img src={uploadImage} alt="" />

          <h2>
            Fotoğraf Yükle
          </h2>

          <p>
            Yapay zeka analiz sistemi ile renk, kumaş ve model önerileri al.
          </p>

          <button>
            Görsel Yükle
          </button>

        </div>

        {/* RIGHT */}
        <div className="result-card">

          <h2>
            AI Sonuçları
          </h2>

          <div className="result-box">

            <h3>
              🎨 Renk Önerisi
            </h3>

            <p>
              Pastel tonlar ve açık bej renkleri sana uygun görünüyor.
            </p>

          </div>

          <div className="result-box">

            <h3>
              ✂️ Stil Önerisi
            </h3>

            <p>
              Minimal ve modern kesimler senin tarzına daha uygun.
            </p>

          </div>

          <div className="result-box">

            <h3>
              🧵 Uygun Terziler
            </h3>

            <p>
              Sana yakın premium terziler önerildi.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analysis;