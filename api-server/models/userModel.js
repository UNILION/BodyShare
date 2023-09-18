const pool = require("./pool");

const userModel = {
  // 회원 상세 조회
  async findByNo(no) {
    try {
      const sql = `select * from user where userNo = ?`;
      const [result] = await pool.query(sql, [no]);
      return result[0];
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  //회원 가입
  async create(user) {
    try {
      const sql = `insert into user set ?`;
      const [result] = await pool.query(sql, [user]);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  //회원 정보 수정
  async update(no, user) {
    try {
      const sql = `update user set ? where userNo = ?`;
      const [result] = await pool.query(sql, [user, no]);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 로그인
  async signin(user) {
    try {
      const sql = `select * from user where userId = ? and password = ?`;
      const [result] = await pool.query(sql, [user.userId, user.password]);
      return result.length === 1;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  //회원 관심사 등록
  async createInterest(user) {
    try {
      const sql = `insert into userInterest set ?`;
      const [result] = await pool.query(sql, [user]);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  //회원 관심사 수정
  async updateInterest(no, user) {
    try {
      const sql = `update userInterest set ? where userNo = ?`;
      const [result] = await pool.query(sql, [user, no]);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 회원 관심사 조회
  async findByNoInterest(no) {
    try {
      const sql = `select * from userInterest where userNo = ?`;
      const [result] = await pool.query(sql, [no]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  }
};

module.exports = userModel;