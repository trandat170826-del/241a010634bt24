
// =====================================
// BÀI TẬP 24 - ĐÈN KÉO QUÂN
// Sinh viên: Trần Gia Đạt
// =====================================

const lamp = document.getElementById("lamp");
const statusText = document.getElementById("status");

const pauseBtn = document.getElementById("pauseBtn");
const playBtn = document.getElementById("playBtn");

// Kiểm tra trạng thái dừng
let isPaused = false;

// Hàm dừng đèn
function pauseLamp() {

    isPaused = true;

    lamp.classList.add("paused");

    statusText.textContent = "● Đèn đang tạm dừng";
    statusText.classList.add("paused-status");

}

// Hàm tiếp tục quay
function playLamp() {

    isPaused = false;

    lamp.classList.remove("paused");

    statusText.textContent = "● Đèn đang quay";
    statusText.classList.remove("paused-status");

}

// Rê chuột vào đèn thì dừng
lamp.addEventListener("mouseenter", function () {

    pauseLamp();

});

// Rê chuột ra khỏi đèn thì quay tiếp
lamp.addEventListener("mouseleave", function () {

    playLamp();

});

// Nút tạm dừng
pauseBtn.addEventListener("click", function () {

    pauseLamp();

});

// Nút tiếp tục
playBtn.addEventListener("click", function () {

    playLamp();

});

// =====================================
// HIỆU ỨNG TRÊN THIẾT BỊ CẢM ỨNG
// =====================================

lamp.addEventListener("touchstart", function () {

    pauseLamp();

}, { passive: true });

lamp.addEventListener("touchend", function () {

    playLamp();

}, { passive: true });

