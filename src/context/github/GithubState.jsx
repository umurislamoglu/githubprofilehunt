import React, { useReducer, useState } from "react";
import GithubReducer from "../github/GithubReducer";
import GithubContext from "../github/GithubContext";
import axios from "axios";
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = (keyword) => {
    setLoading();
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) => {
          dispatch({
            type: "SEARCH_USERS",
            payload: res.data.items,
          });
        });
    }, 1000);
  };

  
  const getUser = (username) => {
    setLoading();

    setTimeout(() => {
      axios.get(`https://api.github.com/users/${username}`).then((res) => {
          dispatch({
                type: "GET_USER",
                payload:res.data,
          })
        
        
      });
    }, 1000);
  };

  const getUserRepos = (username) => {
    setLoading();

    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((res) => {
            dispatch({
                type:"GET_REPOS",
                payload:res.data
            })
        
        });
    }, 1000);
  };

  
  
  const clearUsers = () => {
    dispatch({type: "CLEAR_USERS"})
  };

  
  
  
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  
  
  
  
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
