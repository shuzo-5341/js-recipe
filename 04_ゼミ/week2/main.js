const MemoInput = document.getElementById("memo-input")
const AddButton = document.getElementById("add-button")

AddButton.onclick = function() {
  const x = MemoInput.value
  console.log(x)
}
