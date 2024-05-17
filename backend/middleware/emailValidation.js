import { body, validationResult } from "express-validator";

const emailValidation = () => {
  return [
    body("name")
      .exists()
      .withMessage("Name is required")
      .isString()
      .withMessage("Name must be a string")
      .isLength({ min: 2 })
      .withMessage("Name must be at least 2 characters long")
      .trim()
      .escape(),
    body("email")
      .exists()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email")
      .normalizeEmail()
      .trim()
      .escape(),
    body("message")
      .exists()
      .withMessage("Message is required")
      .isString()
      .withMessage("Message must be a string")
      .isLength({ min: 10 })
      .withMessage("Message must be at least 10 characters long")
      .trim()
      .escape(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const errorMessage = [];
  errors.errors.map((error) => errorMessage.push({ [error.path]: error.msg }));
  return res.status(400).json({ errors: errorMessage });
};

export { emailValidation, validate };
