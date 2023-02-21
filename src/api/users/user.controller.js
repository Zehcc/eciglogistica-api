const { generateToken } = require('../../utils/jwt/jwt');
const bcrypt = require('bcrypt');
const { connection } = require('../../utils/db/db');

const register = async (req, res, next) => {
  try {
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: encryptedPassword,
    };

    const sql = `SELECT * FROM users where email = '${user.email}'`;
    connection.query(sql, (error, results) => {
      if (error) throw error;
      const userExist = results;
      if (userExist.length) {
        return next('El usuario ya existe');
      }
    });
    const sqlInsert = `INSERT INTO users SET ?`;
    connection.query(sqlInsert, user, (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const sql = `SELECT * FROM users WHERE email= '${req.body.email}'`;
    connection.query(sql, (error, results) => {
      const user = results[0];
      if (!user) {
        return res.status(204).json();
      }

      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(204).json();
      }

      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = generateToken(user._id, user.email);
        return res.status(200).json([token, user]);
      }
    });
  } catch (error) {
    return next(error);
  }
};

const logout = (req, res, next) => {
  try {
    const token = null;
    return res.status(201).json(token);
  } catch (error) {
    return next(error);
  }
};

// const patchOne = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const user = new User(req.body);
//     user._id = id;
//     if (req.files) {
//       for (const file of req.files) {
//         if (file.fieldname === 'img') {
//           user.img = file.path;
//         }
//         if (file.fieldname === 'cv') {
//           user.cv = file.path;
//         }
//       }
//     }
//     const updateUser = await User.findByIdAndUpdate(id, user);
//     return res.status(200).json(updateUser);
//   } catch (error) {
//     return next(error);
//   }
// };

module.exports = {
  register,
  login,
  logout,
  // patchOne,
};
