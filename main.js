/*
            실습: Todo 리스트 만들기
            1. 사용자가 할 일을 입력한다.
            2. 등록버튼을 누른다.
            - 사용자가 입력한 '할일' 데이터를 가져온다.
            - 화면에 보여주기 위한 요소노드, 텍스트노드 생성한다.
                -> 요소노드: li, button | 텍스트 노드: 사용자가 입력한 '할일', '삭제'
            - 요소노드와 텍스트노드를 연결한다.
            - id가 'todoList'인 ul요소에 연결한다.
            3. 웹 페이지에 등록한 할 일이 출력된다.
            4. 삭제버튼을 누르면 해당되는 요소만 삭제된다.
            - 버튼에 클릭이벤트를 구현한다.
            - 부모요소.removeChild(삭제할 자식노드)를 활용해서 삭제한다.
        */

const addTodoBtn = document.todoForm.addTodoBtn;
addTodoBtn.addEventListener("click", (event) => {
    event.preventDefault(); //원래있는 기능을 막는 기능

    const todoList = document.getElementById("todoList");
    const todo = document.todoForm.todo

    let new_li = document.createElement("li");
    let new_txt = document.createTextNode(todo.value);

    let new_button = document.createElement("button");
    let new_btn_txt = document.createTextNode("삭제");

    new_button.appendChild(new_btn_txt);

    new_li.appendChild(new_txt);
    new_li.appendChild(new_button);

    todoList.appendChild(new_li);

    //삭제버튼을 모두 찾은 후 삭제기능 구현
    // - 삭제할 요소의 부모노드가 누구인지 알고 있어야 한다!
    removeElement(todoList);
});

const removeElement = (todo_List) => {
    //1.삭제버튼요소를 모두 찾기
    const removeBtns = document.getElementsByTagName('button');
    console.log(removeBtns);

    //2.삭제버튼에 이벤트 적용하기
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', (event) => {

            //부모노드.removeChild(): 자식노드를 삭제하는 메소드
            todo_List.removeChild(event.target.parentNode);
            console.log(event.target.parentNode);
        });
    }
}