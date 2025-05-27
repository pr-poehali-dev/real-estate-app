import BottomNavigation from "@/components/BottomNavigation";
import Icon from "@/components/ui/icon";

const Messages = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm">
        <div className="px-4 py-6">
          <h1 className="text-xl font-bold text-gray-900 text-center">
            Сообщения
          </h1>
        </div>
      </div>

      <div className="px-4 py-8 text-center">
        <Icon
          name="MessageSquare"
          size={48}
          className="text-gray-300 mx-auto mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-600 mb-2">
          Нет сообщений
        </h2>
        <p className="text-gray-500">Здесь будут отображаться ваши диалоги</p>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Messages;
