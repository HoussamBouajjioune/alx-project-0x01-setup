import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Users Page</h1>
        <p>Here we’ll display the users content.</p>
      </main>
    </div>
  );
};

export default UsersPage;
