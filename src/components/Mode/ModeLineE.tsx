const ModeLineE: React.FC<{}> = () => {
  return (
    <span id="mode_lineE" style={{ display: "none" }}>
      <input
        type="radio"
        name="mode_lineE"
        value="1"
        id="sub_lineE1"
        checked={true}
      />
      <label htmlFor="sub_lineE1" className="label" id="sub_lineE1_lb">
        通常
      </label>
      <input type="radio" name="mode_lineE" value="2" id="sub_lineE2" />
      <label htmlFor="sub_lineE2" className="label" id="sub_lineE2_lb">
        対角線
      </label>
      <input type="radio" name="mode_lineE" value="3" id="sub_lineE3" />
      <label htmlFor="sub_lineE3" className="label" id="sub_lineE3_lb">
        自由線
      </label>
      <input type="radio" name="mode_lineE" value="4" id="sub_lineE4" />
      <label htmlFor="sub_lineE4" className="label" id="sub_lineE4_lb">
        補助×
      </label>
      <input type="radio" name="mode_lineE" value="5" id="sub_lineE5" />
      <label htmlFor="sub_lineE5" className="label" id="sub_lineE5_lb">
        枠消
      </label>
    </span>
  );
};
export default ModeLineE;