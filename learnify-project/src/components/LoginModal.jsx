import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock } from "lucide-react";
import { UserContext } from "../context/UserContext";

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.email === "admin@learnify.com" && data.password === "123456") {
      login(data.email);
      reset();
      onClose();
    } else {
      setError("root.serverError", {
        type: "custom",
        message: "E-posta veya şifre hatalı!",
      });
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-right-form">
          <button className="close-modal-btn" onClick={handleClose}>
            ×
          </button>

          <h2 className="text-xl font-bold mb-4">Giriş Yap</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <Mail
                className="form-icon-pos"
                style={{ width: "16px", height: "16px" }}
              />

              <input
                type="email"
                placeholder="admin@learnify.com"
                className="form-input"
                {...register("email", {
                  required: "E-posta zorunludur",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Geçersiz e-posta adresi",
                  },
                })}
              />
            </div>

            {errors.email && (
              <div className="feedback-alert alert-error">
                {errors.email.message}
              </div>
            )}

            <div className="form-group">
              <Lock
                className="form-icon-pos"
                style={{ width: "16px", height: "16px" }}
              />

              <input
                type="password"
                placeholder="123456"
                className="form-input"
                {...register("password", {
                  required: "Şifre zorunludur",
                  minLength: {
                    value: 6,
                    message: "Şifre en az 6 karakter olmalıdır",
                  },
                })}
              />
            </div>

            {errors.password && (
              <div className="feedback-alert alert-error">
                {errors.password.message}
              </div>
            )}

            {errors.root?.serverError && (
              <div className="feedback-alert alert-error">
                {errors.root.serverError.message}
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-full">
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
