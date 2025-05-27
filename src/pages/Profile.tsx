import BottomNavigation from "@/components/BottomNavigation";
import Icon from "@/components/ui/icon";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm">
        <div className="px-4 py-6">
          <h1 className="text-xl font-bold text-gray-900 text-center">
            Профиль
          </h1>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon name="User" size={32} className="text-gray-500" />
            </div>
            <h2 className="text-lg font-semibold">Пользователь</h2>
            <p className="text-gray-500">user@example.com</p>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Profile;
