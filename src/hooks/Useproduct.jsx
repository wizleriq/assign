import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/timbuApi';

const useProduct = (initialPage = 1) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts(page);
        setProducts(data); // Assuming data is an array of products received from the API
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return { products, isLoading, error, nextPage, prevPage };
};

export default useProduct;
