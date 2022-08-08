import {
  ADD_TOCART_ERROR,
  ADD_TOCART_LOADING,
  ADD_TOCART_SUCCESS,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
        DELETE_TODO_ERROR,
        DELETE_TODO_LOADING,
        DELETE_TODO_SUCCESS,
        PATCH_TODO_ERROR,
        PATCH_TODO_LOADING,
        PATCH_TODO_SUCCESS,
        SIGNUP_TODO_LOADING,
        SIGNUP_TODO_SUCCESS,
        SIGNUP_TODO_ERROR,
        LOGIN_TODO_LOADING,
        LOGIN_TODO_SUCCESS,
        LOGIN_TODO_ERROR,
        LOGOUT,
      } from "./actionTypes";
      
      const initialState = {
        login: {
          loading: false,
          error: false,
          token:'',
          logdata: [],
        },
        signup: {
          loading: false,
          error: false,
        },
        products: {
          loading: false,
          error: false,
          data: [],
        },
        cart: {
          loading: false,
          error: false,
          cartitems: [],
        },
      };
      export const reducer = (state = initialState, action) => {
        switch (action.type) {
          case ADD_TOCART_LOADING:
            return {
              ...state,
             cart: {
                ...state.cart,
                loading: true,
              },
            };
          case ADD_TOCART_SUCCESS:
            return {
              ...state,
              cart: {
                ...state.cart,
                loading: false,
                error: false,
                cartitems:action.payload
              },
            };
          case ADD_TOCART_ERROR:
            return {
              ...state,
              cart: {
                ...state.cart,
                loading: false,
                error: true,
              },
            };
          case GET_PRODUCTS_LOADING:
            return {
              ...state,
              products: {
                ...state.products,
                loading: true,
              },
            };
          case GET_PRODUCTS_SUCCESS:
            return {
              ...state,
              products: {
                ...state.products,
                loading: false,
                error: false,
                data: action.payload,
              },
            };
          case GET_PRODUCTS_ERROR:
            return {
              ...state,
              products: {
                ...state.products,
                loading: false,
                error: true,
              },
            };
          case PATCH_TODO_LOADING:
            return {
              ...state,
              todo: {
                ...state.todo,
                loading: true,
              },
            };
          case PATCH_TODO_SUCCESS:
            return {
              ...state,
              todo: {
                ...state.todo,
                loading: false,
                error: false,
              },
            };
          case PATCH_TODO_ERROR:
            return {
              ...state,
              todo: {
                ...state.todo,
                loading: false,
                error: true,
              },
            };
          case DELETE_TODO_LOADING:
            return {
              ...state,
              todo: {
                ...state.todo,
                loading: true,
              },
            };
          case DELETE_TODO_SUCCESS:
            return {
              ...state,
              todo: {
                ...state.todo,
                loading: false,
                error: false,
              },
            };
          case DELETE_TODO_ERROR:
            return {
              ...state,
              todo: {
                ...state.todo,
                loading: false,
                error: true,
              },
            };
          case SIGNUP_TODO_LOADING:
            return {
              ...state,
              signup: {
                ...state.signup,
                loading: true,
              },
            };
          case SIGNUP_TODO_SUCCESS:
            return {
              ...state,
              signup: {
                ...state.signup,
                loading: false,
                error: false,
              },
              login: {
                ...state.login,
                loading: false,
                error: false,
                token: action.payload.token,
                logdata: action.payload.token,
              }
            };
          case SIGNUP_TODO_ERROR:
            return {
              ...state,
              signup: {
                ...state.signup,
                loading: false,
                error: true,
              },
            };
          case LOGIN_TODO_LOADING:
            return {
              ...state,
              login: {
                ...state.login,
                loading: true,
              },
            };
          case LOGIN_TODO_SUCCESS:
            return {
              ...state,
              login: {
                ...state.login,
                loading: false,
                error: false,
                token: action.payload.token,
                logdata: action.payload.token,
              },
            };
          case LOGIN_TODO_ERROR:
            return {
              ...state,
              login: {
                ...state.login,
                loading: false,
                error: true,
              },
            };
            case LOGOUT:
            return {
              ...state,
              login: {
                ...state.login,
                loading:false,
                error:false,
                token:'',
                logdata:[],
              },
            };
      
          default:
            return { ...state };
        }
      };
      