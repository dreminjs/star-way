import { Navigation } from "../../../features/navigation";
import { Header } from "../../../widgets/header";

export const FriendsPage = () => {
  return (
    <section className="flex h-svh flex-col items-center justify-between relative">
      <div className="w-full">
        <Header />
        <h3 className="text-[60px] text-center gradient-text font-bold">
          Задания
        </h3>
        
      </div>
      
      <Navigation />
    </section>
  );
};
