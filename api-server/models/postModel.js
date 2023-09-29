const pool = require("./pool");

const postModel = {
  // 해당 커뮤니티 게시물 목록 조회
  async find(no){
    try{
      const sql = `select * from communityPost 
      where communityNo = ?
      ORDER BY createdDate DESC;`;
      const [ result ] = await pool.query(sql, [no]);
      return result;
    }catch(err){
      throw new Error("DB Error", { cause: err });
    }
  },

  // 게시물 상세 조회
  async findByNo(no) {
    try {
      const sql = `select * from communityPost where postNo = ?`;
      const [result] = await pool.query(sql, [no]);
      return result[0];
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 커뮤니티 게시물 상세 조회
  async commuFindByNo(no) {
    try {
      const sql = `SELECT cp.*, er.*, s.name AS sportsName
      FROM communityPost cp
      INNER JOIN exerciseRecord er ON cp.userNo = er.userNo AND cp.recordDate = er.date
      INNER JOIN sports s ON er.sportsNo = s.no
      WHERE cp.postNo = ?`;
      const [result] = await pool.query(sql, [no]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  
  // 커뮤니티 게시물 추가 상단 내용
  async postBanner(no) {
    try {
      const sql = `SELECT communityName, bannerImageUrl
      FROM bodyshare.community
      where communityNo=?`;
      const [result] = await pool.query(sql, [no]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 게시물 생성
  async create(com) {
    try {
      const sql = `insert into communityPost set ?`;
      const [result] = await pool.query(sql, [com]);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 게시물 수정
  async updatePost(no, post) {
    try {
      const sql = `update communityPost set ? where postNo = ?`;
      const [result] = await pool.query(sql, [post, no]);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 게시물 삭제
  async deletePost(no, conn=pool){
    try{
      const sql = `delete from communityPost where postNo = ?`;
      const [ result ] = await conn.query(sql, [no]);
      return result.affectedRows;
    }catch(err){
      throw new Error("DB Error", { cause: err });
    }
  }

};

module.exports = postModel;