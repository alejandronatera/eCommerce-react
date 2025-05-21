import React, { useEffect, useState } from 'react';

const ProductImage = ({ title }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(title)}&client_id=TU_API_KEY`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        setImageUrl(data.results[0].urls.small);
      }
    };

    fetchImage();
  }, [title]);

  return (
    <img src={imageUrl} alt={title} />
  );
};

export default ProductImage;