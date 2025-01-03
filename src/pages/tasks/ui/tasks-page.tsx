import { EveryDayAwards } from "../../../features/awards";
import { Navigation } from "../../../features/navigation";
import { TasksList } from "../../../features/tasks";
import { UserInfo } from "../../../features/user-info/ui/user-info";
import { useGetTasks } from "../../../shared";
import { Header } from "../../../widgets/header";

export const TasksPage = () => {
  const { tasks, refetchTasks } = useGetTasks();


  return (
    <section className="flex h-svh flex-col items-center justify-between relative">
      <div className="w-full">
        <Header />
        <EveryDayAwards />
        <h3 className="text-[60px] text-center gradient-text font-bold mb-[25px]">
          Задания
        </h3>
        <UserInfo
          tasksCount={tasks?.length || 1}
        />
      </div>
      <TasksList refetch={refetchTasks} channels={tasks || []} />
      <Navigation />
    </section>
  );
};
