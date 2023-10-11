-------- 유저 등록 ----------
INSERT INTO user (userId, password, nickname, height, weight, profileImageUrl, bannerImageUrl) VALUES ('dongyun1', "1234567a", "CDY11", 178, 70, "userptennis1.png", "userbtennis2.png");
INSERT INTO user (userId, password, nickname, height, weight, profileImageUrl, bannerImageUrl) VALUES ('sangmin2', "1234567a", "LSM22", 180, 73, "userpswim2.png", "userbswim1.png");
INSERT INTO user (userId, password, nickname, height, weight, profileImageUrl, bannerImageUrl) VALUES ('gyeongmin3', "1234567a", "LGM33", 168, 50, "userppilates1.png", "userbpilates1.png");
INSERT INTO user (userId, password, nickname, height, weight, profileImageUrl, bannerImageUrl) VALUES ('junbeom4', "1234567a", "JJB44", 180, 75, "userphealth2.png", "userbhealth2.png");
INSERT INTO user (userId, password, nickname, height, weight, profileImageUrl, bannerImageUrl) VALUES ('eunbi5', "1234567a", "AEB55", 170, 50, "userppilates2.png", "userbpilates2.png");

INSERT INTO user (userId, password, nickname, height, weight, profileImageUrl, bannerImageUrl) VALUES ('bodyshare', "1234567a", "bodyshare", 180, 75, "userphealth1.png", "userbhealth1.png");  -- 구현용 아이디 --


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

INSERT INTO userInterest (userNo, sportsNo) VALUES (6, 97);

-------- 커뮤니티 등록 ----------
INSERT INTO community (adminUserNo, interest, communityName, intro, profileImageUrl, bannerImageUrl) VALUES (1, 12, "테니스홀릭", "실력에 상관없이 테니스를 좋아하는 모두를 위한 모임!", "commuptennis1.png", "commubtennis2.png");
INSERT INTO community (adminUserNo, interest, communityName, intro, profileImageUrl, bannerImageUrl) VALUES (1, 116, "클라이밍에 미치다", "클라이밍을 하는 모든 사람들을 위한 곳(실내 클라이밍, 클라이밍)", "commupclimbing1.png", "commubclimbing2.png");
INSERT INTO community (adminUserNo, interest, communityName, intro, profileImageUrl, bannerImageUrl) VALUES (2, 10, "모두의 축구", "전국 축구를 좋아하는 사람 모임, 소식 공유, 팀 매칭, 구장 대관", "commupsoccer1.png", "commubsoccer1.png");
INSERT INTO community (adminUserNo, interest, communityName, intro, profileImageUrl, bannerImageUrl) VALUES (2, 2, "경기 농구 연구소", "경기 농구 커뮤니티, 농구 모임, 대회, 용병", "commupbasketball2.png", "commubbasketball1.png");
INSERT INTO community (adminUserNo, interest, communityName, intro, profileImageUrl, bannerImageUrl) VALUES (3, 135, "수영 in 서울", "실내수영을 전문으로 수영을 좋아하는 서울 거주자 누구든 환영!", "commupswim2.png", "commubswim2.png");
INSERT INTO community (adminUserNo, interest, communityName, intro, profileImageUrl, bannerImageUrl) VALUES (3, 5, "수원 배드민턴", "함께하면 더 즐거운 거침없이 스매싱, 초보/아마추어/고수 모든분들 환영(수원)", "commupbadmiton2.png", "commubbadminton1.png" );
INSERT INTO community (adminUserNo, interest, communityName, intro, profileImageUrl, bannerImageUrl) VALUES (4, 129, "FreeRunningCrew", "FRC는 서울을 근거지로 달리기를 통하여 건강한 신체와 정신을 기르기 위한 러닝크루 입니다.", "commuprunning2.png", "commubrunning1.png" );
INSERT INTO community (adminUserNo, interest, communityName, intro, profileImageUrl, bannerImageUrl) VALUES (5, 141, "자출사", "자전거로 출퇴근하는 사람들", "commupcycle2.png", "commubcycle1.png");

INSERT INTO community (adminUserNo, interest, communityName, intro, profileImageUrl, bannerImageUrl) VALUES (5, 97, "헬스매니아", "대한민국 NO.1 헬스 커뮤니티", "commuphealth2.png", "commubhealth1.png");

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

INSERT INTO usersCommunity (userNo, communityNo) VALUES (5, 9);

-------- 유저 운동/식단 기록 등록 ----------
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (4, 12, "2023. 9. 27.", 60, 100);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (4, 141, "2023. 9. 29.", 60, 130);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (4, 12, "2023. 10. 3.", 60, 150);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (4, 12, "2023. 10. 5.", 60, 150);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (4, 12, "2023. 10. 8.", 30, 60);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (4, 12, "2023. 10. 9.", 60, 150);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (4, 141, "2023. 10. 9.", 60, 200);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (4, 141, "2023. 10. 10.", 120, 300);
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (4, 853, "2023. 9. 29.");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (4, 853, "2023. 10. 3.");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (4, 908, "2023. 10. 8.");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (4, 594, "2023. 10. 8.");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (4, 853, "2023. 10. 10.");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (4, 829, "2023. 10. 10.");


INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (6, 12, "2023. 10. 9.", 60, 200);
INSERT INTO exerciseRecord (userNo, sportsNo, exerciseDate, exerciseTime, consum) VALUES (6, 12, "2023. 10. 10.", 120, 300);
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (6, 853, "2023. 10. 9.");
INSERT INTO dietRecord (userNo, foodNo, dietDate) VALUES (6, 118, "2023. 10. 10.");


-------- 커뮤니티 게시물 등록 ----------
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (1, 1, "오늘의 테니스..", "비록 졌지만 1점차 승부..", "feedtennis6.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (1, 1, "아마추어 대회 신청", "기다리던 아마추어 대회 성공적으로 신청완료!", "feedtennis3.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (1, 2, "테니스로 활력충전", "힐링은 역시 테니스", "feedtennis1.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (2, 1, "실내 클라이밍 도전", "초록 난이도 클리어~", "feedclimbing1.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (2, 1, "클라이밍화 구매", "이번에 새로 구입한 클라이밍화", "feedclimbing2.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (2, 1, "종로 클라이밍 체험", "종로에 위치한 실내 클라이밍 체험!", "feedclimbing3.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (3, 1, "축구화..", "축구화 바꿀 때가 됐나보다..", "feedsoccer8.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (3, 2, "프리킥 골", "동점 상황 완벽한 슈팅 마무리", "feedsoccer9.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (3, 2, "오축완", "오늘도 축구 완료 #인증샷", "feedsoccer10.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (4, 2, "슛은 커리처럼", "경기도 스테판 커리!!", "feedbasketball1.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (4, 2, "슬램덩크", "오늘도 신나게 한판", "feedbasketball2.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (4, 2, "나이키 조던", "반갑다 새 친구", "feedbasketball3.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (5, 2, "올림픽 수영장", "올림픽 수영장 첫 방문!", "feedswim9.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (5, 3, "자유영 말고", "다른거 배우고 싶다ㅠㅠ", "feedswim5.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (5, 3, "물에 뜨는 법", "생각보다 쉬움", "feedswim7.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (6, 3, "복식 경기", "생각보다 잘 안풀리던 날", "feedbadminton2.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (6, 3, "라켓 구매!", "다음 경기 대비 새로운 라켓 구매~", "feedbadminton8.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (6, 3, "발목 부상", "착지할때 발목 부상ㅠ", "feedbadminton3.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (7, 4, "러닝 기록", "아침 러닝 완료", "feedrunning1.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (7, 4, "한강 러닝", "오늘도 한강", "feedrunning4.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (7, 4, "러닝 코스", "러닝 코스 추천 받아요!", "feedrunning3.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (8, 5, "자전거 코스", "자전거 코스 추천 받아요!", "feedcycle7.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (8, 5, "자전거 구매 고민", "원하는 가격대에서 좋은거 찾기가 쉽지 않네요", "feedcycle5.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (8, 5, "오늘 기록", "한강에서 자전거 2시간 타기 완료!", "feedcycle6.png");

INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (9, 5, "헬린이 일기", "처음보는 기구가 너무 많지만 도전!", "feedhealth5.png");
INSERT INTO communityPost (communityNo, userNo, title, content, contentImageUrl) VALUES (9, 5, "오늘 헬스", "런닝머신 30분, 스쿼트 5세트 끝!", "feedhealth7.png");

-------- 게시물 댓글 등록 ----------

INSERT INTO communityPostComment (postNo, userNo, content) VALUES (1, 3, "패배라도 1점 차 아쉽겠지만 힘내세요. ");
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (1, 5, "다음 경기에서는 더 좋은 결과 있을 거에요 파이팅!");
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (2, 3, "대회에서 멋진 경기 펼치길 기대할게요.");
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (2, 4, "대회 참가 확정되었군요! 기운 내서 최고의 모습 보여주세요. 응원합니다!");
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (3, 2, "테니스로 활력을 찾는 순간은 참 좋아요. 어떤 기술을 연마하고 계세요? ");
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (3, 4, "테니스로 활력을 찾다니 저도 같이하고싶네요.");
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (22, 2, "건강한 습관을 만들어 나가는 모습이 보기 좋아요.");
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (22, 3, "저도 조깅으로 시작하는 아침은 하루를 상쾌하게 시작하는 느낌인거같아요");
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (23, 1, "저도 한강에서 런닝하는데 다음에 같이하실래요?");
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (23, 2, "한강에서 러닝하고싶은데 너무 머네요 ㅠㅠ");
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (24, 2, "어떤 지역에 관심이 있나요? 쾌적한 코스를 소개해드릴게요! ");
INSERT INTO communityPostComment (postNo, userNo, content) VALUES (24, 3, "저도 러닝 좋아하는데 어떤 지역이 좋아서 추천을 받고 싶다면 알려주세요! ");





