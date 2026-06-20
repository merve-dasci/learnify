import { Compass } from "lucide-react";

export default function SideBar() {
  return (
    <aside className="sidebar-container">
      <div style={{ padding: "20px" }}>
        <h3>Kategoriler</h3>

        <ul style={{ marginTop: "10px" }}>
          <li>Yazılım</li>
          <li>Tasarım</li>
          <li>İşletme</li>
          <li>Fotoğrafçılık</li>
        </ul>
      </div>
    </aside>
  );
}
