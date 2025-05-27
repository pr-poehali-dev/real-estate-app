import { useState } from "react";
import Icon from "@/components/ui/icon";

interface PropertyCardProps {
  id: string;
  image: string;
  price: string;
  title: string;
  area: string;
  location: string;
  rooms?: number;
  floor?: string;
  isFavorite?: boolean;
}

const PropertyCard = ({
  id,
  image,
  price,
  title,
  area,
  location,
  rooms,
  floor,
  isFavorite = false,
}: PropertyCardProps) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorite(!favorite);
  };

  const handleCardClick = () => {
    console.log(`Открыть объект ${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        >
          <Icon
            name="Heart"
            size={16}
            className={favorite ? "text-red-500 fill-current" : "text-gray-400"}
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          {rooms && (
            <span className="text-sm text-gray-500">{rooms} комн.</span>
          )}
        </div>

        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{title}</h3>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
          <div className="flex items-center gap-1">
            <Icon name="Square" size={14} />
            <span>{area}</span>
          </div>
          {floor && (
            <div className="flex items-center gap-1">
              <Icon name="Building" size={14} />
              <span>{floor}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Icon name="MapPin" size={14} />
          <span className="truncate">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
