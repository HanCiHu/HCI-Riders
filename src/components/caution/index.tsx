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

const AddWarningModal = styled.div<IPin>`
	width: 75px;
	height: 20px;
	background-color: white;

	border: 1px solid black;
	text-align: center;

	position: absolute;
	z-index: 100;

	transform: ${({x, y}) => `translate(${x}px, ${y}px);`};

`;

interface IWarningData {
	x: number,
	y: number
}

const warningData: IWarningData[] = [{x: 2000, y: 1100}, {x: 1600, y: 900}, {x: 1500, y: 1200}, {x: 1400, y: 800}, {x: 1800, y: 1000}]

const CautionScreen = (): JSX.Element => {
	const mapDivRef = useRef<HTMLDivElement>(null);
	const touchTimeoutRef = useRef<number>(0);
	const touchPositionRef = useRef<IPin>({x: 0, y: 0});
	const [modalFlag, setModalFlag] = useState<boolean>(false);

	useEffect(() => {
		if (!mapDivRef.current) return;
		mapDivRef.current.scrollTop = 850;
		mapDivRef.current.scrollLeft = 1750;
	}, []);

	const makeWarning = (x: number, y: number) => {
		if (!mapDivRef.current) return;
		if (touchTimeoutRef.current === 0) {
			touchPositionRef.current = {x: mapDivRef.current.scrollLeft + x, y: mapDivRef.current.scrollTop + y};
			setModalFlag(true);
		}
	};

	const touchStartHandler = (e: any) => {
		touchTimeoutRef.current = 0;
		setModalFlag(false);

    setTimeout(() => {
      makeWarning(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
    }, 1000);
  };

	const touchEndHandler = () => {
		touchTimeoutRef.current = 1;
	}

	const addMarkHandler = () => {
		alert('1');
	}

	return (
		<Container>
				<MapWrapper ref={mapDivRef} onTouchStart={touchStartHandler} onTouchEnd={touchEndHandler}>
					{modalFlag && <AddWarningModal onClick={addMarkHandler} x={touchPositionRef.current.x} y={touchPositionRef.current.y}>{"마크 생성"}</AddWarningModal>}
					<Pin src={`${process.env.PUBLIC_URL}/my_pin.svg`} x={4506} y={4364} />
					{warningData.map(({x, y}, i) => <Pin src={`${process.env.PUBLIC_URL}/warning_pin.svg`} x={x} y={y} key={i} />)}
					<Pin src={`${process.env.PUBLIC_URL}/my_pin.svg`} x={1900} y={1030} />
					<img src={`${process.env.PUBLIC_URL}/map.png`} />
				</MapWrapper>
				<BottomNavigator />
			</Container>
	);
}

export default CautionScreen;
