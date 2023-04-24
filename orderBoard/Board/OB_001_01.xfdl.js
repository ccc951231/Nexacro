(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_01");
            this.set_titletext("주문등록팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCustGb", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custGbCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01_01","64","42","84","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객명");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custNm","182","41","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","64","81","84","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("휴대폰번호");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone","182","80","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_01","35","119","134","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("생년월일/사업자번호");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_birBizNo","182","118","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00_00","63","158","84","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주소");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr","182","157","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","63","199","84","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("고객구분");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_custGbNm","182","198","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_custGbCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_enable("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","64","238","84","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("주문상품");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","182","237","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_itemCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_enable("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","42","290","150","65",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("주문등록");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","207","290","150","65",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("닫기");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_01.xfdl", function() {

        this.OB_001_01_onload = function(obj,e)
        {
        	 alert("onload 함수 실행");
        	 // 주문 등록을 위한 주문상태, 주문 상품 콤보박스 초기화
        	 // 1. 고객구분 콤보박스에 출력할 데이터들을 TB_CD_MST 체이블로부터 값을 조회해온다.
        	 // 먼저 만들었던 OB_001.xfdl onload 서버 로직을 그대로 사용하면 된다.
        	 // 프론트 코딩을 통해 TB_CD_MST 테이블 select시 where절에 필요한 값을 서버로 넘긴다.

        	 this.fn_setCustGbCbo(); // 사용자 정의 함수 호출

        	 // 2. 주문 상품 리스트를 TB_ITEM테이블로부터 조회하여 콤보박스 안의 데이터를 채워준다.
        	 this.fn_setItemCbo();  // 사용자 정의 함수 호출
        };

        // 고객 구분 콤보박스 값 호출
        this.fn_setCustGbCbo = function(obj,e)
        {
        	 trace("고객구분 콤보 박스 세팅");
        	// ds_searchCustGb 데이터셋을 생성하고 서버로 전달할 인자값을 추가
        	this.ds_searchCustGb.clearData();
        	this.ds_searchCustGb.addRow();
        	this.ds_searchCustGb.setColumn(0,"CD_VAL","002"); //고객구분은 코드가 002이다.

        	// 서버로 데이터를 요청하는 부분
        	// 아래 부분은 OB_001.xfdl의 onload부분을 그대로 복사해서 가져온다.

        	var strSvcId = "selectCommonCode"; // 넥사크로에서 transaction을 구분하기 위한 id값이 fnCallback 함수에서 쓰임.
        	var strSvcUrl = "selectCommonCode.do"; // Java Controller에서 이 주소를 식별하여 요청을 처리한다.
        	var inData = "ds_search=ds_searchCustGb"; // 서버(서버와 이름 같아야 함)=프론트 데이터셋

        	var outData = "ds_custGbCombo=ds_commonCode"; // 프론트 데이터셋=서버 (서버에서 넘어온 값 대입)

        	var strArg  = ""; // 데이터셋이 아닌 값을 보낼때 쓰는 필드
        	var callBackFnc = "fnCallback"; // 서버로부터 값을 받은 후 프론트에서 이행할 코드를 fnCallback 함수에서 작성

        	// 넥사크로 N에서 제공하는 서버로 요청하는 공통함수를 쓴다.
        	this.gfnTransaction( strSvcId ,
        						strSvcUrl ,
        						inData ,
        						outData ,
        						strArg ,
        						callBackFnc ); // 세팅한 값을 담아 서버로 데이터 전송

        };

        // 주문 상품 콤보박스 값 호출
        this.fn_setItemCbo() = function(obj,e)
        {
        	alert("나와");
        	// trace("주문상품 콤포박스 세팅");
        	// 주문 상품의 경우 프론트에서 별도로 전송해줘야할 값이 없다.
        	// 서버에서 보내준 값만 받아서 주문상품 콤보박스에 바인딩만 하면된다.

        	var strSvcId = "selectItemList";
        	var strSvcUrl = "selectItemList.do";
        	var inData = ""; // 따로 전송할 데이터가 없음
        	var outData = "ds_itemCombo=ds_itemCombo";
        	var strArg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcUrl ,
        						inData ,
        						outData ,
        						strArg ,
        						callBackFnc ) // 세팅한 값들을 담아 서버로 데이터 전송

        };
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID)
        	{
        		case "selectCommonCode":
        			trace("고객구분 콤보박스 세팅 완료");
        			break;
        		case "selectItemList":
        			trace("주문상품 콤보박스 세팅완료");
        			break;
        	}
        };


        this.btn_regOrd_onclick = function(obj,e)
        {
        	 alert("주문 등록 버튼 클릭");

        	 var oArg = {}; // 팝업을 열 때 부모창에서 가져갈 데이터가 있다면 데이터 세팅
        					// 주문등록시에는 가져갈 데이터가 없으므로 공란으로 지정
        					// ex) paramTitle:"가나다라", paramCode:"abcd", paramNum:12345
             var oOption = {}; 	// top, left를 지정하지 않으면 가운데 정렬 // "top=20, left=370"
        	 var sPopupCallBack = "fnPopupCallback"; // 팝업창을 닫았을 때 후처리 로직 작성하기 위한 callBack함수 지정
        	 this.gfnOpenPopup("popup","Board::OB_001_01.xfdl",oArg,sPopupCallBack,oOption); // 팝업으로 띄울 화면 지정 후 팝업open
        };

        this.btn_exit_onclick = function(obj,e)
        {
        	 alert("닫기 버튼 클릭");
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_01_onload,this);
            this.sta01_01.addEventHandler("onclick",this.sta01_onclick,this);
            this.edt_custNm.addEventHandler("onchanged",this.edt00_onchanged,this);
            this.sta01_01_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.edt_phone.addEventHandler("onchanged",this.edt00_onchanged,this);
            this.sta01_01_01.addEventHandler("onclick",this.sta01_onclick,this);
            this.edt_birBizNo.addEventHandler("onchanged",this.edt00_onchanged,this);
            this.sta01_01_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.edt_addr.addEventHandler("onchanged",this.edt00_onchanged,this);
            this.sta01_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.cbo_custGbNm.addEventHandler("onitemchanged",this.CustGbNm,this);
            this.sta01_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.cbo_itemNm.addEventHandler("onitemchanged",this.itemCbo,this);
            this.btn_regOrd.addEventHandler("onclick",this.btn_regOrd_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
        };
        this.loadIncludeScript("OB_001_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
