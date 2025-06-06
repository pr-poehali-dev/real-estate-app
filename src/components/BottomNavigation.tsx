import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: "home", icon: "Home", label: "Главная", path: "/" },
    { id: "favorites", icon: "Heart", label: "Избранное", path: "/favorites" },
    { id: "add", icon: "Plus", label: "Добавить", path: "/add" },
    {
      id: "messages",
      icon: "MessageSquare",
      label: "Сообщения",
      path: "/messages",
    },
    { id: "profile", icon: "User", label: "Профиль", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className={`
              flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors
              ${
                location.pathname === tab.path
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-gray-600"
              }
            `}
          >
            <Icon
              name={tab.icon as any}
              size={20}
              className={location.pathname === tab.path ? "text-blue-500" : ""}
            />
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
