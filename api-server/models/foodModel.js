const pool = require("./pool");

const foodModel = {
  // 음식 목록 조회
  async find() {
    try {
      const sql = `select * from food`;
      const [result] = await pool.query(sql);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  }
};

module.exports = foodModel;