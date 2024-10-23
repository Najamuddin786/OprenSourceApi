import React, { useState, useEffect } from 'react';
import { Box, Text, Image, Flex, Button, Select } from "@chakra-ui/react";
import axios from 'axios';

export default function ProductList() {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [pageNo, setPageNo] = useState(1); 
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const itemsPerPage = 3; 

  // Fetch data from API
  useEffect(() => {
    axios.get('https://freeapi-vril.onrender.com/flipkard/products')
      .then(response => {
        setProducts(response.data); 
        setFilteredProducts(response.data); 
        setLoading(false); 
      })
      .catch(err => {
        setError('Error fetching data');
        setLoading(false); 
      });
  }, []);

  // Filter products by category
  const handleFilterChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    // If category is empty, reset to all products
    if (category === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }

    setPageNo(1); // Reset to page 1 when filter changes
  };


  if (loading) {
    return <Text>Loading...</Text>;
  }

 
  if (error) {
    return <Text>{error}</Text>;
  }

  // Calculate the current items to show based on the page number
  const startIndex = (pageNo - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Handle page changes
  const handleNextPage = () => {
    if (pageNo * itemsPerPage < filteredProducts.length) {
      setPageNo(pageNo + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  return (
    <Flex flexDir="column" gap="20px">
      {/* Filter Section */}
      <Flex justifyContent="center" mb="20px">
        <Select 
          placeholder="Filter by Category" 
          value={selectedCategory} 
          onChange={handleFilterChange} 
          w="200px"
          bg='gray'
          color={'black'}
        >
          <option value="Women's Jeans">Women's Jeans</option>
          <option value="Smartwatch">Smartwatch</option>
          <option value="Laptop">Laptop</option>
          <option value="Mobile">Mobile</option>
          <option value="Women's Tops">Women's Tops</option>
          <option value="Shirt">Shirt</option>
        </Select>
      </Flex>

      {/* Product List */}
      <Flex gap={'10'} flexWrap={'wrap'} justifyContent={'center'}>
        {currentItems.map((product) => (
          <Box w={{base:'80vw',md:'250px'}} key={product._id} border="1px solid #ccc" p="10px" mb="10px" borderRadius={'md'}>
            <Image src={product.img} alt={product.name} h='200px' w='full' />
            <Text fontWeight="bold">{product.name}</Text>
            <Text>Category: {product.category}</Text>
            <Text>Price: ₹{product.price}</Text>
            <Text>Rating: {product.rating.rate} ({product.rating.count} reviews)</Text>
            <Text>{product.description}</Text>
          </Box>
        ))}
        <Flex gap={'5'} justifyContent={'center'} w='full' >
          <Button onClick={handlePrevPage} disabled={pageNo === 1}>Previous Page</Button>
          <Text alignSelf="center">Page {pageNo}</Text>
          <Button onClick={handleNextPage} disabled={pageNo * itemsPerPage >= filteredProducts.length}>Next Page</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
