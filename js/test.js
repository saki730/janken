function R_Click(p_janken_r) {
    let janken = ['グー','チョキ','パー',];//"janken"のリストを作成します。
    let janken_r = Math.floor( Math.random() * 3);//Math.random() で乱数を作ります
    document.getElementById("jankenpon2").src="jan" + p_janken_r + ".png";
    
    // この下は消さない
});
