import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from '../components/LoginForm';

describe("LoginForm", () => {
	it("renders Login Input field", () => {
		const { container } = render((
			<LoginForm />
		));

		expect(container).toHaveTextContent('아이디');
	});
});