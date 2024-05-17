"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/src/components/organisms/Header";
import Footer from "@/src/components/organisms/Footer";

const queryClient = new QueryClient();

const UserOnboarding = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <h1>User Onboarding</h1>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default UserOnboarding;
