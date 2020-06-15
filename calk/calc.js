$(document).ready(function(){
$('#cfact p').click(function(){$('#cfact p').removeClass('active');var color=$(this).attr('rel');$(this).addClass('active');$('#cshadow img').attr('src',color);});
$('input#size-x').keypress(function(event){
var key,keyChar;
if(!event)var event=window.event;
if(event.keyCode)key=event.keyCode;
else if(event.which)key=event.which;
if(key==null||key==0||key==8||key==13||key==9||key==46||key==37||key==39)return true;
keyChar=String.fromCharCode(key);
if(!/\d/.test(keyChar))return false;
});
$('input#size-y').keypress(function(event){
var key,keyChar;if(!event)var event=window.event;
if(event.keyCode)key=event.keyCode;
else if(event.which)key=event.which;
if(key==null||key==0||key==8||key==13||key==9||key==46||key==37||key==39)return true;
keyChar=String.fromCharCode(key);
if(!/\d/.test(keyChar))return false;
});
$("input#size-y").keyup(function(){
var value2=$("input#size-y").val();
var value1=$("input#size-x").val();
if(value2>maxvertical){
$("#slider-y").slider("value",value2);
$("input#size-y").val("3000");
sheight=3000;
prices();
}else if(value2<minvertical&&value2&&value2!=0&&value1!=0&&value1)
{
$("#slider-y").slider("value",value2);
sheight=0;
prices();
}else if(!value2||value2==0||!value1||value1==0){
$("#slider-y").slider("value",value2);
sheight=0;
nul();
}else{
sheight=value2;
$("#slider-y").slider("value",value2);
prices();
}});
$("input#size-x").keyup(function(){
var value2=$("input#size-x").val();
var value1=$("input#size-y").val();
if(value2>maxhotizontal){
$("#slider-x").slider("value",value2);
$("input#size-x").val("3000");
swidth=3000;prices();
}else if(value2<minhotizontal&&value2&&value2!=0&&value1&&value1!=0){
$("#slider-x").slider("value",value2);
swidth=0;
prices();
}else if(!value2||value2==0||!value1||value1==0){
$("#slider-x").slider("value",value2);
swidth=0;
nul();
}else{
swidth=value2;
$("#slider-x").slider("value",value2);
prices();
}});
$("#cfact p").click(function(){
$(this).parent().find("p").removeClass("active");
$(this).addClass("active");
var faktura=$(this).attr('rell');
$("#cgg img").attr('src',faktura);
});
prices();
});
function prices(){
var h=sheight/1000;
var w=swidth/1000;
var plosh=h*w;
if(plosh<1){plosh=1;}
var tpms=$(".canc_types select").val();
var npms=$(".canc_filling select").val();
price=(tpms*plosh)+(npms*plosh);
	if((h*w)<1&&tpms==1188&&npms==0){price=890;}
	if($(".canc_types select option:selected").attr("data-tipe")=="plisse"){price=(tpms*(h*w)+(2*w+2*h)*180+300+400)*1.8;}
nextimg();
runner();
}
function nextimg(){var tipsetki=$(".canc_types select option:selected").attr("data-tipe");var tipnap=$(".canc_filling select option:selected").attr("data-tipe");var tipcol=$(".canc_colors p.active").attr("data-tipe");if($(".canc_types select option:selected").text()=="Р РѕР»Р»РµС‚РЅР°СЏ"){tipnap="";}if($(".canc_types select option:selected").text()=="Р РѕР»Р»РµС‚РЅР°СЏ"){tipnap="";}$(".rightcol img").attr("src","/calk/img/"+tipsetki+tipnap+tipcol+".png");}
function nul(){price=0;runner();}
var swidth=1000;
var sheight=800;
var price=0;
var symm=0;
var minhotizontal=0;
var maxhotizontal=3000;
var minvertical=0;
var maxvertical=3000;
var eu;
$("#slider-y").slider({
orientation:'vertical',
min:0,
max:3000,
step:1,
range:"min",
animate:true,
slide:function(event,ui){console.log(ui.value);
$("#size-ys").html(ui.value);
sheight=$(this).slider("option","value");
if((sheight)>minvertical&&((sheight)<maxvertical))
{$("#size-y").val(ui.value);}},
change:function(event,ui){$("#size-ys").html(ui.value);sheight=$(this).slider("option","value");
if((sheight)>minvertical&&((sheight)<maxvertical))
{$("#size-y").val(ui.value);}},
stop:function(){
sheight=$(this).slider("option","value");
prices();
}}).slider("option","value",sheight);
$("#slider-x").slider({
step:1,
min:0,
max:3000,
range:"min",
animate:true,
slide:function(event,ui){$("#size-xs").html(ui.value);
swidth=$(this).slider("option","value");
if(swidth>minhotizontal&&swidth<maxhotizontal)
{$("#size-x").val(ui.value);}},
change:function(event,ui){$("#size-xs").html(ui.value);
swidth=$(this).slider("option","value");
if(swidth>minhotizontal&&swidth<maxhotizontal){
$("#size-x").val(ui.value);}},
stop:function(){swidth=$(this).slider("option","value");prices();
}}).slider("option","value",swidth);
function runner(){
if(price!=symm){
var timer,intv=25,msecs=1000,ticks=msecs/intv,totalTicks=ticks;var currents=symm;
var deltas=(price-currents)/ticks;
timer=setInterval(function(){
if(ticks<=0){clearInterval(timer);}
var tickKoef=0;tickKoef=totalTicks-ticks;
$(".price-r").html(Math.round(currents+tickKoef*deltas));
ticks--},intv);symm=price;}
$("#ajax-zacaz-form input[name='width']").val($("#size-x").val());
$("#ajax-zacaz-form input[name='height']").val($("#size-y").val());
$("#ajax-zacaz-form input[name='price']").val(Math.round(price));
if($('input[name="avtomatika"]').prop('checked'))
{$("#ajax-zacaz-form input[name='avtom']").val("Р РЋ Р В°Р Р†РЎвЂљР С•Р СР В°РЎвЂљР С‘Р С”Р С•Р в„–")}
else{
$("#ajax-zacaz-form input[name='avtom']").val("Р вЂР ВµР В· Р В°Р Р†РЎвЂљР С•Р СР В°РЎвЂљР С‘Р С”Р С‘")}}
$(document).ready(function(){
$(".avgr").click(function(){
$(".avgr label").toggleClass("vibrana-av");
var value2=$("input#size-x").val();
var value1=$("input#size-y").val();
if(!value2||value2==0||!value1||value1==0){nul();}else{prices();}
});
	$(".canc_types select").change(function(){var value2=$("input#size-x").val();var value1=$("input#size-y").val();
	if($(".canc_types option:selected").attr("data-tipe")=="rollet"){$('.canc_filling select option').remove();
	$('.canc_filling select').prepend($('<option data-tipe="" value="0" selected="">Антимоскитная</option><option data-tipe="antipil" value="1300">Антипыль</option>'));}else{$('.canc_filling select option').remove();
	$('.canc_filling select').prepend($('<option data-tipe="" value="0" selected>Антимоскитная</option><option data-tipe="cat" value="1500">Антикошка</option><option data-tipe="antipil" value="1300">Антипыль</option><option class="mosh" data-tipe="antipil" value="1300">Антимошка</option><option data-tipe="antipilca" value="1802">Антипыльца</option><option data-tipe="ultra" value="1200">Ультравью</option><option data-tipe="" value="3811">Антибактериальная</option><option data-tipe="" value="1400">Антиптица(металл)</option><option data-tipe="" value="1752">Солнцезащитная</option>'));}prices();});
$(".canc_filling select").change(function(){var value2=$("input#size-x").val();var value1=$("input#size-y").val();prices();});
$(".mont").click(function(){
$(".montaz label").toggleClass("vibrana-mon");
var value2=$("input#size-x").val();
var value1=$("input#size-y").val();
if(!value2||value2==0||!value1||value1==0){nul();}else{prices();}
});
$("#color li").click(function(){var nomer=$(this).attr("rell");$("#mainImg img[style*='display:block;']").fadeOut();$("#mainImg img").eq(nomer).fadeIn();});
	$(".canc_colors p").click(function(){$(".canc_colors p").removeClass("active");$(this).addClass("active");nextimg();});
});