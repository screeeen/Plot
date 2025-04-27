import React from 'react';
import { wins } from './data/winnersTable';
import { GridStyle, TitleCell, Name, CellStyle, ImgSt } from './StyledMovi';

export const Movi = () => {
	

	const generateCells = () => {

		

		return (
			<>
				{wins.map(
					(yearResults, i) =>
						yearResults.year >= 2001 && (
							<CellStyle key={yearResults.year}>
								<TitleCell>{yearResults.year}</TitleCell>
								<ImgSt src={process.env.PUBLIC_URL + yearResults.skateMenPic} alt='*' />
								<Name>{yearResults.skateMen}</Name>
							</CellStyle>
						)
				)}
			</>
		);
	};
	return <GridStyle>{wins && generateCells()}</GridStyle>;
};
