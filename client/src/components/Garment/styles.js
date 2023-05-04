import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 400px;
	height: 200px;
	background-color: #edede9;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
`;

const StyledTitle = styled.h1`
	font-size: 1rem;
`;

const StyledSize = styled.p`
	font-size: 0.9rem;
`;

const StyledButton = styled.button`
	width: 70px;
	border-radius: 10px;
	background-color: hsl(132, 6%, 83%);
	border: 1px solid transparent;
`;

export { StyledContainer, StyledTitle, StyledSize, StyledButton };
