// import { UserProps } from "@/interfaces";
// import UserCard from "@/components/common/UserCard";
// import Header from "@/components/layout/Header";

// const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
//   return (
//     <div className="flex flex-col h-screen">
//       <Header />
//       <main className="p-4">
//         <div className="flex justify-between mb-4">
//           <h1 className="text-2xl font-semibold">Users</h1>
//           <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {posts.map((user: UserProps, key: number) => (
//             <UserCard key={key} {...user} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users")
//   const posts = await response.json()

//   return {
//     props: {
//       posts
//     }
//   }
// }
// export default Users;


import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  users: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserData[]>(users);

  const handleAddUser = (newUser: UserData) => {
    const id = userList.length + 1;
    setUserList((prev) => [...prev, { ...newUser, id }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {userList.map(({ id, name, email, username, phone, website }) => (
            <div
              key={id}
              className="border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-gray-600">@{username}</p>
              <p className="text-gray-600">{email}</p>
              <p className="text-gray-600">{phone}</p>
              <a
                href={`http://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {website}
              </a>
            </div>
          ))}
        </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;

