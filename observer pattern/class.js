/*  1. teacher is observable and students are observer 
    2. every five seconds, teacher asks a question -> notify 
    3. every student gets update ?(according to the observer pattern)
    4. random generate an index number to call the student answer the question 
    5. give the feedback according to the student type 
    6. print out the whole process on the console 
*/



/* questions:
    is it a good practice to use 'this' from the start to the end during coding?
    what if I want to restart the game at the middle of the game, how to clear all the setTimeOut at once? 
*/


"use strict";

class Lecture {
    students;
    classSize = 0;


    constructor(m) {
        this.classSize = m;
        this.students = [];
        document.getElementById("mode").innerHTML = "上课啦";
    }


    addObserver() {
        const goodNum = Math.floor(this.classSize / 4);
        const middleNum = Math.floor(this.classSize / 2);

        /* inserts students seat in the four rows and 
        color their seat based on top, middle, bottom students  */
        for (let i = 0; i < this.classSize; i++) {
            const reminder = i % 4;
            let parent;
            if (reminder === 0) {
                parent = document.getElementsByClassName("row1")[0];
            } else if (reminder === 1) {
                parent = document.getElementsByClassName("row2")[0];
            } else if (reminder === 2) {
                parent = document.getElementsByClassName("row3")[0];
            } else {
                parent = document.getElementsByClassName("row4")[0];
            }
            let div = document.createElement('div');
            let rec = "rect student" + i;
            div.setAttribute('class', rec);

            if (i < goodNum) {
                this.students.push("top student");
                div.style.backgroundColor = '#808080';
            } else if (i >= goodNum && i < (goodNum + middleNum)) {
                this.students.push("middle level student");
                div.style.backgroundColor = '#A9A9A9';
            } else {
                this.students.push("bottom student");
                div.style.backgroundColor = '#D3D3D3';
            }
            parent.appendChild(div);
        }
    }

    begin() {
        this.addObserver();
        this.notify();
        setTimeout(function () {
            document.getElementById("mode").innerHTML = "下课啦";
        },4000 * this.classSize + 2000);
    }

    /*for loop to do the following things:
    first random get the student index to answer the question 
    pass the student index and current i  to the setTimeout function 
    where we do all the output shown on the html file  */
    notify() {
        for (let i = 1; i <= this.classSize; i++) {
            let chance = Math.floor(Math.random() * 10) + 1;
            const topRange = Math.floor(this.classSize / 4);
            const middleRange = topRange + Math.floor(this.classSize / 2);
            let index = 0;
            if (chance <= 6) {
                index = Math.floor(Math.random() * topRange);
            } else if (chance > 6 && chance <= 9) {
                index = Math.floor(Math.random() * (middleRange - topRange)) + topRange;
            } else if (chance === 10) {
                index = Math.floor(Math.random() * (this.classSize - middleRange)) + middleRange;
            }
            doesSetTimeOut(i, this.students[index], index);
        }
    }

}

/*  manage when the student seat turns red 
    question shown from teacher & feedback from teacher 
    summary printed on the canvas */
function doesSetTimeOut(i, student, index) {
    let chosen = document.getElementsByClassName("student" + index)[0];
    let color = chosen.style.backgroundColor;
    let output = `Question ${i}: XXX, the answer of `;
    let feedback = " ";
    if (student === "top student") {
        output += 'top student X: xxx, feedback: great !!! ';
        feedback = "great";
    } else if (student === "middle level student") {
        output += 'middle level student X : xxx, feedback: good!';
        feedback = "good";
    } else if (student === "bottom student") {
        output += 'bottom student X: xxx, feedback: not bad.';
        feedback = "not bad";
    }

    let result = document.getElementById("result");
    let para = document.createElement('p');
    let node = document.createTextNode(output);
    para.appendChild(node);

    setTimeout(function () { document.getElementById("mode").innerHTML = "问题 " + i; },
        1100 + 4000 * (i - 1))
    setTimeout(function () {
        chosen.style.backgroundColor = "red";
    }, 1500 + 4000 * (i - 1));
    setTimeout(function () {
        chosen.style.backgroundColor = color;
    }, 2500 + 4000 * (i - 1));
    setTimeout(function () {
        document.getElementById("mode").innerHTML = feedback
    }, 2800 + 4000 * (i - 1));
    setTimeout(function () {
        document.getElementById("mode").innerHTML = " ";
    }, 3800 + 4000 * (i - 1));
    setTimeout(function () {
        result.appendChild(para);
    }, 4000 * i);
}

function newClass() {
    let m = document.getElementById("classSize").value;
    removeElement();

    if ((parseFloat(m) - parseInt(m)) === 0 && m > 0) {
        const lecture = new Lecture(m);
        lecture.begin();
    } else {
        alert("please enter a positive integer for m");
        return;
    }

}

/*  clean out the students seat and summary from the last game 
 */
function removeElement() {
    let node = document.getElementsByClassName("row");
    for (let i = 0; i < node.length; i++) {
        let curr = node[i];
        while (curr.firstChild) {
            curr.removeChild(curr.firstChild);
        }
    }

    let context = document.getElementById("result");
    while (context.firstChild) {
        context.removeChild(context.firstChild);
    }

    document.getElementById("mode").innerHTML = "休息";

}

