export function Main() {
  const main = document.createElement("div");
  main.className = "w-full";
  main.innerHTML = `
     <div class="flex p-5 justify-between w-full">
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-4">
            <h1 class="text-2xl">یادگیری React از صفر تا پیشرفته</h1>
            <h3>
              با Learnora، پروژه محور React را یاد بگیرید و مهارت های حرفه ای
              کسب کنید.
            </h3>
          </div>
          <div class="flex gap-3">
            <button class="bg-[#6C63FD] p-3 rounded-xl text-amber-50 text-xs">
              شروع رایگان
            </button>
            <button
              class="border border-[#6C63FD] rounded-lg text-[#6C63FD] p-3 text-xs"
            >
              مشاهده سرفصل ها
            </button>
          </div>
        </div>
        <div class="flex flex-col shadow-md p-5 rounded-xl gap-5">
          <h1 class="font-bold text-right">ثبت نام رایگان</h1>
          <div class="flex flex-col gap-0.5">
          <input
            class="border border-black rounded-md w-[50%]"
            type="text"text
            placeholder="ایمیل شما"
          />
          <button class="bg-[#6C63FD] rounded-xl p-2 text-amber-50 text-xs">
            شروع کنید
          </button>
        </div>
      </div>
    
    `;
  return main;
}
