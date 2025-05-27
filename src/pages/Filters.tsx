import BottomNavigation from "@/components/BottomNavigation";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Filters = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm">
        <div className="px-4 py-6">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="mr-3"
            >
              <Icon name="ArrowLeft" size={20} />
            </Button>
            <h1 className="text-xl font-bold text-gray-900">Фильтры</h1>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 text-center">
        <Icon
          name="SlidersHorizontal"
          size={48}
          className="text-gray-300 mx-auto mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-600 mb-2">
          Настройки фильтров
        </h2>
        <p className="text-gray-500">
          Расширенные фильтры будут добавлены позже
        </p>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Filters;
