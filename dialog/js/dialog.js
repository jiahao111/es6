class Dialog {
    constructor(title = "标题党", content = "开课第一天") {
        this.title = title;
        this.content = content;
        this.init();
    }
    addEvent() {
        let span = document.querySelector('.span');
        let btn = document.querySelector('.btn');
        span.addEventListener('click', (event) => {
            this.hide();
        })
        btn.addEventListener('click', (event) => {
            this.hide();
        })
    }
    init() {
        this.createDiv();
    }
    hide() {
        let div = document.querySelector('.div');
        div.style.display = 'none';
    }
    createButton(txt) {
        let btn = document.createElement("button");
        btn.className = 'btn';
        btn.innerHTML = txt;
        return btn;
    }
    createTitle() {
        let title = document.createElement("div");
        let span = document.createElement("span");
        span.className = 'span';
        span.innerHTML = '×';
        title.className = 'title';
        title.innerHTML = this.title;
        title.append(span)
        return title;
    }
    createContent() {
        let content = document.createElement("div");
        let btn = this.createButton('确定');
        content.className = 'content';
        content.innerHTML = this.content;
        content.append(btn);
        return content;
    }
    createBox() {
        let box = document.createElement("div");
        let title = this.createTitle();
        let content = this.createContent();
        box.append(title);
        box.append(content);
        box.className = 'box';
        return box;
    }
    createDiv() {
        let div = document.createElement("div");
        let box = this.createBox();
        div.append(box);
        div.className = 'div';
        document.body.append(div);
        this.addEvent();
    }
}

new Dialog();