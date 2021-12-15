const ModalRotate: React.FC<{}> = () => {
  return (
    <div id="modal-rotate" className="modal">
      <div id="modal-rotate-content">
        <div id="modal-header">
          <h3 id="savetexttitle">回転・移動</h3>
        </div>
        <div className="nb_button">
          <h4 id="div_all">
            <label id="rt1_lb">　回転：</label>
          </h4>
          <input type="button" id="rt_left" value="&larr;" />
          <input type="button" id="rt_right" value="&rarr;" />
        </div>
        <div className="nb_button">
          <h4 id="div_all">
            <label id="rt2_lb">　反転：</label>
          </h4>
          <input type="button" id="rt_LR" value="&harr;" />
          <input type="button" id="rt_UD" value="&#8597;" />
        </div>
        <br />
        <div className="nb_button">
          <h4 id="div_all">
            <label id="rt3_lb">　移動：</label>
          </h4>
          <br />
          <input type="button" id="rt_center" value="盤面を中央に移動" />
          <br />
          <input
            type="button"
            id="rt_size"
            value="画面サイズを盤面に合わせる"
          />
          <br />
          <input type="button" id="rt_reset" value="移動をリセット" />
        </div>
        <br />
        <div className="nb_button">
          <input type="button" id="closeBtn_rotate1" value="閉じる" />
        </div>
      </div>
    </div>
  );
};

export default ModalRotate;

