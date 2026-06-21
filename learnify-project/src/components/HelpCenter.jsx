import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { faqs } from "../coursesData";

export default function HelpCenter() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [activeFaqId, setActiveFaqId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || message.trim() === "") {
      setError("Lütfen tüm alanları doldurunuz.");
      return;
    }

    alert("Mesajınız gönderildi.");
    setName("");
    setMessage("");
    setError("");
  };

  const handleToggleFaq = (id) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <div className="container py-12">
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <HelpCircle
          style={{
            width: "50px",
            height: "50px",
            marginBottom: "16px",
            color: "var(--primary)",
          }}
        />

        <h1 className="text-2xl font-black">Sık Sorulan Sorular</h1>

        <p className="text-muted mt-3">
          Learnify platformu hakkında merak edilen sorular ve cevapları.
        </p>
      </div>

      <div className="faq-accordion-container">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-card">
            <button
              type="button"
              className="faq-question-btn"
              onClick={() => handleToggleFaq(faq.id)}
            >
              <h3>{faq.question}</h3>
              <span>{activeFaqId === faq.id ? "−" : "+"}</span>
            </button>

            {activeFaqId === faq.id && (
              <div className="faq-answer-block">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="chapter-card mt-10">
        <h2 className="text-xl font-bold mb-4">İletişim Formu</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Adınız"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Mesajınız"
              className="form-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {error && <div className="feedback-alert alert-error">{error}</div>}

          <button type="submit" className="btn btn-primary">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
