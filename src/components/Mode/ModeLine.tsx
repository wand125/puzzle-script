const ModeLine: React.FC<{}> = () => {
  return (
    <span id="mode_line" style={{ display: "none" }}>
      <input
        type="radio"
        name="mode_line"
        value="1"
        id="sub_line1"
        checked={true}
      />
      <label htmlFor="sub_line1" className="label" id="sub_line1_lb">
        通常
      </label>
      <input type="radio" name="mode_line" value="2" id="sub_line2" />
      <label htmlFor="sub_line2" className="label" id="sub_line2_lb">
        対角線
      </label>
      <input type="radio" name="mode_line" value="3" id="sub_line3" />
      <label htmlFor="sub_line3" className="label" id="sub_line3_lb">
        自由線
      </label>
      <input type="radio" name="mode_line" value="5" id="sub_line5" />
      <label htmlFor="sub_line5" className="label" id="sub_line5_lb">
        中線
      </label>
      <input type="radio" name="mode_line" value="4" id="sub_line4" />
      <label htmlFor="sub_line4" className="label" id="sub_line4_lb">
        補助×
      </label>
    </span>
  );
};
export default ModeLine;