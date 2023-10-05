const pool = require("./pool");

const recordModel = {
  // 운동 기록 목록 조회
  async findsportsrecord(no){
    try{
      const sql = `select * from exerciseRecord left join sports on exerciseRecord.sportsNo = sports.no where userNo = ?`;
      const [ result ] = await pool.query(sql, [no]);
      return result;
    }catch(err){
      throw new Error("DB Error", { cause: err });
    }
  },

  // 해당 유저의 최근 3일 운동 기록 목록 조회
  async findByRecent(no, day){
    try{
      const sql = `SELECT er.*, s.name AS sportsName,
      FROM exerciseRecord er
      INNER JOIN sports s ON er.sportsNo = s.no
      WHERE er.userNo = ?
      AND DATE(STR_TO_DATE(er.exerciseDate, '%Y. %m. %d.')) >= DATE(STR_TO_DATE(?, '%Y. %m. %d.')) - INTERVAL 2 DAY
      AND DATE(STR_TO_DATE(er.exerciseDate, '%Y. %m. %d.')) <= DATE(STR_TO_DATE(?, '%Y. %m. %d.'))
      ORDER BY er.exerciseDate DESC;`;
      const [ result ] = await pool.query(sql, [no, day, day]);
      return result;
    }catch(err){
      throw new Error("DB Error", { cause: err });
    }
  },

    // 해당 유저의 당일 운동 기록 목록 조회
    async findByRecentToday(no, day){
      try{
        const sql = `SELECT er.*, s.name AS sportsName,
        (select count(*) from exerciseRecord er where er.userNo = ? and DATE(STR_TO_DATE(er.exerciseDate, '%Y. %m. %d.')) = DATE(STR_TO_DATE(?, '%Y. %m. %d.'))) as cnt_exercise,
        (select sum(exerciseTime) from exerciseRecord er where er.userNo = ? and DATE(STR_TO_DATE(er.exerciseDate, '%Y. %m. %d.')) = DATE(STR_TO_DATE(?, '%Y. %m. %d.'))) as total_time
        FROM exerciseRecord er
        INNER JOIN sports s ON er.sportsNo = s.no
        WHERE er.userNo = ?
        AND DATE(STR_TO_DATE(er.exerciseDate, '%Y. %m. %d.')) = DATE(STR_TO_DATE(?, '%Y. %m. %d.'))
        ORDER BY er.exerciseDate DESC;`;
        const [ result ] = await pool.query(sql, [no, day, no, day, no, day]);
        return result;
      }catch(err){
        throw new Error("DB Error", { cause: err });
      }
    },

  // 음식 기록 목록 조회
  async findfoodrecord(no){
    try{
      const sql = `select * from dietRecord left join food on dietRecord.foodNo = food.no where userNo = ?`;
      const [ result ] = await pool.query(sql, [no]);
      return result;
    }catch(err){
      throw new Error("DB Error", { cause: err });
    }
  },

    //음식 세부 기록 목록 조회
    async findFoodByFoodNo(foodNo) {
      try {
        const sql = `SELECT * FROM food WHERE foodNo = ?`;
        const [result] = await pool.query(sql, [foodNo]);
        return result;
      } catch (err) {
        throw new Error("DB Error", { cause: err });
      }
    },
  

  // 운동 기록 등록
  async createsportsrecord(com) {
    try {
      const sql = `insert into exerciseRecord set ?`;
      const [result] = await pool.query(sql, [com]);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 음식 기록 등록
  async createfoodrecord(com) {
    try {
      const sql = `insert into dietRecord set ?`;
      const [result] = await pool.query(sql, [com]);
      return result.insertId;
    } catch (err) {
      throw new Error("DB Error", { cause: err });
    }
  },

  // 운동 기록 삭제
  async deletesportsrecord(id, conn=pool){
    try{
      const sql = `delete from exerciseRecord where planNo = ?`;
      const [ result ] = await conn.query(sql, [id]);
      return result.affectedRows;
    }catch(err){
      throw new Error("DB Error", { cause: err });
    }
  },

  // 음식 기록 삭제
  async deletefoodrecord(id, conn=pool){
    try{
      const sql = `delete from dietRecord where planNo = ?`;
      const [ result ] = await conn.query(sql, [id]);
      return result.affectedRows;
    }catch(err){
      throw new Error("DB Error", { cause: err });
    }
  }
};

module.exports = recordModel;