// js/main.js
async function loadComponent(id, file) {
    try {
        let response = await fetch(file);
        if (response.ok) {
            document.getElementById(id).innerHTML = await response.text();
        }
    } catch (error) {
        console.error("Lỗi load component: ", error);
    }
}

// Tự động load các thành phần chung khi trang web được mở
document.addEventListener("DOMContentLoaded", function () {
    // Chỉ load nếu phần tử tồn tại trên trang
    if (document.getElementById('banner-area')) loadComponent('banner-area', 'banner.html');
    if (document.getElementById('sidebar-area')) loadComponent('sidebar-area', 'sidebar.html');
    if (document.getElementById('footer-area')) loadComponent('footer-area', 'footer.html');
});