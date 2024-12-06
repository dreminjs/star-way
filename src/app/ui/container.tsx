import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}
export const Container: FC<IProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <div className="max-w-[420px] h-screen mx-auto relative">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};
