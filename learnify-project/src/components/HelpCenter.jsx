import { HelpCircle } from "lucide-react";
import { faqs } from "../coursesData";

export default function HelpCenter() {
  return (
    <div className="container" style={{ padding: "48px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <HelpCircle
          style={{
            width: "50px",
            height: "50px",
            marginBottom: "16px",
          }}
        />

        <h1>Sık Sorulan Sorular</h1>

        <p>Learnify platformu hakkında merak edilen sorular ve cevapları.</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {faqs.map((faq) => (
          <div
            key={faq.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "16px",
              backgroundColor: "#fff",
            }}
          >
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
