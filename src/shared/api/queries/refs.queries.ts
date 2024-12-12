import { useQuery } from "@tanstack/react-query"
import { refService } from "../services/ref.service"




export const useGetRefs = () => {
    const { data: refs, isPending: refsLoading } = useQuery({
        queryKey: ["refs"],
        queryFn: async () => await refService.findMany(),
    })


    return {
        refs,
        refsLoading
    }
}