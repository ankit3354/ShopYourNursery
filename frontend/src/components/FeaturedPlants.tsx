import { useEffect, useState } from "react";
import axios from "axios";

interface Plant {
  id: number;
  title: string;
  markedPrice: number;
  price: number;
  description: string;
  rating: number;
  img: string;
}

function FeaturedPlants() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Plant[]>("http://localhost:5000/plants")
      .then((response) => {
        setPlants(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching plants data:", error);
        setError("Could not fetch plants data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="overflow-x-auto">
      {error && <p>{error}</p>}
      <table
        className="mx-auto border border-gray-100"
        cellPadding="10"
        cellSpacing="0"
      >
        <thead>
          <tr>
            <th className="border-b border-gray-200 px-4 py-2">Title</th>
            <th className="border-b border-gray-200 px-4 py-2">Marked Price</th>
            <th className="border-b border-gray-200 px-4 py-2">Price</th>
            <th className="border-b border-gray-200 px-4 py-2">Description</th>
            <th className="border-b border-gray-200 px-4 py-2">Rating</th>
            <th className="border-b border-gray-200 px-4 py-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant, indx) => (
            <tr
              key={indx}
              className="hover:bg-gray-100 transition duration-200"
            >
              <td className="border-b border-gray-200 px-4 py-2 text-center">
                {plant.title}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center">
                ${plant.markedPrice.toFixed(2)}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center">
                ${plant.price.toFixed(2)}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center max-w-xs">
                {plant.description}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center">
                {plant.rating}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center">
                <img
                  src={plant.img}
                  alt={plant.title}
                  style={{ width: "100px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeaturedPlants;
