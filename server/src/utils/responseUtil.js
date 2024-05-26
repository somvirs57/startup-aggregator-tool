const successResponse = (
  res,
  message = "Success",
  statusCode = 200,
  data = {}
) => {
  return res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};

const errorResponse = (res, message = "Error", statusCode = 500, error) => {
  return res.status(statusCode).json({
    status: "error",
    message,
    error: error ? error.message : {},
  });
};

module.exports = { successResponse, errorResponse };
