import { useQuery } from "@tanstack/react-query"
import { refService } from "../services/ref.service"




export const useGetRefs = () => {
    const { data: refsData, isPending: refsDataLoading } = useQuery({
        queryKey: ["refs"],
        queryFn: async () => await refService.findMany(),
    })


    return {
        refsData,
        refsDataLoading
    }
}