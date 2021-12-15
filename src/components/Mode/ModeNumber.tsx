const ModeNumber: React.FC<{}> = () => {
  return (
    <span id="mode_number" style={{ display: "none" }}>
      <label className="label_mode" id="sub_txt_n">
        　サブ：
      </label>
      <input
        type="radio"
        name="mode_number"
        value="1"
        id="sub_number1"
        checked={true}
      />
      <label htmlFor="sub_number1" className="label" id="sub_number1_lb">
        通常
      </label>
      <input type="radio" name="mode_number" value="2" id="sub_number2" />
      <label htmlFor="sub_number2" className="label" id="sub_number2_lb">
        矢印
      </label>
      <input type="radio" name="mode_number" value="4" id="sub_number4" />
      <label htmlFor="sub_number4" className="label" id="sub_number4_lb">
        Tapa
      </label>
      <input type="radio" name="mode_number" value="3" id="sub_number3" />
      <label htmlFor="sub_number3" className="label" id="sub_number3_lb">
        1/4
      </label>
      <input type="radio" name="mode_number" value="9" id="sub_number9" />
      <label htmlFor="sub_number9" className="label" id="sub_number9_lb">
        ｺﾝﾊﾟｽ
      </label>
      <br />
      <label className="label_mode" id="sub_txt_s">
        　　　　
      </label>
      <input type="radio" name="mode_number" value="10" id="sub_number10" />
      <label htmlFor="sub_number10" className="label" id="sub_number10_lb">
        大
      </label>
      <input type="radio" name="mode_number" value="6" id="sub_number6" />
      <label htmlFor="sub_number6" className="label" id="sub_number6_lb">
        中
      </label>
      <input type="radio" name="mode_number" value="5" id="sub_number5" />
      <label htmlFor="sub_number5" className="label" id="sub_number5_lb">
        小
      </label>
      <input type="radio" name="mode_number" value="8" id="sub_number8" />
      <label htmlFor="sub_number8" className="label" id="sub_number8_lb">
        長文
      </label>
      <input type="radio" name="mode_number" value="7" id="sub_number7" />
      <label htmlFor="sub_number7" className="label" id="sub_number7_lb">
        候補
      </label>
    </span>
  );
};

export default ModeNumber;
