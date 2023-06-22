const asyncHandler = (fn) => (request, response, next) => {
    return Promise.resolve(fn(request, response, next)).catch((error) => {
      console.log(error);
      response.render('error', { error });
    });
  };
  
export default asyncHandler;
  