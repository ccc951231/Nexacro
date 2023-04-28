package com.nexacro.orderBoard.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.nexacro.orderBoard.object.Board;

/**
 * <pre>
 * 
 * @title
 * @desc 아래의 예제는 샘플용으로 작성된 코드로 참고용으로만 사용하시기 바랍니다. -
 * @package com.nexacro.orderBoard.mapper
 * 
 *          <pre>
 * 
 * @author TOBESOFT
 * @since 2017. 11. 20.
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2017. 11. 20. TOBESOFT
 *      최초작성
 */
@Mapper
public interface UiadapterBoardMapper {
	
	public void insertOrd(Map<String, Object> ds_regOrd); // 신규 주문 Insert

	public void insertCust(Map<String, Object> ds_regOrd); // 신규 고객 Insert
	
	public String checkCustDup(Map<String, Object> checkCustDup); // 기존 고객 조회

	public void insertOrdList(Map<String, Object> ds_regOrd); // 신규주문 Insert
	
	public ArrayList<Map<String, Object>> selectItemList();

	public ArrayList<Map<String, Object>> selectOrdList(Map<String, Object> ds_searchList);

	public ArrayList<Map<String,Object>> selectCommonCode(Map<String,Object> ds_combo);
	
	public List<Board> retrieve_datalist(Board board);

	public List<Map<String, Object>> retrieve_datalist_map(Map<String, String> board);

	public void insert_board(Board board);

	public void update_board(Board board);

	public void delete_board(Board board);

	public void insert_board_map(Map<String, Object> board);

	public void update_board_map(Map<String, Object> board);

	public void delete_board_map(Map<String, Object> board);





}
