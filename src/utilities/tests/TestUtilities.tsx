import React, { ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

const RouterAndUtils: React.FC<{ initialEntries: string[] }> = ({ initialEntries, children }) => (
	<MemoryRouter initialEntries={initialEntries}>
		<Route path="/">{children}</Route>
	</MemoryRouter>
);

export const RenderWithRouter = (children: ReactNode, initialEntries: string[] = ['/']): RenderResult => {
	return render(<RouterAndUtils initialEntries={initialEntries}>{children}</RouterAndUtils>);
};
