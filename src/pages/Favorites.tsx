import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/BottomNavigation";
import Icon from "@/components/ui/icon";

const Favorites = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm">
        <div className="px-4 py-6">
          <h1 className="text-xl font-bold text-gray-900 text-center">
            Избранное
          </h1>
        </div>
      </div>

      <div className="px-4 py-8 text-center">
        <Icon name="Heart" size={48} className="text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-gray-600 mb-2">Пока пусто</h2>
        <p className="text-gray-500 mb-6">
          Добавляйте понравившиеся объекты в избранное
        </p>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Favorites;
