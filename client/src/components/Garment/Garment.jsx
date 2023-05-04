import {
	StyledButton,
	StyledContainer,
	StyledSize,
	StyledTitle
} from './styles';

const Garment = ({ name, price, size }) => {
	return (
		<StyledContainer>
			<StyledTitle>{name}</StyledTitle>
			<h2>{price}€</h2>
			<StyledSize>{size}</StyledSize>
			<StyledButton>Borrar</StyledButton>
		</StyledContainer>
	);
};

export default Garment;
