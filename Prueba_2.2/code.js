const button = document.querySelector(".btn");
const container = document.querySelector(".grid-container");

button.addEventListener("click",()=>{
    let secureConfirm = confirm("Are you sure about your choice?");
    if (secureConfirm) {
        document.body.removeChild(button);
        let elements = document.querySelectorAll(".week");
        let weekSelected = document.querySelectorAll(".week-selected");
        for (element in elements) {
            week = elements[element];
            week.innerHTML = weekSelected[element].value;
        }
    }
});

const students = [{
    Name: "Daniel García",
    Email: "danielenrique902@gmail.com",
    Subject: "Evaluation Educational"
},
{
    Name: "Alix Sanquiz",
    Email: "alixsanquiz@gmail.com",
    Subject: "Mathematics"
},
{
    Name: "Oliver Rodriguez",
    Email: "sebgaymer777@gmail.com",
    Subject: "Drugs"
},

{
    Name: "Arfilio Totono",
    Email: "arfilioariana@gmail.com",
    Subject: "Drawing 1"
},
{
    Name: "Roberto Amarillo",
    Email: "amarillo.losplatanos@gmail.com",
    Subject: "French 2"
}];

let htmlCode = "";

for (student in students) {
    let data = students[student];
    let name = data["Name"];
    let email = data["Email"];
    let subject = data["Subject"];
    htmlCode+= `  
    <div class="grid-item name">${name}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item subject">${subject}</div>
        <div class="grid-item week">
            <select class="week-selected">
                <option value="week 1">Week 1</option>
                <option value="week 2">Week 2</option>
            </select>
    </div>
    `;
}

container.innerHTML = htmlCode;
