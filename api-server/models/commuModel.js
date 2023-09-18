const pool = require("./pool");

const comuModel = {
  // 커뮤니티 목록 조회
  async find(){
    try{
      const sql = `select * from community`;
      const [ result ] = await pool.query(sql);
      return result;
    }catch(err){
      throw new Error("DB Error", { cause: err });
    }
  },

  // 커뮤니티 상세 조회
  async findByNo(no) {
    try {
      const sql = `select * from community where communityNo = ?`;
      const [result] = await pool.query(sql, [no]);
      return result[0];
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 커뮤니티 생성
  async create(com) {
    try {
      const sql = `insert into community set ?`;
      const [result] = await pool.query(sql, [com]);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  }
};

module.exports = comuModel;