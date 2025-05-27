import { useState } from "react";

interface CategoryTabsProps {
  onCategoryChange: (category: string) => void;
}

const CategoryTabs = ({ onCategoryChange }: CategoryTabsProps) => {
  const [activeCategory, setActiveCategory] = useState("apartments");

  const categories = [
    { id: "apartments", label: "Квартиры", count: 245 },
    { id: "houses", label: "Дома", count: 89 },
    { id: "commercial", label: "Коммерция", count: 67 },
    { id: "rental", label: "Аренда", count: 156 },
  ];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-1 min-w-max px-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${
                activeCategory === category.id
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }
            `}
          >
            {category.label}
            <span className="ml-1 text-xs opacity-75">({category.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
