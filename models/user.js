const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  //모델이름 User
  static init(sequelize) {
    // ??
    return super.init(
      //컬럼정의
      // ??
      {
        // id는 sequelize에서 기본으로 생성해준다
        name: {
          type: Sequelize.STRING(20), //20글자까지
          allowNull: false, //NOT_NULL과 같음
          unique: true,
        },
        age: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        married: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        comment: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE, //DATETIME과 같음
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        //옵션 정의
        sequelize,
        timestamps: false, //true로 해주면 createAt, UpdateAt자동으로 해줌 연습을 위해 false로 해줌
        underscored: false, //
        modelName: "User",
        tableName: "users",
        paranoid: false, //true일때 deletedAt 삭제날짜 기본 생성해줌
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
  }
};
