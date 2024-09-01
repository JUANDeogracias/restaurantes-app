import React, { useEffect, useState } from "react";
import Cards from "./cards";
import axios from "axios";
import Searcher from "./searcher";
function Restaurants() {
  const url = "https://jsonplaceholder.typicode.com/users/";
  const [restaurants, setRestaurants] = useState([]);
  const [isSearching, setisSearching] = useState(false);
  const [searchElements, setsearchElements] = useState([]);
  let term = "default-search";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setRestaurants(response.data);
        setsearchElements(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    /*Pasamos como parametro prevRestaurant para dar el valor más actualizado de el array en caso
     * de pasar restaurants el array estaría desactualizado.
     */
    setRestaurants((prevRestaurant) =>
      /*filtramos el valor actualizado de restaurants por el id que recibe como parametro y volvemos
       * a rellenar el array inicial por restaurant con el id que no sea el eliminado para que este
       * no pertenezca a el array inicial
       */
      prevRestaurant.filter((restaurant) => restaurant.id !== id)
    );

    setsearchElements((prevRestaurant) =>
      /*filtramos el valor actualizado de restaurants por el id que recibe como parametro y volvemos
       * a rellenar el array inicial por restaurant con el id que no sea el eliminado para que este
       * no pertenezca a el array inicial
       */
      prevRestaurant.filter((restaurant) => restaurant.id !== id)
    );
  };

  const handleSearch = (term) => {
    if (term !== " ") {
      setisSearching(true);
      setsearchElements(
        restaurants.filter((element) =>
          element.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    } else {
      setisSearching(false);
      setsearchElements(restaurants);
    }
  };
  //renderizamos los componentes
  return (
    <div className="mt-2 mx-auto max-w-4xl  flex flex-col ">
      <Searcher onChange={handleSearch} />
      <div className="mt-2 mx-auto max-w-4xl  flex flex-wrap ">
        {(isSearching ? searchElements : restaurants).map((restaurant) => (
          <div key={restaurant.id} className="w-full md:w-1/3 lg:w-1/3 p-2">
            <Cards
              id={restaurant.id}
              name={restaurant.name}
              url={url}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Restaurants;
