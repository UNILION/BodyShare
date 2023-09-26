-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';


USE `bodyshare` ;

-- -----------------------------------------------------
-- Table `bodyshare`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`user` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`user` (
  `userNo` INT NOT NULL AUTO_INCREMENT,
  `userId` VARCHAR(45) NOT NULL,
  `userName` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `nickname` VARCHAR(255) NOT NULL,
  `gender` VARCHAR(45) NULL DEFAULT NULL,
  `birthDate` DATETIME NULL DEFAULT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `height` FLOAT NOT NULL,
  `weight` FLOAT NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `profileImageUrl` VARCHAR(255) NULL DEFAULT 'userProfileDefault.png',
  `bannerImageUrl` VARCHAR(255) NULL DEFAULT 'bannerDefault.png',
  PRIMARY KEY (`userNo`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;

CREATE UNIQUE INDEX `userId_UNIQUE` ON `bodyshare`.`user` (`userId` ASC);




-- -----------------------------------------------------
-- Table `bodyshare`.`challenge`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`challenge` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`challenge` (
  `challengeNo` INT NOT NULL AUTO_INCREMENT,
  `adminUserNo` INT NOT NULL,
  `challengeName` VARCHAR(255) NOT NULL,
  `startDate` DATE NOT NULL,
  `endDate` DATE NOT NULL,
  `goalSportsNo` INT NOT NULL,
  `goalTime` TIME NULL DEFAULT NULL COMMENT '목표 시간',
  `goalKcal` INT NULL DEFAULT NULL COMMENT '목표 칼로리',
  `done` TINYINT NULL DEFAULT '0' COMMENT '완료/ 미완료 처리',
  `profileImageUrl` VARCHAR(255) NULL DEFAULT NULL,
  `bannerImageUrl` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`challengeNo`),
  CONSTRAINT `fk_challenge_adminUserNo`
    FOREIGN KEY (`adminUserNo`)
    REFERENCES `bodyshare`.`user` (`userNo`),
  CONSTRAINT `fk_challenge_sports1`
    FOREIGN KEY (`goalSportsNo`)
    REFERENCES `bodyshare`.`sports` (`no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_challenge_user1_idx` ON `bodyshare`.`challenge` (`adminUserNo` ASC);

CREATE INDEX `fk_challenge_sports1_idx` ON `bodyshare`.`challenge` (`goalSportsNo` ASC);


-- -----------------------------------------------------
-- Table `bodyshare`.`community`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`community` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`community` (
  `communityNo` INT NOT NULL AUTO_INCREMENT,
  `adminUserNo` INT NOT NULL,
  `interest` INT NOT NULL,
  `communityName` VARCHAR(255) NOT NULL,
  `createdDate` DATETIME NOT NULL,
  `intro` VARCHAR(255) NOT NULL COMMENT '커뮤니티 소개',
  `profileImageUrl` VARCHAR(255) NULL DEFAULT 'communityProfileDefault.png',
  `bannerImageUrl` VARCHAR(255) NULL DEFAULT 'bannerDefault.png',
  PRIMARY KEY (`communityNo`),
  CONSTRAINT `fk_community_adminUserNo`
    FOREIGN KEY (`adminUserNo`)
    REFERENCES `bodyshare`.`user` (`userNo`),
  CONSTRAINT `fk_community_sports1`
    FOREIGN KEY (`interest`)
    REFERENCES `bodyshare`.`sports` (`no`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_community_adminUserNo_idx` ON `bodyshare`.`community` (`adminUserNo` ASC);

CREATE INDEX `fk_community_sports1_idx` ON `bodyshare`.`community` (`interest` ASC);


-- -----------------------------------------------------
-- Table `bodyshare`.`communityPost`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`communityPost` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`communityPost` (
  `postNo` INT NOT NULL AUTO_INCREMENT,
  `communityNo` INT NOT NULL,
  `userNo` INT NOT NULL,
  `createdDate` DATETIME NOT NULL,
  `modifiedDate` DATETIME NULL DEFAULT NULL,
  `title` VARCHAR(255) NOT NULL,
  `content` VARCHAR(255) NULL,
  `locationLat` DOUBLE NULL DEFAULT NULL COMMENT '위도',
  `locationLong` DOUBLE NULL DEFAULT NULL COMMENT '경도',
  `likes` INT NULL DEFAULT '0' COMMENT '좋아요',
  `contentImageUrl` VARCHAR(255) NULL DEFAULT 'postDefault.png',
  `recordDate` DATE NULL DEFAULT NULL COMMENT '불러온 기록의 날짜',
  PRIMARY KEY (`postNo`),
  CONSTRAINT `fk_communityPost_communityId`
    FOREIGN KEY (`communityNo`)
    REFERENCES `bodyshare`.`community` (`communityNo`),
  CONSTRAINT `fk_communityPost_userNo`
    FOREIGN KEY (`userNo`)
    REFERENCES `bodyshare`.`user` (`userNo`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_communityPost_community1_idx` ON `bodyshare`.`communityPost` (`communityNo` ASC);

CREATE INDEX `fk_communityPost_userNo_idx` ON `bodyshare`.`communityPost` (`userNo` ASC);


-- -----------------------------------------------------
-- Table `bodyshare`.`communityPostComment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`communityPostComment` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`communityPostComment` (
  `commentNo` INT NOT NULL AUTO_INCREMENT,
  `postNo` INT NOT NULL,
  `userNo` INT NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `createdDate` DATETIME NOT NULL,
  `modifiedDate` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`commentNo`),
  CONSTRAINT `fk_communityPostComment_postNo`
    FOREIGN KEY (`postNo`)
    REFERENCES `bodyshare`.`communityPost` (`postNo`),
  CONSTRAINT `fk_communityPostComment_userNo`
    FOREIGN KEY (`userNo`)
    REFERENCES `bodyshare`.`user` (`userNo`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_communityPostComment_communityPost1_idx` ON `bodyshare`.`communityPostComment` (`postNo` ASC);

CREATE INDEX `fk_communityPostComment_userNo_idx` ON `bodyshare`.`communityPostComment` (`userNo` ASC);




-- -----------------------------------------------------
-- Table `bodyshare`.`dietRecord`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`dietRecord` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`dietRecord` (
  `planNo` INT NOT NULL AUTO_INCREMENT,
  `userNo` INT NOT NULL,
  `foodNo` INT NOT NULL,
  `date` DATE NOT NULL COMMENT '식단 날짜',
  `mealTime` DATETIME NULL DEFAULT NULL COMMENT '식사 시간( 아침, 점심, 저녁)',
  PRIMARY KEY (`planNo`),
  CONSTRAINT `fk_dietPlan_userNo`
    FOREIGN KEY (`userNo`)
    REFERENCES `bodyshare`.`user` (`userNo`),
  CONSTRAINT `fk_dietRecord_food1`
    FOREIGN KEY (`foodNo`)
    REFERENCES `bodyshare`.`food` (`no`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_dietPlan_userNo_idx` ON `bodyshare`.`dietRecord` (`userNo` ASC);

CREATE INDEX `fk_dietRecord_food1_idx` ON `bodyshare`.`dietRecord` (`foodNo` ASC);


-- -----------------------------------------------------
-- Table `bodyshare`.`exerciseRecord`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`exerciseRecord` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`exerciseRecord` (
  `planNo` INT NOT NULL AUTO_INCREMENT,
  `userNo` INT NOT NULL,
  `sportsNo` INT NOT NULL,
  `date` DATE NOT NULL COMMENT '계획 날짜 및 시간',
  `exerciseTime` INT NOT NULL COMMENT '실제 운동 시간',
  `sets` INT NULL DEFAULT NULL COMMENT '세트 수',
  `weight` INT NULL DEFAULT NULL COMMENT '중량',
  `distance` DOUBLE NULL DEFAULT NULL COMMENT '거리',
  `consum` DOUBLE NULL DEFAULT NULL COMMENT '계산된 소모 칼로리양',
  PRIMARY KEY (`planNo`),
  CONSTRAINT `fk_exercisePlan_userNo`
    FOREIGN KEY (`userNo`)
    REFERENCES `bodyshare`.`user` (`userNo`),
  CONSTRAINT `fk_exerciseRecord_sports1`
    FOREIGN KEY (`sportsNo`)
    REFERENCES `bodyshare`.`sports` (`no`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_exercisePlan_user_idx` ON `bodyshare`.`exerciseRecord` (`userNo` ASC);

CREATE INDEX `fk_exerciseRecord_sports1_idx` ON `bodyshare`.`exerciseRecord` (`sportsNo` ASC);


-- -----------------------------------------------------
-- Table `bodyshare`.`feedPost`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`feedPost` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`feedPost` (
  `postNo` INT NOT NULL AUTO_INCREMENT,
  `userNo` INT NOT NULL,
  `createdDate` DATETIME NOT NULL COMMENT '작성 날짜 및 시간',
  `modifiedDate` DATETIME NULL DEFAULT NULL COMMENT '수정 날짜 및 시간',
  `content` VARCHAR(255) NULL DEFAULT NULL COMMENT '내용',
  `locationLat` DOUBLE NULL DEFAULT NULL COMMENT '위도',
  `locationLong` DOUBLE NULL DEFAULT NULL COMMENT '경도',
  `likes` INT NOT NULL DEFAULT '0',
  `contentImageUrl` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`postNo`),
  CONSTRAINT `fk_feedPost_userNo`
    FOREIGN KEY (`userNo`)
    REFERENCES `bodyshare`.`user` (`userNo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_feedPost_userNo_idx` ON `bodyshare`.`feedPost` (`userNo` ASC);


-- -----------------------------------------------------
-- Table `bodyshare`.`feedPostComment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`feedPostComment` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`feedPostComment` (
  `commentNo` INT NOT NULL AUTO_INCREMENT,
  `postNo` INT NOT NULL,
  `userNo` INT NOT NULL,
  `content` VARCHAR(255) NOT NULL COMMENT '내용',
  `createdDate` DATETIME NOT NULL COMMENT '댓글 작성 날짜 및 시간',
  `modifiedDate` DATETIME NULL DEFAULT NULL COMMENT '수정 날짜 및 시간',
  PRIMARY KEY (`commentNo`),
  CONSTRAINT `fk_feedPostComment_postNo`
    FOREIGN KEY (`postNo`)
    REFERENCES `bodyshare`.`feedPost` (`postNo`),
  CONSTRAINT `fk_feedPostComment_userNo`
    FOREIGN KEY (`userNo`)
    REFERENCES `bodyshare`.`user` (`userNo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_feedPostComment_feedPost1_idx` ON `bodyshare`.`feedPostComment` (`postNo` ASC);

CREATE INDEX `fk_feedPostComment_userNo_idx` ON `bodyshare`.`feedPostComment` (`userNo` ASC);


-- -----------------------------------------------------
-- Table `bodyshare`.`feedPostInterest`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`feedPostInterest` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`feedPostInterest` (
  `no` INT NOT NULL AUTO_INCREMENT,
  `postNo` INT NOT NULL,
  `sportsNo` INT NOT NULL,
  PRIMARY KEY (`no`),
  CONSTRAINT `fk_feedPostInterest_feedPost1`
    FOREIGN KEY (`postNo`)
    REFERENCES `bodyshare`.`feedPost` (`postNo`),
  CONSTRAINT `fk_feedPostInterest_sports1`
    FOREIGN KEY (`sportsNo`)
    REFERENCES `bodyshare`.`sports` (`no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_feedPostInterest_feedPost1_idx` ON `bodyshare`.`feedPostInterest` (`postNo` ASC);

CREATE INDEX `fk_feedPostInterest_sports1_idx` ON `bodyshare`.`feedPostInterest` (`sportsNo` ASC);


-- -----------------------------------------------------
-- Table `bodyshare`.`uesrsChallenge`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`uesrsChallenge` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`uesrsChallenge` (
  `no` INT NOT NULL AUTO_INCREMENT,
  `userNo` INT NOT NULL,
  `challengeNo` INT NOT NULL,
  `progress` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`no`),
  CONSTRAINT `fk_uesrsChallenge_challenge1`
    FOREIGN KEY (`challengeNo`)
    REFERENCES `bodyshare`.`challenge` (`challengeNo`),
  CONSTRAINT `fk_uesrsChallenge_user1`
    FOREIGN KEY (`userNo`)
    REFERENCES `bodyshare`.`user` (`userNo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_uesrsChallenge_user1_idx` ON `bodyshare`.`uesrsChallenge` (`userNo` ASC);

CREATE INDEX `fk_uesrsChallenge_challenge1_idx` ON `bodyshare`.`uesrsChallenge` (`challengeNo` ASC);


-- -----------------------------------------------------
-- Table `bodyshare`.`userInterest`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`userInterest` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`userInterest` (
  `no` INT NOT NULL AUTO_INCREMENT,
  `userNo` INT NOT NULL,
  `sportsNo` INT NOT NULL,
  PRIMARY KEY (`no`),
  CONSTRAINT `fk_userInterest_sportsNo`
    FOREIGN KEY (`sportsNo`)
    REFERENCES `bodyshare`.`sports` (`no`),
  CONSTRAINT `fk_userInterest_userNo`
    FOREIGN KEY (`userNo`)
    REFERENCES `bodyshare`.`user` (`userNo`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_userInterest_user1_idx` ON `bodyshare`.`userInterest` (`userNo` ASC);

CREATE INDEX `fk_userInterest_sports1_idx` ON `bodyshare`.`userInterest` (`sportsNo` ASC);


-- -----------------------------------------------------
-- Table `bodyshare`.`usersCommunity`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bodyshare`.`usersCommunity` ;

CREATE TABLE IF NOT EXISTS `bodyshare`.`usersCommunity` (
  `no` INT NOT NULL AUTO_INCREMENT,
  `userNo` INT NOT NULL,
  `communityNo` INT NOT NULL,
  PRIMARY KEY (`no`),
  CONSTRAINT `fk_usersCommunity_community1`
    FOREIGN KEY (`communityNo`)
    REFERENCES `bodyshare`.`community` (`communityNo`),
  CONSTRAINT `fk_usersCommunity_user1`
    FOREIGN KEY (`userNo`)
    REFERENCES `bodyshare`.`user` (`userNo`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_usersCommunity_user1_idx` ON `bodyshare`.`usersCommunity` (`userNo` ASC);

CREATE INDEX `fk_usersCommunity_community1_idx` ON `bodyshare`.`usersCommunity` (`communityNo` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
