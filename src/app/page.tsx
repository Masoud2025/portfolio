import MainContent from "@/components/layout/MainContent";
import SideBar from "@/components/layout/Sidebar/MainSidebar";
import { ThemeProvider } from "@/components/ThemeContext";

// import ResponsiveSimulator from "@/components/ui/ResponsiveSimulator";

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <div className="relative">
          <SideBar />
          <MainContent />
        </div>
      </ThemeProvider>
    </div>
  );
}
