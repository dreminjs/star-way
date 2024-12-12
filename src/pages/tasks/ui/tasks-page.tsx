// import { useGetTasks } from "../../../shared";
// import { useGetUserData } from "../../../shared/api/queries/user.queries";
import { Header } from "../../../widgets/header";

export const TasksPage = () => {
  // const { tasks } = useGetTasks();

  // const { userData } = useGetUserData()

  return (
    <section className="flex h-svh flex-col items-center justify-between relative">
      <div>
        <Header />
        <h3 className="text-[60px] text-center gradient-text font-bold">Задания</h3>
      </div>
    </section>
  );
};
