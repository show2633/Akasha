"use strict"

const logoutBtn = document.querySelector("#logout-button");

if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
    console.log(logoutBtn.innerHTML);
}

function logout() {

    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그아웃 중 에러 발생");
        })
}