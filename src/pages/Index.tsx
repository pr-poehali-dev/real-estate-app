import SearchBar from "@/components/SearchBar";
import CategoryTabs from "@/components/CategoryTabs";
import PropertyCard from "@/components/PropertyCard";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  // Моковые данные объектов
  const properties = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      price: "12 500 000 ₽",
      title: "Просторная 3-комнатная квартира в центре",
      area: "85 м²",
      location: "Москва, ЦАО, Тверская",
      rooms: 3,
      floor: "7/12 этаж",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
      price: "8 900 000 ₽",
      title: "Уютная квартира с видом на парк",
      area: "62 м²",
      location: "Москва, СВАО, Сокольники",
      rooms: 2,
      floor: "5/9 этаж",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      price: "25 000 000 ₽",
      title: "Элитный загородный дом",
      area: "180 м²",
      location: "Московская область, Одинцово",
      rooms: 4,
      floor: "2 этажа",
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      price: "6 800 000 ₽",
      title: "Студия в новостройке",
      area: "28 м²",
      location: "Москва, ВАО, Перово",
      rooms: 1,
      floor: "15/25 этаж",
    },
  ];

  const handleSearch = (query: string) => {
    console.log("Поиск:", query);
  };

  const handleFilterClick = () => {
    console.log("Открыть фильтры");
  };

  const handleCategoryChange = (category: string) => {
    console.log("Категория:", category);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Хедер */}
      <div className="bg-white shadow-sm">
        <div className="px-4 py-6">
          <h1 className="text-xl font-bold text-gray-900 text-center mb-4">
            Недвижимость
          </h1>
          <SearchBar
            onSearch={handleSearch}
            onFilterClick={handleFilterClick}
          />
        </div>

        <div className="pb-4">
          <CategoryTabs onCategoryChange={handleCategoryChange} />
        </div>
      </div>

      {/* Основной контент */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Рекомендуемые объекты
          </h2>
          <span className="text-sm text-gray-500">557 объектов</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>

      {/* Нижняя навигация */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
