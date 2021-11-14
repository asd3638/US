const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const User = require("./user");
const Token = require("./token");
const Chat = require("./chat");
const Question = require("./question");

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    'host': config.host,
    'port': config.port,
    'dialect': config.dialect,
    logging: false
  }
);

db.sequelize = sequelize;
db.User = User;
db.Token = Token;
db.Chat = Chat;
db.Question = Question;

User.init(sequelize);
Token.init(sequelize);
Chat.init(sequelize);
Question.init(sequelize);

User.associate(db)
Token.associate(db);
Chat.associate(db);

module.exports = db;
