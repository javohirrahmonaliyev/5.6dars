const enInp = document.querySelector("#en-inp");
const uzInp = document.querySelector("#uz-inp");
const saveBtn = document.querySelector(".save-btn");
const translateList = document.querySelector(".translate-list");
const checkBtn = document.querySelector(".check-btn");
const delBtn = document.querySelector(".del-btn");
const ulEl = document.querySelector(".translate-list");
enInp.addEventListener("keyup", (e) => {
  // console.log(e.target.value);
});
uzInp.addEventListener("keyup", (e) => {
  // console.log(e.target.value);
});

let num = 0;
saveBtn.addEventListener("click", () => {
  if (enInp.textContent === uzInp.textContent) {
    num++;
    translateList.innerHTML += `
    <li class="translate-item">
    <span class="num">${num}</span>
    <p class="en-word">${enInp.value}</p>
    <p class="uz-word">${uzInp.value}</p>
    <svg
      class="check-btn"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
    >
      <path
        d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"
        fill="currentColor"
      ></path>
    </svg>
    <svg
      class="del-btn"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
    >
      <path
        d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM13.4142 13.9997L15.182 12.232L13.7678 10.8178L12 12.5855L10.2322 10.8178L8.81802 12.232L10.5858 13.9997L8.81802 15.7675L10.2322 17.1817L12 15.4139L13.7678 17.1817L15.182 15.7675L13.4142 13.9997ZM9 4V6H15V4H9Z"
        fill="currentColor"
      ></path>
    </svg>
  </li>
    `;
  }
});

// <li class="translate-item">
//           <span class="num">1</span>
//           <p class="en-word">asds</p>
//           <p class="uz-word">asds</p>
//           <svg
//             class="go-back-btn"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             width="32"
//             height="32"
//           >
//             <path
//               d="M8 7V11L2 6L8 1V5H13C17.4183 5 21 8.58172 21 13C21 17.4183 17.4183 21 13 21H4V19H13C16.3137 19 19 16.3137 19 13C19 9.68629 16.3137 7 13 7H8Z"
//               fill="currentColor"
//             ></path>
//           </svg>
//           <svg
//             class="del-btn"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             width="32"
//             height="32"
//           >
//             <path
//               d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM13.4142 13.9997L15.182 12.232L13.7678 10.8178L12 12.5855L10.2322 10.8178L8.81802 12.232L10.5858 13.9997L8.81802 15.7675L10.2322 17.1817L12 15.4139L13.7678 17.1817L15.182 15.7675L13.4142 13.9997ZM9 4V6H15V4H9Z"
//               fill="currentColor"
//             ></path>
//           </svg>
//         </li>
