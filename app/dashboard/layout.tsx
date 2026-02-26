import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{ width: "200px", background: "#1e3a8a", color: "white", padding: "20px" }}>
        <h2>Dashboard</h2>
        <ul style={{ marginTop: "20px" }}>
          <li><Link href="/dashboard">Overview</Link></li>
          <li><Link href="/dashboard/vehicles">Vehicles</Link></li>
        </ul>
      </div>

      {/* Page Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {children}
      </div>

    </div>
  );
}