
import { useGetRefs } from "../../../shared/api/queries/refs.queries";

export const FriendsList = () => {

    const {} = useGetRefs()
    
  return <ul className="mt-[50px]"></ul>;
};
