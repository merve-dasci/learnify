import { Mail, Lock } from "lucide-react";

export default function LoginModal() {
  return (
    <div className="modal-container">
      <h2>Giriş Yap</h2>

      <form>
        <div>
          <Mail />
          <input type="email" placeholder="E-posta" />
        </div>

        <div>
          <Lock />
          <input type="password" placeholder="Şifre" />
        </div>

        <button type="button">Giriş Yap</button>
      </form>
    </div>
  );
}
