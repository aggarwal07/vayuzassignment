import Header from "@/components/header/Header";
import HomePage from "@/components/home/HomePage";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="">
      <main className="flex max-w-[100vw]">
        <div className="w-[15vw] max-xl:w-[5vw] bg-[var(--background)] border-r border-[#FFFFFF33] max-[1029px]:hidden">
          <Sidebar />
        </div>
        <div className="min-[1029px]:w-[95vw] xl:w-[85vw]">
          <Header />
          <HomePage />
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
