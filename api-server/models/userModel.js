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
      if (result.length === 1) {
        // 로그인 성공 시 조회된 유저 정보 배열을 반환
        return result;
      } else {
        // 로그인 실패 시 빈 배열 반환
        return [];
      }
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

  //회원 관심사 삭제
  async deleteInterest(no) {
    try {
      const sql = `DELETE FROM userInterest WHERE userNo = ?`;
      const [result] = await pool.query(sql, [no]);
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
  },

  // 회원 가입한 커뮤니티 조회
  async findByNoUsersCommu(no) {
    try {
      // const sql = `select * from usersCommunity where userNo = ?`;
      const sql = `
          select * 
            from usersCommunity
            left join community on usersCommunity.communityNo=community.communityNo
          where userNo= ?
        `;

      const [result] = await pool.query(sql, [no]);
      return result;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  //회원 가입한 커뮤니티 등록
  async createUsersCommu(userNo, CommunityNo) {
    try {
      const sql = `INSERT INTO usersCommunity (userNo, communityNo) VALUES (?, ?);`;
      const [result] = await pool.query(sql, [userNo, CommunityNo]);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 회원 가입한 커뮤니티 탈퇴(삭제)
  async deleteUsersCommu(commuNo, userNo, conn = pool) {
    try {
      const sql = `delete from usersCommunity where userNo = ? and communityNo = ?`;
      const [result] = await conn.query(sql, [userNo, commuNo]);
      return result.affectedRows;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 아이디 중복확인
  async checkId(user) {
    try {
      const sql = `select * from user where userId = ?`;
      const [result] = await pool.query(sql, [user.id]);
      if (result.length === 1) {
        // 중복 존재
        return result;
      } else {
        // 중복 없을 때
        return [];
      }
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 닉네임 중복확인
  async checkNic(user) {
    try {
      const sql = `select * from user where nickname = ?`;
      const [result] = await pool.query(sql, [user.nic]);
      if (result.length === 1) {
        // 중복 존재
        return result;
      } else {
        // 중복 없을 때
        return [];
      }
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },
};

module.exports = userModel;
