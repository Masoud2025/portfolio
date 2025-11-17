import MainContent from "@/components/layout/MainContent";
import SideBar from "@/components/layout/Sidebar/MainSidebar";
import { ThemeProvider } from "@/components/ThemeContext";

// import ResponsiveSimulator from "@/components/ui/ResponsiveSimulator";

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <div className="w-full min-h-screen md:grid md:grid-cols-[260px_auto] gap-6  md:px-36 pt-6">
          <SideBar />
          <MainContent />
        </div>
      </ThemeProvider>
    </div>
  );
}
