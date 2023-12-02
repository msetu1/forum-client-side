import useAuth from "../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center py-10">My Profile</h1>
      </div>
      <div className="mx-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div className="flex space-x-6">
            <img
              alt=""
              src={user?.photoURL}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xl font-semibold"
              >
                {user?.displayName}
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">{user?.email}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
