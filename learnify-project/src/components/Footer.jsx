export default function Footer() {
  return (
    <footer className="bg-surface-container-high border-t border-outline-variant mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-primary">Learnify</h2>

            <p className="text-sm text-on-surface-variant mt-3">
              Learn new skills from expert instructors and advance your career.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>

            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>

            <ul className="space-y-2 text-sm">
              <li>Courses</li>
              <li>Categories</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Newsletter</h3>

            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-outline-variant rounded-lg px-3 py-2"
            />
          </div>
        </div>

        <div className="border-t border-outline-variant mt-8 pt-4 text-center text-sm text-on-surface-variant">
          © 2026 Learnify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
