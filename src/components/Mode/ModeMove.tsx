const ModeMove: React.FC<{}> = () => {
  return (
    <span id="mode_move" style={{ display: "none" }}>
      <input
        type="radio"
        name="mode_move"
        value="1"
        id="sub_move1"
        checked={true}
      />
      <label htmlFor="sub_move1" className="label" id="sub_move1_lb">
        全
      </label>
      <input type="radio" name="mode_move" value="2" id="sub_move2" />
      <label htmlFor="sub_move2" className="label" id="sub_move2_lb">
        数字
      </label>
      <input type="radio" name="mode_move" value="3" id="sub_move3" />
      <label htmlFor="sub_move3" className="label" id="sub_move3_lb">
        記号
      </label>
    </span>
  );
};
export default ModeMove;