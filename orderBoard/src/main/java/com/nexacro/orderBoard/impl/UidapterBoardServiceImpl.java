package com.nexacro.orderBoard.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.orderBoard.mapper.UiadapterBoardMapper;
import com.nexacro.orderBoard.object.Board;
import com.nexacro.orderBoard.service.UidapterBoardService;
import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.java.xapi.data.DataSet;

/**
 * <pre>
 * 
 * @title
 * @desc 아래의 예제는 샘플용으로 작성된 코드로 참고용으로만 사용하시기 바랍니다. - UidapterBoardServiceImpl
 *       Sample Class
 * @package com.nexacro.orderBoard.impl
 * 
 *          <pre>
 * 
 * @author TOBESOFT
 * @since 2018. 1. 25.
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2018. 1. 25. TOBESOFT
 *      최초작성
 */

@Service
public class UidapterBoardServiceImpl implements UidapterBoardService {


	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Override
	public void insertOrdList(Map<String, Object> ds_regOrd) {
		
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);
		// 기존 고객이 TB_CUST(고객 테이블)에 있는 경우
		// 신규 고객인 경우
		// 고객명, 휴대폰 번호, 사업자, 주소가 모두 일치하는 고객코드가 있을 때
		// Insert하지 않고, 없는 경우만 Insert하도록 비즈니스 로직 구성하기.
	
		String custCode = mapper.checkCustDup(ds_regOrd);
		ds_regOrd.put("CUST_CD", custCode);
		if("".equals(custCode) || custCode == null) {
			// 신규 고객 등록
			mapper.insertCust(ds_regOrd);
			custCode = mapper.checkCustDup(ds_regOrd); // 다시 고객번호 조회 후 데이터 셋에 넣기
			ds_regOrd.put("CUST_CD", custCode); // 데이터셋에 CUST_CD는 없으므로 map에 put하여 고객번호 정보를 담는다.
		}else {
			// 기존 고객이므로 insert필요없음
		}
		// 주문 등록
		mapper.insertOrd(ds_regOrd);
	}

	@Override
	public ArrayList<Map<String, Object>> selectItemList() {
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);
		return mapper.selectItemList();
	}
	
	@Override
	public ArrayList<Map<String, Object>> selectOrdList(Map<String, Object> ds_searchList) {
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);
	
		return mapper.selectOrdList(ds_searchList);
	}

	@Override
	public ArrayList<Map<String,Object>> selectCommonCode(Map<String,Object> ds_search){
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);
		return mapper.selectCommonCode(ds_search);
	}

	@Override
	public List<Board> retrieve_datalist(Board board) {
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);
		return mapper.retrieve_datalist(board);
	}

	@Override
	public List<Map<String, Object>> retrieve_datalist_map(Map<String, String> board) {
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);
		return mapper.retrieve_datalist_map(board);
	}

	@Override
	public void update_datalist(List<Board> boardList) {
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);

		int size = boardList.size();
		for (int i = 0; i < size; i++) {
			Board board = boardList.get(i);
			if (board instanceof DataSetRowTypeAccessor) {
				DataSetRowTypeAccessor accessor = board;

				if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED) {
					mapper.insert_board(board);
				} else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
					mapper.update_board(board);
				} else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED) {
					mapper.delete_board(board);
				}
			}
		}
	}

	@Override
	public void update_datalist_map(List<Map<String, Object>> boardList) {
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);

		int size = boardList.size();
		for (int i = 0; i < size; i++) {
			Map<String, Object> board = boardList.get(i);

			int rowType = Integer.parseInt(String.valueOf(board.get(DataSetRowTypeAccessor.NAME)));
			if (rowType == DataSet.ROW_TYPE_INSERTED) {
				mapper.insert_board_map(board);
			} else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				mapper.update_board_map(board);
			} else if (rowType == DataSet.ROW_TYPE_DELETED) {
				mapper.delete_board_map(board);
			}
		}
	}





}
