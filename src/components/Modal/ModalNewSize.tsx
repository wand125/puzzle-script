const ModalSave: React.FC<{}> = () => {
  const savetext_window = (): void => {};
  return (
    <div id="modal-newsize" className="modal">
      <div id="modal-newsize-content">
        <div id="modal-header">
          <h3 id="modal-newsize_lb">　サイズ変更</h3>
        </div>
        <span id="modal-sizeA">
          <span>
            <label className="label_nb" id="modal-newsize_size_lb">
              表示サイズ：
            </label>
          </span>
          <input
            type="number"
            pattern="\d*"
            name="nb_size3_r"
            id="nb_size3_r"
            value="36"
            min="10"
            max="60"
            step="2"
          />
        </span>
        <br />
        <div className="nb_button">
          <input type="button" id="closeBtn_size1" value="枠変更" />
          <input type="button" id="closeBtn_size2" value="キャンセル" />
        </div>
      </div>
    </div>
  );
};

export default ModalSave;

