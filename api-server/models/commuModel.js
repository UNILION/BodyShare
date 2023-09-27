const pool = require("./pool");

const comuModel = {
  // 커뮤니티 목록 조회
  async find(){
    try{
      const sql = `SELECT c.*, s.name AS sportsName, COUNT(DISTINCT cp.postNo) AS postCount, COUNT(DISTINCT uc.userNo) AS userCount
      FROM community c
      INNER JOIN sports s ON c.interest = s.no
      LEFT JOIN communityPost cp ON c.communityNo = cp.communityNo
      LEFT JOIN usersCommunity uc ON c.communityNo = uc.communityNo
      GROUP BY c.communityNo;`;
      const [ result ] = await pool.query(sql);
      return result;
    }catch(err){
      throw new Error("DB Error", { cause: err });
    }
  },

  // 관심사 기반 커뮤니티 목록 조회
  async findByInterest(no){
    try{
      const sql = `SELECT c.*, s.name AS sportsName, COUNT(DISTINCT cp.postNo) AS postCount, COUNT(DISTINCT uc.userNo) AS userCount
      FROM community c
      INNER JOIN sports s ON c.interest = s.no
      LEFT JOIN communityPost cp ON c.communityNo = cp.communityNo
      LEFT JOIN usersCommunity uc ON c.communityNo = uc.communityNo
      WHERE c.interest = ?
      GROUP BY c.communityNo
      ORDER BY userCount DESC;`;
      const [ result ] = await pool.query(sql, [no]);
      return result;
    }catch(err){
      throw new Error("DB Error", { cause: err });
    }
  },

  // 인기 기반 커뮤니티 목록 조회
  async findByPopular(){
    try{
      const sql = `SELECT c.*, s.name AS sportsName, COUNT(DISTINCT cp.postNo) AS postCount, COUNT(DISTINCT uc.userNo) AS userCount
      FROM community c
      INNER JOIN sports s ON c.interest = s.no
      LEFT JOIN communityPost cp ON c.communityNo = cp.communityNo
      LEFT JOIN usersCommunity uc ON c.communityNo = uc.communityNo
      GROUP BY c.communityNo
      ORDER BY userCount DESC;`;
      const [ result ] = await pool.query(sql);
      return result;
    }catch(err){
      throw new Error("DB Error", { cause: err });
    }
  },
  

  // 커뮤니티 상세 조회
  async findByNo(no) {
    try {
      const sql = `SELECT c.*, s.name AS sportsName, COUNT(DISTINCT cp.postNo) AS postCount, COUNT(DISTINCT uc.userNo) AS userCount
      FROM community c
      INNER JOIN sports s ON c.interest = s.no
      LEFT JOIN communityPost cp ON c.communityNo = cp.communityNo
      LEFT JOIN usersCommunity uc ON c.communityNo = uc.communityNo
      WHERE c.communityNo = ?
      GROUP BY c.communityNo;`;
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
  },

  // 커뮤니티 가입자 조회
  async findByNoUsers(no) {
    try {
      const sql = `select * from usersCommunity where communityNo = ?`;
      const [result] = await pool.query(sql, [no]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  }
};

module.exports = comuModel;