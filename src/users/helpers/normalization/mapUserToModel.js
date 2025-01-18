const mapUserToModel = (user) => {
    return {
      fullName: user.fullName || "",
    };
  };
  
  export default mapUserToModel;