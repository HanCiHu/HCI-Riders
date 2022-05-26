import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import BottomNavigator from './../tabNavigator';
import AddModal from './addModal';
import { warningData } from '../../data';

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

const CautionScreen = (): JSX.Element => {
	const mapDivRef = useRef<HTMLDivElement>(null);
	const touchTimeoutRef = useRef<Date>();
	const touchPositionRef = useRef<IPin>({x: 0, y: 0});
	const [selectModalFlag, setSelectModalFlag] = useState<boolean>(false);
	const [warnModalFlag, setWarnModalFlag] = useState<boolean>(false);

	useEffect(() => {
		if (!mapDivRef.current) return;
		mapDivRef.current.scrollTop = 850;
		mapDivRef.current.scrollLeft = 1750;
	}, []);

	const touchStartHandler = () => {
		setSelectModalFlag(false);
		touchTimeoutRef.current = new Date();
	};

	const touchEndHandler = (e: any) => {
		if (!touchTimeoutRef.current || !mapDivRef.current) return ;
		if (new Date().getTime() - touchTimeoutRef.current.getTime() > 300){
			touchPositionRef.current = { x: e.changedTouches[0].pageX + mapDivRef.current.scrollLeft, y: e.changedTouches[0].pageY+	mapDivRef.current.scrollTop };
			setSelectModalFlag(true);
		}
	}

	const addWarnModal = () => {
		setWarnModalFlag(true);
	}

	return (
		<Container>
				{warnModalFlag && <AddModal setWarnModalFlag={setWarnModalFlag}/>}
				<MapWrapper ref={mapDivRef} onTouchStart={touchStartHandler} onTouchEnd={touchEndHandler}>
					{selectModalFlag && <AddWarningModal onTouchStart={addWarnModal} x={touchPositionRef.current.x} y={touchPositionRef.current.y}>{"마크 생성"}</AddWarningModal>}
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
