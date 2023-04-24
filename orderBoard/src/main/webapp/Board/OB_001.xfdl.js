(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001");
            this.set_titletext("주문게시판");
            this.set_visible("true");
            this.set_font("12px/normal \"Gulim\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ordStatCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","119","0","1161","140",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_border("1px solid black");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","119","140",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 조건");
            obj.set_font("bold 16pt \"Gadugi\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid black");
            obj.set_background("#f8f3c3");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ordNo","234","39","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","145","39","84","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주문번호");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","40","155","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주문등록");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_cmpYn","540","39","23","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","438","38","84","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("법인고객여부");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ordStat","540","76","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_enable("true");
            obj.set_innerdataset("ds_ordStatCombo");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","438","77","84","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("주문상태");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_custGb","807","39","168","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_custGb_innerdataset = new nexacro.NormalDataset("rdo_custGb_innerdataset", obj);
            rdo_custGb_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">법인</Col></Row><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">임직원</Col></Row></Rows>");
            obj.set_innerdataset(rdo_custGb_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","705","39","84","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("고객 구분");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","40","199","724","294",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"101\"/><Column size=\"101\"/><Column size=\"101\"/><Column size=\"101\"/><Column size=\"101\"/><Column size=\"101\"/><Column size=\"101\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"주문상태\"/><Cell col=\"2\" text=\"고객번호\"/><Cell col=\"3\" text=\"고객명\"/><Cell col=\"4\" text=\"고객구분\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"상품명\"/><Cell col=\"8\" text=\"주문일시\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","145","76","84","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("고객명");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custNm","233","76","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updOrd","126","155","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주문수정");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delOrd","212","155","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("주문삭제");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selectOrd","1030","23","120","96",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조회");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_background("#05599d");
            obj.set_font("bold 10px/normal \"Gulim\"");
            obj.set_color("#fcfcfc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001.xfdl", function() {

        this.OB_001_onload = function(obj,e)
        {
        	 alert("onload 함수 실행");
        	this.ds_searchCombo.clearData(); // 데이터셋 초기화
        	this.ds_searchCombo.addRow(); // 데이터셋에 값을 세팅하기위해 1줄의 Row를 추가
        	this.ds_searchCombo.setColumn(0,"CD_VAL","001"); // 추가된 0번째 Row의 CD_VAL컬럼에 001이라는 값을 세팅

        	// 서버로 데이터를 전송하기전 필요한 값들을 셋팅
        	var strSvcId = "selectCommonCode"; // 넥사크로에서 transaction을 구분하기 위한 id값이 fnCallback 함수에서 쓰임.
        	var strSvcUrl = "selectCommonCode.do"; // Java Controller에서 이 주소를 식별하여 요청을 처리한다.
        	var inData = "ds_search=ds_searchCombo"; // 서버(서버와 이름 같아야 함)=프론트 데이터셋

        	var outData = "ds_ordStatCombo=ds_commonCode"; // 프론트 데이터셋=서버 (서버에서 넘어온 값 대입)

        	var strArg  = ""; // 데이터셋이 아닌 값을 보낼때 쓰는 필드
        	var callBackFnc = "fnCallback"; // 서버로부터 값을 받은 후 프론트에서 이행할 코드를 fnCallback 함수에서 작성

        	// 넥사크로 N에서 제공하는 서버로 요청하는 공통함수를 쓴다.
        	this.gfnTransaction( strSvcId ,
        						strSvcUrl ,
        						inData ,
        						outData ,
        						strArg ,
        						callBackFnc ); // 세팅한 값을 담아 서버로 데이터 전송

        	alert(strSvcUrl, inData, outData, strArg, callBackFnc);

        	 alert("서버로 요청");
        	  alert(this.gfnTransaction);

        };

        // CallBack Function(서버수신)
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
         alert(this.fnCallback);

        	switch(svcID)
        	{
        		case "selectCommonCode":
        			this.ds_ordStatCombo.insertRow(0); // 0번째 ROW에 라인 삽입 추가
        			this.ds_ordStatCombo.setColumn(0,"CD_VAL1",""); // 해당 ROW에 값 추가
        			this.ds_ordStatCombo.setColumn(0,"CD_NM1","전체");
        			alert(this.ds_ordStatCombo.CD_VAL1);
        			alert(this.ds_ordStatCombo.CD_NM1);
        			break;
        	}
        }

        this.btn_selectOrd_onclick = function(obj,e)
        {
        	alert("주문리스트 조회");
        };

        this.btn_regOrd_onclick = function(obj,e)
        {
        	alert("주문 등록 팝업 오픈");
        };


        this.btn_updOrd_onclick = function(obj,e)
        {
        	alert("주문 수정 팝업 오픈");
        };


        this.btn_delOrd_onclick = function(obj,e)
        {
        	alert("주문 삭제 진행");
        };

        this.grd_ordList_oncelldblclick = function(obj,e)
        {
        	// 그리드 더블 클릭시 진행할 스크립트 작성
        };

        this.chk_cmpYn_onchanged = function(obj,e)
        {
        	alert("onchanged 함수 실행 완료");
        };


        this.cbo_ordStat_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_onload,this);
            this.sta02.addEventHandler("onclick",this.sta02_onclick,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.edt_ordNo.addEventHandler("onchanged",this.edt_ordNo_onchanged,this);
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
            this.btn_regOrd.addEventHandler("onclick",this.btn_regOrd_onclick,this);
            this.chk_cmpYn.addEventHandler("onchanged",this.chk_cmpYn_onchanged,this);
            this.sta01_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.cbo_ordStat.addEventHandler("onitemchanged",this.cbo_ordStat_onitemchanged,this);
            this.sta01_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00_00_00.addEventHandler("onclick",this.sta01_onclick,this);
            this.grd00.addEventHandler("oncelldblclick",this.grd_ordList_oncelldblclick,this);
            this.sta01_01.addEventHandler("onclick",this.sta01_onclick,this);
            this.edt_custNm.addEventHandler("onchanged",this.edt00_onchanged,this);
            this.btn_updOrd.addEventHandler("onclick",this.btn_updOrd_onclick,this);
            this.btn_delOrd.addEventHandler("onclick",this.btn_delOrd_onclick,this);
            this.btn_selectOrd.addEventHandler("onclick",this.btn_selectOrd_onclick,this);
        };
        this.loadIncludeScript("OB_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
