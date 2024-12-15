import { FriendsList, InviteFriendsButton } from "../../../features/friends";
import { Navigation } from "../../../features/navigation";

import { Header } from "../../../widgets/header";
import { useBoostRefs, useGetRefs } from "../../../shared/api/queries/refs.queries";
import { BoostCoins } from "../../../features/coins";
import { useEffect } from "react";

export const FriendsPage = () => {
  const {refsData, refsDataRefetch} = useGetRefs();

  const {boost, boostDataSuccess} = useBoostRefs()

  const handleTakeBoost = () => boost()

  useEffect(() => {
    if(boostDataSuccess) {
      refsDataRefetch()
    }
  },[boostDataSuccess,refsDataRefetch])

  return (
    <section className="flex h-svh flex-col items-center justify-between relative">
      <div className="w-full mb-5">
        <Header />
        <h3 className="text-[60px] text-center gradient-text font-bold mb-2">
          Друзья
        </h3>
        <InviteFriendsButton />
        <BoostCoins onTakeBoost={handleTakeBoost} boost={refsData?.boost || 0} />
      </div>
      <FriendsList refs={refsData?.referrals} />
      <Navigation />
    </section>
  );
};
