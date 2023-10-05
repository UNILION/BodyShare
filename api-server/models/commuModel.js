const pool = require("./pool");

const comuModel = {
  // 커뮤니티 목록 조회
  async find() {
    try {
      const sql = `SELECT c.*, s.name AS sportsName, COUNT(DISTINCT cp.postNo) AS postCount, COUNT(DISTINCT uc.userNo) AS userCount
      FROM community c
      INNER JOIN sports s ON c.interest = s.no
      LEFT JOIN communityPost cp ON c.communityNo = cp.communityNo
      LEFT JOIN usersCommunity uc ON c.communityNo = uc.communityNo
      GROUP BY c.communityNo;`;
      const [result] = await pool.query(sql);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 관심사 기반 커뮤니티 목록 조회 (최대 3개)
  async findByInterestsLimited(no) {
    try {
      const sql = `
      SELECT c.*, s.name AS sportsName, COUNT(DISTINCT uc.userNo) AS userCount
      FROM community c
      INNER JOIN sports s ON c.interest = s.no
      LEFT JOIN communityPost cp ON c.communityNo = cp.communityNo
      LEFT JOIN usersCommunity uc ON c.communityNo = uc.communityNo
      WHERE uc.userNo = ?
      GROUP BY c.communityNo
      ORDER BY userCount DESC
      LIMIT 3;
    `;

      const [result] = await pool.query(sql, [no]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
  // 관심사 기반 커뮤니티 목록 조회
  async findByInterest(no) {
    try {
      const sql = `SELECT c.*, s.name AS sportsName, COUNT(DISTINCT cp.postNo) AS postCount, COUNT(DISTINCT uc.userNo) AS userCount
      FROM community c
      INNER JOIN sports s ON c.interest = s.no
      LEFT JOIN communityPost cp ON c.communityNo = cp.communityNo
      LEFT JOIN usersCommunity uc ON c.communityNo = uc.communityNo
      WHERE c.interest = ?
      GROUP BY c.communityNo
      ORDER BY userCount DESC;`;
      const [result] = await pool.query(sql, [no]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 인기 기반 커뮤니티 목록 조회
  async findByPopular() {
    try {
      const sql = `SELECT c.*, s.name AS sportsName, COUNT(DISTINCT cp.postNo) AS postCount, COUNT(DISTINCT uc.userNo) AS userCount
      FROM community c
      INNER JOIN sports s ON c.interest = s.no
      LEFT JOIN communityPost cp ON c.communityNo = cp.communityNo
      LEFT JOIN usersCommunity uc ON c.communityNo = uc.communityNo
      GROUP BY c.communityNo
      ORDER BY userCount DESC;`;
      const [result] = await pool.query(sql);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 커뮤니티 상세 소개
  async findByNo(commuNo, userNo) {
    try {
      const sql = `SELECT c.*, s.name AS sportsName, COUNT(DISTINCT cp.postNo) AS postCount, COUNT(DISTINCT uc.userNo) AS userCount, (select count(*) from usersCommunity where communityNo = ? and userNo = ?) as RegisterMember
      FROM community c
      INNER JOIN sports s ON c.interest = s.no
      LEFT JOIN communityPost cp ON c.communityNo = cp.communityNo
      LEFT JOIN usersCommunity uc ON c.communityNo = uc.communityNo
      WHERE c.communityNo = ?
      GROUP BY c.communityNo;`;
      const [result] = await pool.query(sql, [commuNo, userNo, commuNo]);
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
  },

  // 커뮤니티 상세 피드 내용
  async findCommunityPost(commuNo, limit = 1000) {
    try {
      const sql = `SELECT communityPost.postNo, communityPost.title, communityPost.content, communityPost.contentImageUrl, communityPost.createdDate ,user.nickname, (select count(communityNo) from usersCommunity where communityNo = ? group by communityNo) as member
      FROM bodyshare.communityPost
      left join user on communityPost.userNo = user.userNo
      where communityNo = ? limit ?;
      `;
      const [result] = await pool.query(sql, [commuNo, commuNo, limit]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
};

//

module.exports = comuModel;
