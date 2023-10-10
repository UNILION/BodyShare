const pool = require("./pool");

const sportsModel = {
  // 운동 목록 조회
  async find() {
    try {
      const sql = `select * from sports`;
      const [result] = await pool.query(sql);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  }
};

module.exports = sportsModel;