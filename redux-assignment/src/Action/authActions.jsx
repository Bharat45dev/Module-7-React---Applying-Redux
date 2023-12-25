export const login = (username, password) => {
 
    return {
      type: 'LOGIN_SUCCESS',
      payload: { username }
    };
  };
  
  export const logout = () => ({
    type: 'LOGOUT'
  });