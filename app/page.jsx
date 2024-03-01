import { Header } from "./_components/header";
import { CategorySideBar } from "./_components/category";
import { CarDisplay } from "./_components/car-display";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 bg-white z-20">
        <Header />
      </div>

      <div className="mt-5 mx-2 flex space-x-4">
        <div className="w-[200px] fixed h-[70vh] border border-zinc-300/30">
          <CategorySideBar />
        </div>

        <div className="pl-[210px] w-full">
          <div className="border border-zinc-300/30 w-full p-3">
            <CarDisplay />
          </div>
        </div>
      </div>
    </div>
  );
}
