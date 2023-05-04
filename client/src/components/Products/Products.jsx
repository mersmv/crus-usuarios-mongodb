import { useEffect, useState } from 'react';
import Garment from '../Garment/Garment';
import { StyledContainer } from './styles';

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getAllProducts(setProducts);
	}, []);

	if (products.length === 0) return <h1>Loading...</h1>;

	return (
		<StyledContainer>
			{products.map(prod => (
				<Garment key={prod._id} {...prod}></Garment>
			))}
		</StyledContainer>
	);
};

const fetchData = async url => {
	const request = await fetch(url);
	const data = await request.json();
	return data;
};

const getAllProducts = async setProducts => {
	const response = await fetchData('http://127.0.0.1:3000/api/products');
	const allProducts = response;
	setProducts(allProducts);
};

export default Products;
