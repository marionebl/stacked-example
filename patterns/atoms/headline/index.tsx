import * as React from 'react';
import styled, { css, StyledComponentClass } from 'styled-components';
import { fonts } from 'fonts';
import colors from 'colors';

export interface HeadlineProps {
	className?: string;
	order?: 1 | 2 | 3;
	tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

interface StyledHeadlineProps {
	className?: string;
	order?: 1 | 2 | 3;
}

const StyledHeadline = styled.div`
	margin-top: 0;
	font-family: ${fonts().NORMAL_FONT};
	font-weight: 500;

	${(props: HeadlineProps) => {
		switch (props.order) {
			case 3:
				return css`
					font-size: 24px;
					line-height: 30px;
				`
			case 2:
				return css`
					font-size: 38px;
					line-height: 45px;
			  `
			case 1:
			default:
				return css`
					font-size: 52px;
					line-height: 60px;
				`
		}
	}}
`;

const Headline: React.StatelessComponent<HeadlineProps> = (props) => {
	const tagName = props.tagName === undefined ? 'div' : props.tagName;
	const Component: StyledComponentClass<StyledHeadlineProps, HeadlineProps> = StyledHeadline.withComponent(tagName);

	return (
		<Component
			className={props.className}
			order={props.order}
		>
			{props.children}
		</Component>
	);
};

export default Headline;
