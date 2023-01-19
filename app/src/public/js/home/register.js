"use strict"

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    name = document.querySelector("#name"),
    email = document.querySelector("#email"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) {
        return alert("아이디를 입력해 주세요");
    }

    if (!psword.value) {
        return alert("비밀번호를 입력해 주세요");
    } else if (psword.value != confirmPsword.value) {
        return alert("비밀번호가 일치하지 않습니다");
    } else if (psword.value.length < 4) {
        return alert("비밀번호는 4자 이상 입력해야 합니다.");
    }

    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        email: email.value
    }

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
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
            console.error(new Error("회원가입 중 에러 발생"));
        });
}