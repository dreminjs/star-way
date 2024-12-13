import { InviteFriendsButton } from "../../../features/friends";
import { Navigation } from "../../../features/navigation";
// import { useGetRefs } from "../../../shared/api/queries/refs.queries";
import { Header } from "../../../widgets/header";

export const FriendsPage = () => {
  //                              

  return (
    <section className="flex h-svh flex-col items-center justify-between relative">
      <div className="w-full">
        <Header />
        <h3 className="text-[60px] text-center gradient-text font-bold mb-2">
          Друзья
        </h3>
        <InviteFriendsButton />
      </div>

      <Navigation />
    </section>
  );
};
