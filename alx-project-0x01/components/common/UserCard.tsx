import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company
}) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name} (@{username})</h2>
      <p className="text-gray-600 mb-1">📧 {email}</p>
      <p className="text-gray-600 mb-1">📍 {address.street}, {address.city}</p>
      <p className="text-gray-600 mb-1">📞 {phone}</p>
      <p className="text-gray-600 mb-1">🌐 <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{website}</a></p>
      <div className="mt-4 text-sm text-gray-500">
        <p>🏢 {company.name}</p>
        <p>{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
