import { useQuery } from "@tanstack/react-query"
import { userService } from "../services/user.service"




export const useGetUserData = () => {

    const {
        data: userData,
        isPending: userDataLoading,
    } = useQuery({
        queryKey: ["general"],
        queryFn: async () => await userService.findOneData(),
    })

    return {
        userData,
        userDataLoading
    }
}