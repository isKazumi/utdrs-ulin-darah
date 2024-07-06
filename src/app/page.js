import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DashboardPage from "@/components/Dashboard";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <DashboardPage />
      </DefaultLayout>
    </>
  );
}
