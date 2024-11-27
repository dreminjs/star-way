import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../../model/constants"





export const useGetTasks = () => {
    const {
        data: tasks,
    } = useQuery({
        queryKey: [QUERY_KEYS.tasks],
    })

    return {
        tasks
    }
} 