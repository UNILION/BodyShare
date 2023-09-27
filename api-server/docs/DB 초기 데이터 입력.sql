-- 유저 4명(홍길동, 김길동, 이길동, 박길동)
-- 유저 관심사 정보(홍길동 - 클라이밍, 자전거 / 김길동 - 클라이밍,달리기 / 이길동 - 클라이밍 / 박길동 - 달리기) 
-- 커뮤니티 5개(클라이밍(116번)2개, 자전거(141) 2개, 달리기(129) 1개)
-- 유저 커뮤니티 가입정보(홍길동 커뮤니티 생성한 모든 커뮤니티 / 김길동 - 서울 클라이밍)
-- 운동 기록(홍길동 클라이밍), 식단 기록(홍길동 닭고기 가슴(854))

-------- 유저 등록 ----------
INSERT INTO user (userId, userName, password, nickname, height, weight) VALUES ('abc123', '홍길동', "1234", "홍길동", 180.6, 75.6);
INSERT INTO user (userId, userName, password, nickname, height, weight) VALUES ('abc234', '김길동', "1234", "김길동", 176.6, 70.6);
INSERT INTO user (userId, userName, password, nickname, height, weight) VALUES ('abc345', '이길동', "1234", "이길동", 177.6, 71.6);
INSERT INTO user (userId, userName, password, nickname, height, weight) VALUES ('abc456', '박길동', "1234", "박길동", 178.6, 72.6);

-------- 유저 관심사 ----------
INSERT INTO userInterest (userNo, sportsNo) VALUES (1, 116);
INSERT INTO userInterest (userNo, sportsNo) VALUES (1, 141);
INSERT INTO userInterest (userNo, sportsNo) VALUES (2, 116);
INSERT INTO userInterest (userNo, sportsNo) VALUES (2, 129);
INSERT INTO userInterest (userNo, sportsNo) VALUES (3, 116);
INSERT INTO userInterest (userNo, sportsNo) VALUES (4, 129);

-------- 커뮤니티 등록 ----------
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (1, 116, "서울 클라이밍", "서울에서 클라이밍 하는 분들 어서 오세요!");
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (1, 141, "서울 자전거", "서울에서 자전거를 타신다구요?얼른 오세요!");
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (1, 129, "서울 달리기", "달려라 달려~ 달리는 의지 넘치는 분들 급구!");
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (1, 116, "경기 클라이밍", "경기도민 어서 모엿!");
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (1, 141, "경기 자전거", "혼자 자전거 타지 말고 같이 탈사람~~ (경기도 모집)");

-------- 유저 커뮤니티 가입 정보 ----------
INSERT INTO usersCommunity (userNo, communityNo) VALUES (1, 1);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (1, 2);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (1, 3);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (1, 4);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (1, 5);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (2, 1);

-------- 유저 운동/식단 기록 등록 ----------
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime) VALUES (1, 116, "2023-09-21", 60);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime) VALUES (1, 116, "2023-09-22", 60);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime) VALUES (1, 128, "2023-09-24", 30);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime) VALUES (1, 2, "2023-09-25", 60);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime) VALUES (1, 1, "2023-09-26", 120);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime) VALUES (1, 115, "2023-09-27", 60);
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 854, "2023-09-21");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 854, "2023-09-22");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 455, "2023-09-27");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 144, "2023-09-27");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 244, "2023-09-27");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 244, "2023-09-27");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 25, "2023-09-27");

-------- 커뮤니티 게시물 등록 ----------
INSERT INTO communityPost (communityNo, userNo, title) VALUES (1, 1, "클라이밍 완료1");
INSERT INTO communityPost (communityNo, userNo, title) VALUES (1, 1, "클라이밍 완료2");
INSERT INTO communityPost (communityNo, userNo, title) VALUES (1, 1, "클라이밍 완료3");
INSERT INTO communityPost (communityNo, userNo, title) VALUES (2, 1, "자전거 완료1");
INSERT INTO communityPost (communityNo, userNo, title) VALUES (2, 1, "자전거 완료2");
INSERT INTO communityPost (communityNo, userNo, title) VALUES (2, 1, "자전거 완료3");
-------- 게시물 댓글 등록 ----------
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (1, 1, "멋있어요");




