import { useForm } from "react-hook-form";

export default function AddCourseForm({ categories, onAddCourse, setView }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onAddCourse(data);
    reset();
    setView("home");
  };

  return (
    <main className="container py-12">
      <div className="form-layout">
        <h2 className="form-title">Yeni Kurs Ekle</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="form-label">Kurs Adı</label>
            <input
              type="text"
              placeholder="Örn: React ile Modern Web Geliştirme"
              className="form-input"
              {...register("title", {
                required: "Kurs adı zorunludur",
                minLength: {
                  value: 3,
                  message: "Kurs adı en az 3 karakter olmalıdır",
                },
              })}
            />
            {errors.title && (
              <span className="form-error">⚠ {errors.title.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Eğitmen</label>
            <input
              type="text"
              placeholder="Örn: Merve Daşçi"
              className="form-input"
              {...register("instructor", {
                required: "Eğitmen adı zorunludur",
              })}
            />
            {errors.instructor && (
              <span className="form-error">⚠ {errors.instructor.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Kategori</label>
            <select
              className="form-select"
              {...register("category", {
                required: "Kategori seçimi zorunludur",
              })}
            >
              <option value="">Seçiniz</option>
              {categories
                .filter((category) => category !== "Tüm Kurslar")
                .map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
            {errors.category && (
              <span className="form-error">⚠ {errors.category.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Fiyat (TL)</label>
            <input
              type="number"
              placeholder="Örn: 750"
              className="form-input"
              {...register("price", {
                required: "Fiyat zorunludur",
                min: {
                  value: 1,
                  message: "Fiyat 0'dan büyük olmalıdır",
                },
              })}
            />
            {errors.price && (
              <span className="form-error">⚠ {errors.price.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Görsel URL</label>
            <input
              type="text"
              placeholder="https://..."
              className="form-input"
              {...register("image", {
                required: "Görsel URL zorunludur",
              })}
            />
            {errors.image && (
              <span className="form-error">⚠ {errors.image.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Açıklama</label>
            <textarea
              placeholder="Kurs hakkında kısa açıklama yazınız..."
              className="form-textarea"
              {...register("description", {
                required: "Açıklama zorunludur",
                minLength: {
                  value: 10,
                  message: "Açıklama en az 10 karakter olmalıdır",
                },
              })}
            />
            {errors.description && (
              <span className="form-error">⚠ {errors.description.message}</span>
            )}
          </div>

          <button type="submit" className="form-submit">
            Kursu Kaydet
          </button>

          <span
            className="form-toggle-btn"
            onClick={() => {
              reset();
              setView("home");
            }}
          >
            Geri Dön
          </span>
        </form>
      </div>
    </main>
  );
}
