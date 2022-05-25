import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaPause } from 'react-icons/fa';
import { AiOutlineCaretRight } from 'react-icons/ai';

import SlideModal from './slideModal';
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

const CourseBtnDiv = styled.div`
	position: absolute;

	z-index: 30;

	right: 30px;
	top: 30px;

	width: 50px;
	height: 50px;

	background-color:#727272;
	border-radius: 50px;

	.startBtn{
		margin-left: 3px;
	}

	.pauseBtn{
		margin: 10px;
	}


`;

const CourseScreen = (): JSX.Element => {
	const mapDivRef = useRef<HTMLDivElement>(null);
	const [courseMode, setCourseMode] = useState<boolean>(true);

	useEffect(() => {
		if (!mapDivRef.current) return;
		mapDivRef.current.scrollTop = 850;
		mapDivRef.current.scrollLeft = 1750;
	}, []);

	const courseBtnHandler = (): void => {
		setCourseMode(!courseMode);
	}

	return (
		<Container>
			<CourseBtnDiv onClick={courseBtnHandler}>
				{!courseMode ? <FaPause size={30} className='pauseBtn' /> : <AiOutlineCaretRight size={50} className='startBtn' />}
			</CourseBtnDiv>
			<MapWrapper ref={mapDivRef}>
				<Pin src={`${process.env.PUBLIC_URL}/pin.png`} x={4506} y={4364} />
				<Pin src={`${process.env.PUBLIC_URL}/pin.png`} x={1900} y={1030} />
				<img src={`${process.env.PUBLIC_URL}/map.png`} />
			</MapWrapper>
				<SlideModal />
			<BottomNavigator />
		</Container>
	);
}

export default CourseScreen;
