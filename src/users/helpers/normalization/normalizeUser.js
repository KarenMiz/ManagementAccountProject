const normalizeUser = (user) => {
    return {
      fullName: user.fullName,
      phone: user.phone,
      email: user.email,
      password: user.password,
    }
  };
  
  export default normalizeUser;
  