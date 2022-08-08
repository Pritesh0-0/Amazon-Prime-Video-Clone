import {
        ADD_TOCART_ERROR,
        ADD_TOCART_LOADING,
        ADD_TOCART_SUCCESS,
        GET_PRODUCTS_LOADING,
        GET_PRODUCTS_SUCCESS,
        GET_PRODUCTS_ERROR,
        PATCH_TODO_ERROR,
        PATCH_TODO_LOADING,
        PATCH_TODO_SUCCESS,
        DELETE_TODO_ERROR,
        DELETE_TODO_SUCCESS,
        DELETE_TODO_LOADING,
        SIGNUP_TODO_LOADING,
        SIGNUP_TODO_SUCCESS,
        SIGNUP_TODO_ERROR,
        LOGIN_TODO_LOADING,
        LOGIN_TODO_SUCCESS,
        LOGIN_TODO_ERROR,
        LOGOUT,
      } from "./actionTypes";
      
      export const addToCartLoading = () => {
        return {
          type: ADD_TOCART_LOADING,
        };
      };
      export const addToCartSuccess = (payload) => {
        return {
          type: ADD_TOCART_SUCCESS,
          payload,
        };
      };
      export const addToCartError = () => {
        return {
          type: ADD_TOCART_ERROR,
        };
      };
      export const getProductsLoading = () => {
        return {
          type: GET_PRODUCTS_LOADING,
        };
      };
      export const getProductsSuccess = (payload) => {
        return {
          type: GET_PRODUCTS_SUCCESS,
          payload,
        };
      };
      export const getProductsError = () => {
        return {
          type: GET_PRODUCTS_ERROR,
        };
      };
      
      export const patchToDoLoading = () => {
        return {
          type: PATCH_TODO_LOADING,
        };
      };
      export const patchToDoSuccess = (payload) => {
        return {
          type: PATCH_TODO_SUCCESS,
          payload,
        };
      };
      export const patchToDoError = () => {
        return {
          type: PATCH_TODO_ERROR,
        };
      };
      
      export const deleteToDoLoading = () => {
        return {
          type: DELETE_TODO_LOADING,
        };
      };
      export const deleteToDoSuccess = () => {
        return {
          type: DELETE_TODO_SUCCESS,
        };
      };
      export const deleteToDoError = () => {
        return {
          type: DELETE_TODO_ERROR,
        };
      };
      export const signupToDoLoading = () => {
        return {
          type: SIGNUP_TODO_LOADING,
        };
      };
      export const signupToDoSuccess = (payload) => {
        return {
          type: SIGNUP_TODO_SUCCESS,
          payload,
        };
      };
      export const signupToDoError = () => {
        return {
          type: SIGNUP_TODO_ERROR,
        };
      };
      export const loginToDoLoading = () => {
        return {
          type: LOGIN_TODO_LOADING,
        };
      };
      export const loginToDoSuccess = (payload) => {
        return {
          type: LOGIN_TODO_SUCCESS,
          payload,
        };
      };
      export const loginToDoError = () => {
        return {
          type: LOGIN_TODO_ERROR,
        };
      };
      export const logOut = () => {
        return{
          type: LOGOUT,
        };
      };
      