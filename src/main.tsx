import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import './index.css';

import DefaultLayout from '@layouts/DefaultLayout';

import Home from '@pages/Home.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
