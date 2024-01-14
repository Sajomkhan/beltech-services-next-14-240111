import Navbar from "@/components/Navebar";

export default function Layout({ children }) {
  return (
      <div>
        <Navbar />
        {children}
      </div>
  );
}
