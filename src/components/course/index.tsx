import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';

import SlideModal from './slideModal';
import BottomNavigator from './../tabNavigator';

const Container = styled.div`
	width: 100%;
	height: 100%;

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

const CourseScreen = (): JSX.Element => {
	const mapDivRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mapDivRef.current) return;
		mapDivRef.current.scrollTop = 850;
		mapDivRef.current.scrollLeft = 1750;
	});

	return (
		<Container>
			<MapWrapper ref={mapDivRef}>
				<Pin src={`${process.env.PUBLIC_URL}/pin.png`} x={4506} y={4364} />
				<Pin src={`${process.env.PUBLIC_URL}/pin.png`} x={1900} y={1030} />
				<img src={`${process.env.PUBLIC_URL}/map.png`} />
			</MapWrapper>
				<DndProvider backend={TouchBackend}>
					<SlideModal />
				</DndProvider>
			<BottomNavigator />
		</Container>
	);
}

export default CourseScreen;
