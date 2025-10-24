// export function Header(){
export function Header() {
  const header = document.createElement("header");
  header.className = "w-full";
  header.innerHTML = `
     <header class="flex flex-row-reverse justify-between w-full p-3 ">
        <svg id="menu" class="flex sm:hidden"
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        <nav class="hidden sm:flex">
          <ul class="flex gap-12">
            <a href="#">ویژگی ها</a>
            <a href="#">سرفصل ها </a>
            <a href="#">قیمت ها </a>
            <a href="#">نظرات</a>
            <a class='bg-[ #786FFFff]' href="#">شروع یادگیری</a>
          </ul>
        </nav>
        <div class="bg-blue-600 p-2 rounded-2xl">Learnora</div>
      </header>
    
    `;
  return header;
}

// export default Header();
