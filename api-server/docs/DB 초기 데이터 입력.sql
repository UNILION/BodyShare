-------- 유저 등록 ----------
INSERT INTO user (userId, password, nickname, height, weight) VALUES ('dongyun1', "1234", "최동윤", 178, 70);
INSERT INTO user (userId, password, nickname, height, weight) VALUES ('sangmin2', "1234", "이상민", 180, 73);
INSERT INTO user (userId, password, nickname, height, weight) VALUES ('gyeongmin3', "1234", "이경민", 168, 50);
INSERT INTO user (userId, password, nickname, height, weight) VALUES ('junbeom4', "1234", "장준범", 180, 75);
INSERT INTO user (userId, password, nickname, height, weight) VALUES ('eunbi5', "1234", "안은비", 170, 50);

-------- 유저 관심사 ----------
INSERT INTO userInterest (userNo, sportsNo) VALUES (1, 12);
INSERT INTO userInterest (userNo, sportsNo) VALUES (1, 10);
INSERT INTO userInterest (userNo, sportsNo) VALUES (1, 2);
INSERT INTO userInterest (userNo, sportsNo) VALUES (2, 12);
INSERT INTO userInterest (userNo, sportsNo) VALUES (2, 135);
INSERT INTO userInterest (userNo, sportsNo) VALUES (2, 5);
INSERT INTO userInterest (userNo, sportsNo) VALUES (3, 12);
INSERT INTO userInterest (userNo, sportsNo) VALUES (3, 129);
INSERT INTO userInterest (userNo, sportsNo) VALUES (4, 12);
INSERT INTO userInterest (userNo, sportsNo) VALUES (4, 141);
INSERT INTO userInterest (userNo, sportsNo) VALUES (5, 12);
INSERT INTO userInterest (userNo, sportsNo) VALUES (5, 116);

-------- 커뮤니티 등록 ----------
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (1, 12, "테니스홀릭", "실력에 상관없이 테니스를 좋아하는 모두를 위한 모임!");
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (1, 116, "클라이밍에 미치다", "클라이밍을 하는 모든 사람들을 위한 곳(실내 클라이밍, 클라이밍)");
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (2, 10, "모두의 축구", "전국 축구를 좋아하는 사람 모임, 소식 공유, 팀 매칭, 구장 대관");
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (2, 2, "경기 농구 연구소", "경기 농구 커뮤니티, 농구 모임, 대회, 용병");
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (3, 135, "수영 in 서울", "실내수영을 전문으로 수영을 좋아하는 서울 거주자 누구든 환영!");
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (3, 5, "수원 배드민턴", "함께하면 더 즐거운 거침없이 스매싱, 초보/아마추어/고수 모든분들 환영(수원)");
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (4, 129, "FreeRunningCrew", "FRC는 서울을 근거지로 달리기를 통하여 건강한 신체와 정신을 기르기 위한 러닝크루 입니다.");
INSERT INTO community (adminUserNo, interest, communityName, intro) VALUES (5, 141, "자출사", "자전거로 출퇴근하는 사람들");

-------- 유저 커뮤니티 가입 정보 ----------
INSERT INTO usersCommunity (userNo, communityNo) VALUES (1, 1);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (1, 2);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (1, 3);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (2, 3);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (2, 4);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (2, 1);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (2, 5);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (3, 5);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (3, 6);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (3, 1);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (4, 1);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (4, 7);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (5, 1);
INSERT INTO usersCommunity (userNo, communityNo) VALUES (5, 8);

-------- 유저 운동/식단 기록 등록 ----------
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (1, 116, "2023. 9. 21.", 60, 100);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (1, 116, "2023. 9. 22.", 60, 130);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (1, 128, "2023. 9. 24.", 30, 60);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (1, 2, "2023. 9. 25.", 60, 150);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (1, 1, "2023. 9. 26.", 120, 300);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (1, 115, "2023. 9. 27.", 60, 140);
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 854, "2023. 9. 21.");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 854, "2023. 9. 22.");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 455, "2023. 9. 27.");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 144, "2023. 9. 27.");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 244, "2023. 9. 27.");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 244, "2023. 9. 27.");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (1, 25, "2023. 9. 27.");

-------- 커뮤니티 게시물 등록 ----------
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (1, 1, "오늘의 테니스..", "비록 졌지만 1점차 승부..");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (1, 1, "아마추어 대회 신청", "기다리던 아마추어 대회 성공적으로 신청완료!");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (1, 2, "테니스로 활력충전", "힐링은 역시 테니스");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (2, 1, "실내 클라이밍 도전", "초록 난이도 클리어~");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (2, 1, "클라이밍화 구매", "이번에 새로 구입한 클라이밍화");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (2, 1, "종로 클라이밍 체험", "종로에 위치한 실내 클라이밍 체험!");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (3, 1, "축구화..", "축구화 바꿀 때가 됐나보다..");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (3, 2, "프리킥 골", "동점 상황 완벽한 슈팅 마무리");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (3, 2, "오축완", "오늘도 축구 완료 #인증샷");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (4, 2, "슛은 커리처럼", "경기도 스테판 커리!!");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (4, 2, "슬램덩크", "오늘도 신나게 한판");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (4, 2, "나이키 조던", "반갑다 새 친구");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (5, 2, "올림픽 수영장", "올림픽 수영장 첫 방문!");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (5, 3, "자유영 말고", "다른거 배우고 싶다ㅠㅠ");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (5, 3, "물에 뜨는 법", "생각보다 쉬움");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (6, 3, "복식 경기", "생각보다 잘 안풀리던 날");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (6, 3, "라켓 구매!", "다음 경기 대비 새로운 라켓 구매~");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (6, 3, "발목 부상", "착지할때 발목 부상ㅠ");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (7, 4, "러닝 기록", "아침 러닝 완료");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (7, 4, "한강 러닝", "오늘도 한강");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (7, 4, "러닝 코스", "러닝 코스 추천 받아요!");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (8, 5, "자전거 코스", "자전거 코스 추천 받아요!");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (8, 5, "자전거 구매 고민", "원하는 가격대에서 좋은거 찾기가 쉽지 않네요");
INSERT INTO communityPost (communityNo, userNo, title, content) VALUES (8, 5, "오늘 기록", "한강에서 자전거 2시간 타기 완료!");

-------- 게시물 댓글 등록 ----------
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (1, 2, "멋있어요");
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (1, 3, "좋아요");




