Config.appid = "test3";
Config.version = "1";
Config.title = "Excel File Test";

function main() {
  	Toolbar.addButton("Export", "exportExcel()", "download");
	List.addItem("Click export button");
    List.show();
}

function exportExcel() {
 	var csv = new CsvFile();
  	var style1 = {backcolor:"blue", color:"red", bold:true};
  	var style2 = {backcolor:"gray", color:"white"};
  	var style3 = {color:"green", bold:true};

  	var line1 = [ExcelFile.setStyle("Hello", style1), ExcelFile.setStyle("Hello 2", style2), ExcelFile.setStyle("Hello 3", style3) ];
  	csv.writeLine(line1);
  
  	var excel = new ExcelFile();
  	excel.addSheet("Sheet1", csv.getContent());
  	excel.download("test.xlsx");
  
}