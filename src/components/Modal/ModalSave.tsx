const ModalSave: React.FC<{}> = () => {
  const savetext_window = (): void => {};
  return (
    <div id="modal-save" className="modal">
      <div id="modal-save-content">
        <div id="modal-header">
          <h3 id="savetexttitle">アドレス出力</h3>
        </div>
        <div className="nb_button">
          <input type="button" id="address_edit" value="編集アドレス" />
          <input type="button" id="address_solve" value="出題用アドレス" />
          <input type="button" id="expansion" value="拡張出力" />
          <input type="button" id="pp_file" value="pp_file" />
        </div>
        <div id="modal-save-body">
          <textarea readOnly rows={10} cols={50} id="savetextarea"></textarea>
          <span id="filename_lb">ファイル名：</span>
          <input type="text" value="Save.txt" id="savetextname" />
        </div>
        <div className="nb_button">
          <input type="button" id="closeBtn_save1" value="コピー" />
          <input type="button" id="closeBtn_save2" value="ダウンロード" />
          <input
            type="button"
            id="closeBtn_save3"
            value="開く"
            onClick={() => savetext_window()}
          />
          <input type="button" id="closeBtn_save4" value="キャンセル" />
        </div>
      </div>
    </div>
  );
};

export default ModalSave;

