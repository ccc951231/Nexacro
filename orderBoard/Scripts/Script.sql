--CREATE TABLE TB_USER(
--	LOGIN_ID VARCHAR(20) PRIMARY KEY,
--	PWD VARCHAR2(20),
--	NAME VARCHAR2(20),
--	PHONE NUMBER,
--	REG_DT DATE,
--	UPD_DT DATE);
--	
--SELECT * FROM TB_USER;

CREATE TABLE TB_CUST( -- 고객 정보 테이블
	CUST_CD VARCHAR2(20) PRIMARY KEY,
	CUST_GBCD VARCHAR2(20),
	CUST_NM VARCHAR2(20),
	PHONE NUMBER,
	BIRTH VARCHAR2(8),
	ADDR VARCHAR2(100),
	REG_DT DATE,
	UPD_DT DATE
);

INSERT INTO TB_CUST(CUST_CD, CUST_GBCD, CUST_NM, PHONE, BIRTH, ADDR, REG_DT, UPD_DT)
VALUES('1','C','네이버','03112345678','0811111','서울시 강남구', SYSDATE, SYSDATE);
INSERT INTO TB_CUST(CUST_CD, CUST_GBCD, CUST_NM, PHONE, BIRTH, ADDR, REG_DT, UPD_DT)
VALUES('2','C','카카오','03111112222','08122222','서울시 서초구', SYSDATE, SYSDATE);
INSERT INTO TB_CUST(CUST_CD, CUST_GBCD, CUST_NM, PHONE, BIRTH, ADDR, REG_DT, UPD_DT)
VALUES('3','C','삼성전자','0230199999','08333333','서울시 송파구', SYSDATE, SYSDATE);
INSERT INTO TB_CUST(CUST_CD, CUST_GBCD, CUST_NM, PHONE, BIRTH, ADDR, REG_DT, UPD_DT)
VALUES('4','C','현대차','01012345678','0843244','서울시 성동구', SYSDATE, SYSDATE);
INSERT INTO TB_CUST(CUST_CD, CUST_GBCD, CUST_NM, PHONE, BIRTH, ADDR, REG_DT, UPD_DT)
VALUES('5','P','부길동','01012345677','19101010','서울시 광진구', SYSDATE, SYSDATE);
INSERT INTO TB_CUST(CUST_CD, CUST_GBCD, CUST_NM, PHONE, BIRTH, ADDR, REG_DT, UPD_DT)
VALUES('6','P','김감찬','01012341234','10000101','서울시 강동구', SYSDATE, SYSDATE);
INSERT INTO TB_CUST(CUST_CD, CUST_GBCD, CUST_NM, PHONE, BIRTH, ADDR, REG_DT, UPD_DT)
VALUES('7','P','박지문덕','01098765432','3100101','서울시 중랑구', SYSDATE, SYSDATE);
INSERT INTO TB_CUST(CUST_CD, CUST_GBCD, CUST_NM, PHONE, BIRTH, ADDR, REG_DT, UPD_DT)
VALUES('8','P','홍순신','01077777777','14100101','서울시 동대문구', SYSDATE, SYSDATE);

SELECT * FROM TB_CUST;

COMMENT ON TABLE TB_CUST IS '고객정보';
COMMENT ON COLUMN TB_CUST.CUST_CD IS '고객번호';
COMMENT ON COLUMN TB_CUST.CUST_GBCD IS '고객구분코드';
COMMENT ON COLUMN TB_CUST.CUST_NM IS '고객명';
COMMENT ON COLUMN TB_CUST.PHONE IS '휴대폰번호';
COMMENT ON COLUMN TB_CUST.BIRTH IS '생년월일사업자번호';
COMMENT ON COLUMN TB_CUST.ADDR IS '주소';
COMMENT ON COLUMN TB_CUST.REG_DT IS '등록일자';
COMMENT ON COLUMN TB_CUST.UPD_DT IS '변경일자';

SELECT * FROM ALL_COL_COMMENTS WHERE TABLE_NAME = 'TB_CUST';


CREATE SEQUENCE MAN.ORDER_SEQ
	   INCREMENT BY 1
	   START WITH 1
	   MINVALUE 1
	   MAXVALUE 9999
	   CYCLE NOCACHE
	   NOORDER;
	   
SELECT ORDER_SEQ.NEXTVAL FROM DUAL;
SELECT ORDER_SEQ.CURRVAL FROM DUAL;

CREATE INDEX ORD_IX01 ON TB_ORD(ORD_NO);


CREATE TABLE TB_ITEM( -- 상품 정보
	ITEM_CD VARCHAR(20) PRIMARY KEY,
	ITEM_NM VARCHAR2(20),
	REG_DT DATE,
	UPD_DT DATE);

SELECT * FROM TB_ITEM;

COMMENT ON TABLE TB_ITEM IS '상품정보';
COMMENT ON COLUMN TB_ITEM.ITEM_CD IS '상품코드';
COMMENT ON COLUMN TB_ITEM.ITEM_NM IS '상품명';
COMMENT ON COLUMN TB_ITEM.REG_DT IS '등록일자';
COMMENT ON COLUMN TB_ITEM.UPD_DT IS '변경일자';

SELECT * FROM ALL_TAB_COMMENTS WHERE TABLE_NAME = 'TB_ITEM'; -- 유저정보와 테이블의 코멘트명 확인
SELECT * FROM ALL_COL_COMMENTS WHERE TABLE_NAME = 'TB_ITEM'; -- 유저정보와 해당 테이블에 컬럼의 코멘트명 확인


CREATE OR REPLACE PROCEDURE PR_ITEM_MERGE( -- 상품 정보 테이블 생성
-- 매개변수를 지정하는 부분이다. IN은 입력 매개변수, OUT은 출력(호출해서 사용시 쓰임)되는 매개변수이다. 
	IV_ITEM_CD IN VARCHAR2,
	IV_ITEM_NM IN TB_ITEM.ITEM_NM%TYPE, -- 테이블 컬럼으로부터 타입 정보를 가져온다.
	OV_REG_DT OUT TB_ITEM.REG_DT%TYPE -- 타입 정보를 가져올 수 있다.
)
IS
	V_CNT NUMBER; -- 프로시저 내 사용할 변수 선언
	V_REG_DT DATE;
BEGIN
	SELECT COUNT(*) INTO V_CNT -- 선언한 변수에 값을 담는 첫번째 방법
	FROM TB_ITEM
	WHERE ITEM_CD = IV_ITEM_CD;
	
	IF V_CNT = 0 THEN
		INSERT INTO TB_ITEM(ITEM_CD, ITEM_NM, REG_DT, UPD_DT)
		VALUES(IV_ITEM_CD, IV_ITEM_NM, SYSDATE, SYSDATE);
	ELSE
		UPDATE TB_ITEM
			SET ITEM_NM = IV_ITEM_NM -- 변경할 컬럼명 = 매개변수로 들어오는 데이터
			,	UPD_DT = SYSDATE 
			WHERE ITEM_CD = IV_ITEM_CD; -- 변경할 조건
	END IF;
	
	SELECT REG_DT INTO V_REG_DT
	FROM TB_ITEM
	WHERE ITEM_CD = IV_ITEM_CD;

	OV_REG_DT := V_REG_DT; -- 선언한 변수에 값을 담는 두번째 방법
	COMMIT;
	EXCEPTION 
		WHEN OTHERS THEN
		DBMS_OUTPUT.PUT_LINE('예상치 못한 오류가 발생했습니다.');
		ROLLBACK;
	RETURN;
END PR_ITEM_MERGE;

-- (프로시저를 이용해서 더미데이터를 만들고, 테이블들에 데이터 넣기, 프로시저 생성아직 안해서 컨트롤 엔터 ㄱㄱ)

DROP PROCEDURE PR_ITEM_MERGE;

DECLARE
	V_REG_DT DATE;
BEGIN
	PR_ITEM_MERGE('A0005','애플 아이폰',V_REG_DT);
	DBMS_OUTPUT.PUT_LINE('프로시저 결과 값' || V_REG_DT);
END;

DECLARE
	V_REG_DT DATE;
BEGIN
	PR_ITEM_MERGE('A0004','삼성 갤럭시',V_REG_DT);
	DBMS_OUTPUT.PUT_LINE('프로시저 결과 값' || V_REG_DT);
END;

SELECT * FROM TB_ITEM;

TRUNCATE TABLE TB_ITEM;

SELECT * FROM TB_ITEM WHERE TYPE = 'PROCEDURE' AND NAME = 'PR_ITEM_MERGE';


-- 단일 테이블 머지문
-- 상황 : 상품테이블에 A0005 상품이 없다며 새롭게 INSERT, 이미 있다면 상품명과
-- 		수정일자 현재날짜로 업데이트
MERGE 
	INTO TB_ITEM ITEM -- UPDATE 또는 INSERT 대상
USING DUAL -- 비교군 테이블(비교할 테이블이 필요 없을 경우 DUAL을 사용), USING : 조회할 두 테이블에서 컬럼명이 동일할 때
	ON(ITEM.ITEM_CD = 'A0005') -- 비교 조건
  WHEN MATCHED THEN -- 조건에 일치하는게 존재한다면 UPDATE문 실행
	  UPDATE 
		SET ITEM.ITEM_NM = 'New그랜져'
			, 	  UPD_DT = SYSDATE -- '2021-03-06 09:00:00.000'
  WHEN NOT MATCHED THEN -- 조건에 일치하는게 없다면 INSERT문 실행
		INSERT(ITEM_CD, ITEM_NM, REG_DT, UPD_DT)
		VALUES('B0001','그랜져',SYSDATE ,SYSDATE);
COMMIT;

	

CREATE TABLE TB_ORD( -- 주문정보 테이블 생성
	ORD_NO VARCHAR(20) PRIMARY KEY,
	ITEM_CD VARCHAR2(20),
	CUST_CD VARCHAR2(20),
	ORD_STAT_CD VARCHAR2(20),
	REG_DT DATE,
	UPD_DT DATE);

INSERT INTO TB_ORD(ORD_NO, ITEM_CD, CUST_CD, ORD_STAT_CD, REG_DT, UPD_DT)
VALUES('202207110011','A0001','5','D', SYSDATE, SYSDATE);

INSERT INTO TB_ORD(ORD_NO, ITEM_CD, CUST_CD, ORD_STAT_CD, REG_DT, UPD_DT)
VALUES('202207110012','A0003','2','D', SYSDATE, SYSDATE);

INSERT INTO TB_ORD(ORD_NO, ITEM_CD, CUST_CD, ORD_STAT_CD, REG_DT, UPD_DT)
VALUES('202207110013','A0003','2','D', SYSDATE, SYSDATE);

INSERT INTO TB_ORD(ORD_NO, ITEM_CD, CUST_CD, ORD_STAT_CD, REG_DT, UPD_DT)
VALUES('202207110014','A0004','4','D', SYSDATE, SYSDATE);

INSERT INTO TB_ORD(ORD_NO, ITEM_CD, CUST_CD, ORD_STAT_CD, REG_DT, UPD_DT)
VALUES('202207110015','A0005','3','D', SYSDATE, SYSDATE);

INSERT INTO TB_ORD(ORD_NO, ITEM_CD, CUST_CD, ORD_STAT_CD, REG_DT, UPD_DT)
VALUES('202207110016','A0001','1','D', SYSDATE, SYSDATE);

INSERT INTO TB_ORD(ORD_NO, ITEM_CD, CUST_CD, ORD_STAT_CD, REG_DT, UPD_DT)
VALUES('202207110017','A0003','4','D', SYSDATE, SYSDATE);


SELECT * FROM TB_ITEM;	
SELECT * FROM TB_ORD;

COMMENT ON TABLE TB_ORD IS '주문정보';
COMMENT ON COLUMN TB_ORD.ORD_NO IS '주문번호';
COMMENT ON COLUMN TB_ORD.ITEM_CD IS '상품코드';
COMMENT ON COLUMN TB_ORD.CUST_CD IS '고객벊';
COMMENT ON COLUMN TB_ORD.ORD_STAT_CD IS '주문상태';
COMMENT ON COLUMN TB_ORD.REG_DT IS '등록일자';
COMMENT ON COLUMN TB_ORD.UPD_DT IS '변경일자';


CREATE TABLE TB_CD_MST( -- 공통 코드 테이블
	CD_VAL VARCHAR2(20),
	CD_NM VARCHAR2(20),
	CD_VAL1 VARCHAR2(20),
	CD_NM1 VARCHAR2(20),
	REG_DT DATE,
	UPD_DT DATE
);

INSERT INTO TB_CD_MST(CD_VAL, CD_NM, CD_VAL1, CD_NM1, REG_DT, UPD_DT)
VALUES('001','주문상태','A','주문대기', SYSDATE, SYSDATE);

INSERT INTO TB_CD_MST(CD_VAL, CD_NM, CD_VAL1, CD_NM1, REG_DT, UPD_DT)
VALUES('001','주문상태','B','주문접수', SYSDATE, SYSDATE);

INSERT INTO TB_CD_MST(CD_VAL, CD_NM, CD_VAL1, CD_NM1, REG_DT, UPD_DT)
VALUES('001','주문상태','C','주문취소', SYSDATE, SYSDATE);

INSERT INTO TB_CD_MST(CD_VAL, CD_NM, CD_VAL1, CD_NM1, REG_DT, UPD_DT)
VALUES('001','C','D','설치완료', SYSDATE, SYSDATE);

INSERT INTO TB_CD_MST(CD_VAL, CD_NM, CD_VAL1, CD_NM1, REG_DT, UPD_DT)
VALUES('001','주문상태','E','설치취소', SYSDATE, SYSDATE);

INSERT INTO TB_CD_MST(CD_VAL, CD_NM, CD_VAL1, CD_NM1, REG_DT, UPD_DT)
VALUES('002','고객구분','P','개인', SYSDATE, SYSDATE);

INSERT INTO TB_CD_MST(CD_VAL, CD_NM, CD_VAL1, CD_NM1, REG_DT, UPD_DT)
VALUES('002','고객구분','C','법인', SYSDATE, SYSDATE);

INSERT INTO TB_CD_MST(CD_VAL, CD_NM, CD_VAL1, CD_NM1, REG_DT, UPD_DT)
VALUES('002','고객구분','R','임직원', SYSDATE, SYSDATE);


SELECT * FROM TB_CD_MST; 

COMMENT ON TABLE TB_CD_MST IS '코드마스터';
COMMENT ON COLUMN TB_CD_MST.CD_VAL IS '공통코드';
COMMENT ON COLUMN TB_CD_MST.CD_NM IS '공통코드명';
COMMENT ON COLUMN TB_CD_MST.CD_VAL1 IS '상세코드';
COMMENT ON COLUMN TB_CD_MST.CD_NM1 IS '상세코드명';
COMMENT ON COLUMN TB_CD_MST.REG_DT IS '등록일자';
COMMENT ON COLUMN TB_CD_MST.UPD_DT IS '변경일자';

-- Q1. 고객에게 설치 완료한 상품 수는 총 몇 건인가?
SELECT COUNT(*)
FROM TB_ORD -- 주문테이블
WHERE ORD_STAT_CD = 'D';

-- Q2. 설치 완료 건 중 가장 최근에 등록된 건과 가장 최초로 등록된 건의 일자는 각각 어떻게 되는가?
SELECT MAX(REG_DT) AS 최근등록건, MIN(REG_DT) AS 최초등록건
FROM TB_ORD
WHERE ORD_STAT_CD = 'D';

-- Q3. 모든 주문 건 중 설치 완료되지 않고 설치 취소 되거나 주문 접수된 건은 얼마나 되는가?
SELECT COUNT(*) AS 설취취소건수
FROM TB_ORD
WHERE ORD_STAT_CD ='E';

SELECT COUNT(*) AS 주문접수건수
FROM TB_ORD
WHERE ORD_STAT_CD = 'B'; 

-- Function사용해 설치 취소, 주문접수건 조회
CREATE OR REPLACE FUNCTION FN_CODE_NM(V_CD VARCHAR2, V_CD2 VARCHAR2) 
RETURN VARCHAR2 -- 리턴타입
IS V_NM VARCHAR2(100); -- 변수선언
BEGIN
		SELECT CD_NM1 INTO V_NM -- 주문번호코드조회 / 변수저장
		FROM TB_CD_MST -- 공통 코드 테이블
		WHERE CD_VAL = V_CD -- 주문번호코드 컬럼명 = 매개변수 대입 
		AND CD_VAL1 = V_CD2; -- 주문상태종류 컬럼 = 매개변수 대입 (해당 두조건에 만족하는 Row출력)
		RETURN V_NM; -- (리턴타입) -- 001이면서 설치상태에 대한 주문번호 코드가 조회  (해당 Row에 대한 V_NM값이 varchar2로 리턴)
END;

SELECT FUNCTION  FN_CODE_NM;

DROP FUNCTION FN_CODE_NM;

SELECT FN_CODE_NM('001', ORD_STAT_CD) AS 설치상태  -- FUNCTION에서 입력시 주문테이블 기준으로 값 입력하면 함수 매개변수로 받아 로직처리 후 Return된 결과로 설치취소, 주문접수가 SELECT됨
	,	COUNT(*) AS 건수  -- 주문테이블에서 SELECT됨
FROM TB_ORD
WHERE ORD_STAT_CD IN('B','E')
GROUP BY FN_CODE_NM('001',ORD_STAT_CD); -- Function에서 Return된 결과로 설치 취소, 주문접수 별로 Row생성

-- SQL문 실행순서와 FUNCTION 실행순서를 생각해서 어떻게 Q3의 조회결과가 나오는지 생각해보기
SELECT * FROM TB_CD_MST;
SELECT * FROM TB_ORD;
SELECT * FROM TB_ITEM;
SELECT * FROM TB_CUST; --CUST_CD : 고객번호

-- Q4. 제품중에 고객에게 설치 완료된 건 중 가장 인기있는 상품부터 순서대로 출력하기
SELECT ITEM.ITEM_NM , COUNT(ORD.ITEM_CD) AS 설치완료건
FROM TB_ORD ORD
LEFT JOIN TB_ITEM ITEM  
ON (ITEM.ITEM_CD = ORD.ITEM_CD )
WHERE ORD.ORD_STAT_CD = 'D'
GROUP BY ORD.ITEM_CD, ITEM.ITEM_NM 
ORDER BY COUNT(ORD.ITEM_CD) DESC;

-- 넥사크로 쿼리
SELECT CD_VAL1,CD_NM1
FROM TB_CD_MST
WHERE CD_VAL = '001';

-- 넥사크로 쿼리 
SELECT ORD.ORD_NO                    AS ORD_NO  
	,  FN_CODE_NM('001',ORD.ORD_STAT_CD) AS ORD_STAT_NM 
	,  ORD.CUST_CD 					 AS CUST_NO 
	,  CUST.CUST_NM 				 AS CUST_NM 
	,  CUST.CUST_GBCD 				 AS CUST_GBCD_NM
	,  CUST.PHONE 					 AS PHONE  
	,  CUST.ADDR 					 AS	ADDR  
	,  ITEM.ITEM_NM 				 AS ITEM_NM	
	,  ORD.REG_DT 					 AS REG_DT 
FROM TB_ORD ORD  
LEFT JOIN TB_CUST CUST  
ON ORD.CUST_CD = CUST.CUST_CD
LEFT JOIN TB_ITEM ITEM
ON ORD.ITEM_CD = ITEM.ITEM_CD; 

/* SELECT ORD.ORD_NO                    AS ORD_NO  -- 주문번호
	,  FN_CODE_NM('001',ORD.ORD_STAT_CD) AS ORD_STAT_NM  -- 주문상태(프로시저 반환으로 CD_NM1컬럼(주문대기,접수,취소,설치완료등)이 들어감)
	,  ORD.CUST_CD 					 AS CUST_NO  -- 고객번호
	,  CUST.CUST_NM 				 AS CUST_NM  --고객명
	,  CUST.CUST_GBCD 				 AS CUST_GBCD_NM  -- 고객 구분
	,  CUST.PHONE 					 AS PHONE -- 전화번호 
	,  CUST.ADDR 					 AS	ADDR  -- 주소
	,  ITEM.ITEM_NM 				 AS ITEM_NM	-- 상품명
	,  ORD.REG_DT 					 AS REG_DT 	-- 주문일시
FROM TB_ORD ORD  -- 주문정보 테이블 (주문을 대상으로 )
LEFT JOIN TB_CUST CUST  -- 고객정보 테이블
ON ORD.CUST_CD = CUST.CUST_CD  --고객 번호 컬럼으로 연결
LEFT JOIN TB_ITEM ITEM  -- 상품정보 테이블
ON ORD.ITEM_CD = ITEM.ITEM_CD;  -- 상품 코드 컬럼으로 조인*/