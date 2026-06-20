export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-outline-variant h-16">
      <div className="max-w-[1280px] mx-auto h-full px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Learnify</h1>

        <nav className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
          <a href="#">Help</a>
        </nav>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="border border-outline-variant rounded-full px-4 py-2 text-sm bg-surface-container-low"
          />

          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
            M
          </div>
        </div>
      </div>
    </header>
  );
}
