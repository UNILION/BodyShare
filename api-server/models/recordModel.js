const pool = require("./pool");

const recordModel = {
  // 운동 기록 목록 조회
  async findsportsrecord(no){
    try{
      const sql = `select * from exerciseRecord where userNo = ?`;
      const [ result ] = await pool.query(sql, [no]);
      return result;
    }catch(err){
      throw new Error("DB Error", { cause: err });
    }
  },

  // 해당 유저의 최근 3일 운동 기록 목록 조회
  async findByRecent(no){
    try{
      const sql = `SELECT er.*, s.name AS sportsName
      FROM exerciseRecord er
      INNER JOIN sports s ON er.sportsNo = s.no
      WHERE er.userNo = ?
      AND er.date >= DATE_SUB(DATE_ADD(CURDATE(), INTERVAL 9 HOUR), INTERVAL 3 DAY)
      ORDER BY er.date DESC;`;
      const [ result ] = await pool.query(sql, [no]);
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