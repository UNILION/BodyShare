const pool = require("./pool");

const commentModel = {
  // 해당 게시물 댓글 목록 조회
  async find(no) {
    try {
      const sql = `SELECT
        cpc.*,
        u.nickname AS commenter_nickname
      FROM
        communityPostComment AS cpc
      JOIN
        user AS u ON cpc.userNo = u.userNo
      WHERE
        cpc.postNo = ?;`;
      const [result] = await pool.query(sql, [no]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 댓글 생성
  async create(com) {
    try {
      const sql = `insert into communityPostComment set ?`;
      const [result] = await pool.query(sql, [com]);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 댓글 수정
  async updateComment(no, post) {
    try {
      const sql = `update communityPostComment set ? where commentNo = ?`;
      const [result] = await pool.query(sql, [post, no]);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 댓글 삭제
  async deleteComment(no, conn = pool) {
    try {
      const sql = `delete from communityPostComment where commentNo = ?`;
      const [result] = await conn.query(sql, [no]);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  }

};

module.exports = commentModel;