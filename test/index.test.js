import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import HOME from '../pages/index';

import post from '../fixtures/post';

import '../__mocks__/matchMidia';

jest.mock('react-redux');

describe("HOME", () => {

	beforeEach(() => {

		useSelector.mockImplementation((selector) => selector({
			user: {
				isLoggedIn: true,
				me: {
					id: 'goodzzong',
					password: '1234'
				}
			},
			post: {
				mainPosts: [
					post
				]
			}
		}))
	})
	context('with main post item', () => {
		it('renders post', () => {
			const { container, getByPlaceholderText } = render((
				<HOME />
			));
			
			const { placeholder } = getByPlaceholderText('어떤 신기한 일이 있었나요?')
			
			expect(placeholder).toBe('어떤 신기한 일이 있었나요?');
			expect(container).toHaveTextContent('첫 번째 게시글');
		})
	})
})