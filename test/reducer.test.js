import postReducer, { addPost } from "../reducers/post";
import userReducer, { loginAction, logoutAction } from '../reducers/user';

import POST_CONTENT from '../fixtures/post';

describe("reducer", () => {
	describe("addPost", () => {
		it('changes post', () => {
			const initialState = {
				mainPosts: []
			};

			const state = postReducer(initialState, addPost(POST_CONTENT));

			expect(state.mainPosts[0].id).toBe(1);
			expect(state.mainPosts[0].User.nickname).toBe('듀크온')
		})
	});

	describe("Auth", () => {
		// eslint-disable-next-line no-undef
		context('LogIn', () => {
			it('changes isLoggedIn and me', () => {
				const initialState = {
					isLoggedIn: false,
					me: null,
				}
	
				const state = userReducer(initialState, loginAction({
					id: 'goodzzong',
					password: '1234'
				}));
	
				expect(state.isLoggedIn).toBeTruthy();
				expect(state.me.id).toBe('goodzzong');
				expect(state.me.password).toBe('1234');
			});
		});

		context('LogIn', () => {
			it('clears isLoggedIn and me', () => {
				const initialState = {
					isLoggedIn: true,
					me: {
						id: 'goodzzong',
						password: '1234',
					}
				};

				const state = userReducer(initialState, logoutAction());

				expect(state.isLoggedIn).toBeFalsy();
				expect(state.me).toBeNull();
			});
		});
	})
});