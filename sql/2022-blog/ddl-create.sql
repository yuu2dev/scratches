-- `2022-blog`.guestbook definition
CREATE TABLE `guestbook` (
  `gb_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `gb_author` varchar(100) NOT NULL,
  `gb_content` varchar(255) NOT NULL,
  `gb_password` varchar(100) NOT NULL,
  `gb_request_ip` varchar(100) NOT NULL,
  `gb_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `gb_updated_at` timestamp NULL DEFAULT NULL,
  `gb_deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`gb_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='방명록';


-- `2022-blog`.`role` definition

CREATE TABLE `role` (
  `r_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `r_code` varchar(100) NOT NULL COMMENT '역할코드',
  `r_active` tinyint(1) NOT NULL DEFAULT 1 COMMENT '활성화여부',
  `r_created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '생성일',
  `r_updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='역할';


-- `2022-blog`.tag definition

CREATE TABLE `tag` (
  `t_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `t_name` varchar(100) NOT NULL COMMENT '태그명',
  `t_created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '생성일',
  `t_updated_at` timestamp NULL DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`t_id`),
  UNIQUE KEY `tag_UN` (`t_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='태그';


-- `2022-blog`.`user` definition

CREATE TABLE `user` (
  `u_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `u_email` varchar(100) NOT NULL COMMENT '이메일',
  `u_password` varchar(100) NOT NULL COMMENT '패스워드',
  `u_active` tinyint(1) NOT NULL DEFAULT 1 COMMENT '활성화여부',
  `u_created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '생성일',
  `u_updated_at` timestamp NULL DEFAULT NULL COMMENT '수정일',
  `u_withdrawn_at` timestamp NULL DEFAULT NULL COMMENT '탈퇴일',
  PRIMARY KEY (`u_id`),
  UNIQUE KEY `user_UN` (`u_email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='유저';


-- `2022-blog`.article definition

CREATE TABLE `article` (
  `a_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `a_title` varchar(100) NOT NULL COMMENT '제목',
  `a_content` text NOT NULL COMMENT '내용',
  `a_menu_id` int(10) unsigned DEFAULT NULL COMMENT '메뉴',
  `a_created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '생성일',
  `a_updated_at` timestamp NULL DEFAULT NULL COMMENT '수정일',
  `a_deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`a_id`),
  KEY `article_FK` (`a_menu_id`),
  CONSTRAINT `article_FK` FOREIGN KEY (`a_menu_id`) REFERENCES `article` (`a_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='게시글';


-- `2022-blog`.article_tag_map definition

CREATE TABLE `article_tag_map` (
  `at_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `at_article_id` int(10) unsigned DEFAULT NULL COMMENT '게시글',
  `at_tag_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`at_id`),
  KEY `article_tag_map_FK` (`at_tag_id`),
  KEY `article_tag_map_FK_1` (`at_article_id`),
  CONSTRAINT `article_tag_map_FK` FOREIGN KEY (`at_tag_id`) REFERENCES `tag` (`t_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_tag_map_FK_1` FOREIGN KEY (`at_article_id`) REFERENCES `article` (`a_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='게시글과 태그의 매핑';


-- `2022-blog`.comment definition

CREATE TABLE `comment` (
  `c_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `c_name` varchar(30) NOT NULL COMMENT '작성자',
  `c_content` varchar(100) DEFAULT NULL COMMENT '내용',
  `c_request_ip` varchar(100) NOT NULL COMMENT '요청 IP',
  `c_parent_id` int(10) unsigned DEFAULT NULL COMMENT '부모 댓글',
  `c_user_id` int(10) unsigned DEFAULT NULL COMMENT '유저',
  `c_article_id` int(10) unsigned DEFAULT NULL COMMENT '게시글',
  `c_created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '생성일',
  `c_updated_at` timestamp NULL DEFAULT NULL COMMENT '수정일',
  `c_deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`c_id`),
  KEY `comment_FK_1` (`c_parent_id`),
  KEY `comment_FK` (`c_user_id`),
  KEY `comment_FK_2` (`c_article_id`),
  CONSTRAINT `comment_FK` FOREIGN KEY (`c_user_id`) REFERENCES `user` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_FK_1` FOREIGN KEY (`c_parent_id`) REFERENCES `comment` (`c_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_FK_2` FOREIGN KEY (`c_article_id`) REFERENCES `article` (`a_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='댓글';


-- `2022-blog`.menu definition

CREATE TABLE `menu` (
  `m_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `m_name` varchar(100) NOT NULL COMMENT '메뉴명',
  `m_route` varchar(100) DEFAULT NULL COMMENT 'UI 라우트 식별자',
  `m_parent_id` int(10) unsigned DEFAULT NULL COMMENT '부모 메뉴',
  `m_created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '생성일',
  `m_updated_at` timestamp NULL DEFAULT NULL COMMENT '수정일',
  PRIMARY KEY (`m_id`),
  UNIQUE KEY `menu_UN` (`m_route`),
  KEY `menu_FK` (`m_parent_id`),
  CONSTRAINT `menu_FK` FOREIGN KEY (`m_parent_id`) REFERENCES `menu` (`m_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='메뉴';