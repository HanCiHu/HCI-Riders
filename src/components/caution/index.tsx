import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import BottomNavigator from './../tabNavigator';

const Container = styled.div`
	width: 100%;
	height: 100%;

	position: relative;

`;

const MapWrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow: scroll;
	position: relative;
`;

interface IPin {
	x: number,
	y: number,
}

const Pin = styled.img<IPin>`
	width: 20px;
	height: 30px;
	position: absolute;
	transform: ${({x, y}) => `translate(${x}px, ${y}px);`};

`;

interface IWarningData {
	x: number,
	y: number
}

const warningData: IWarningData[] = [{x: 2000, y: 1100}, {x: 1600, y: 900}, {x: 1500, y: 1200}, {x: 1400, y: 800}, {x: 1800, y: 1000}]

const CautionScreen = (): JSX.Element => {
	const mapDivRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mapDivRef.current) return;
		mapDivRef.current.scrollTop = 850;
		mapDivRef.current.scrollLeft = 1750;
	}, []);

	return (
		<Container>
			<MapWrapper ref={mapDivRef}>
				<Pin src={`${process.env.PUBLIC_URL}/my_pin.svg`} x={4506} y={4364} />
				{warningData.map(({x, y}) => <Pin src={`${process.env.PUBLIC_URL}/warning_pin.svg`} x={x} y={y} />)}
				<Pin src={`${process.env.PUBLIC_URL}/my_pin.svg`} x={1900} y={1030} />
				<img src={`${process.env.PUBLIC_URL}/map.png`} />
			</MapWrapper>
			<BottomNavigator />
		</Container>
	);
}

export default CautionScreen;
