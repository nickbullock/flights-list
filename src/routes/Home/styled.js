import styled from 'styled-components';

const HomeWrapperStyled = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: #f5f5f5;
	padding-bottom: 20px;
`;
const HomeBodyStyled = styled.div`
    overflow: auto;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 720px;
    
    @media (max-width: 760px) {
		max-width: 100%;
		padding: 0;
	}
`;

export {
    HomeWrapperStyled,
    HomeBodyStyled
}