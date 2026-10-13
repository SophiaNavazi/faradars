"use strict";
const loginEl = document.querySelector(".login");
const loginForm = document.querySelector(".login>form");
const inpLoginForm = document.querySelector(".login>form>input");
const otpEl = document.querySelector(".otp");
const otpForm = document.querySelector(".otp>form");
const inpOtpForm = document.querySelector(".otp>form>input");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("https://faradars.org/api/client/v1/auth/otp", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        mobile: inpLoginForm.value,
        digits: 5,
        platforms: "web",
        source: "faradars",
        recaptcha_token: "",
      }),
    });
    const data = await res.json();
    if (!data?.status) {
      return alert(data?.message);
    }
    alert(data?.message);
    loginEl.classList.remove("active");
    otpEl.classList.add("active");
  } catch (error) {
    console.log(error);
  }
});
otpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(
      "https://faradars.org/api/client/v1/auth/otp/validate",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: inpLoginForm.value,
          code: inpOtpForm.value,
          source: "faradars",
          device_name: "mobile - Android 15 - Website - Chrome 152.0.0.0",
          recaptcha_token: "",
        }),
      },
    );
    const data = await res.json();
    if (!data?.status) {
      return alert(data?.message);
    }
    alert(data?.message);
    window.location.pathname = "/index.html";
  } catch (error) {
    console.log(error);
  }
});
