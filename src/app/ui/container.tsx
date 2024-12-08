import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}
export const Container: FC<IProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <div className="p-2 max-w-[500px] mx-auto h-svh" >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};
