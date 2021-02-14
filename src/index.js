import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

document.getElementById("add-btn").addEventListener("click", () => {
  onClickAdd();
});

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liの生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了　buttonタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンのdivを未完了リストから削除
    deleteIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグをリストから削除する
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //押された戻すボタンのテキストを取得
      const text = deleteTarget.firstChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素として挿入
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除　buttonタグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンのdivを未完了リストから削除
    deleteIncompleteList(deleteButton.parentNode);
  });

  // divのしたにliをいれる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに挿入
  document.getElementById("incomplate-list").appendChild(div);
};

// 未完了リストから指定のリストを削除
const deleteIncompleteList = (target) => {
  const deleteTarget = target;
  document.getElementById("incomplate-list").removeChild(deleteTarget);
};
