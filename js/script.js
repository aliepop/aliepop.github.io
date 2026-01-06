console.log("Website Media Pembelajaran Kecerdasan Buatan siap digunakan");
function toggleMateri(element) {
    const body = element.nextElementSibling;
    const icon = element.querySelector("span");

    if (body.style.display === "block") {
        body.style.display = "none";
        icon.textContent = "➕";
    } else {
        body.style.display = "block";
        icon.textContent = "➖";
    }
}

window.materi = {
    1: {
        judul: "Pertemuan 1",
        subjudul: "Pengantar Kecerdasan Buatan",
        gambar: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800",
        isi: `Kecerdasan Buatan (Artificial Intelligence/AI) adalah cabang ilmu komputer yang berfokus pada pembuatan sistem yang dapat meniru kecerdasan manusia. AI digunakan dalam berbagai bidang seperti kesehatan, transportasi, pendidikan, dan industri. Contoh penerapan AI adalah asisten virtual, sistem rekomendasi, dan pengenalan wajah.`
    },
    2: {
        judul: "Pertemuan 2",
        subjudul: "Intelligent Agent",
        gambar: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800",
        isi: `Intelligent Agent adalah entitas yang dapat mengamati lingkungan melalui sensor dan bertindak menggunakan aktuator untuk mencapai tujuan tertentu. Contoh agent: robot pembersih, chatbot, dan sistem rekomendasi. Agent dapat bersifat sederhana (refleks) atau kompleks (berbasis tujuan dan pembelajaran).`
    },
    3: {
        judul: "Pertemuan 3",
        subjudul: "Search Algorithm",
        gambar: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
        isi: `Algoritma pencarian digunakan untuk menemukan solusi dari suatu permasalahan. Contoh algoritma pencarian: Breadth First Search (BFS), Depth First Search (DFS), dan A*. Algoritma ini banyak digunakan dalam pemecahan masalah seperti pencarian rute, puzzle, dan game.`
    },
    4: {
        judul: "Pertemuan 4",
        subjudul: "Machine Learning Dasar",
        gambar: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
        isi: `Machine Learning adalah cabang AI yang memungkinkan komputer belajar dari data tanpa diprogram secara eksplisit. Tipe utama machine learning: supervised, unsupervised, dan reinforcement learning. Contoh aplikasi: prediksi harga, klasifikasi gambar, dan deteksi spam.`
    },
    5: {
        judul: "Pertemuan 5",
        subjudul: "Representasi Pengetahuan",
        gambar: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800",
        isi: `Representasi pengetahuan adalah cara AI menyimpan dan memanipulasi informasi tentang dunia. Contoh: logika proposisional, jaringan semantik, frame, dan ontologi. Representasi yang baik memudahkan sistem AI dalam penalaran dan pengambilan keputusan.`
    },
    6: {
        judul: "Pertemuan 6",
        subjudul: "Natural Language Processing",
        gambar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
        isi: `Natural Language Processing (NLP) adalah bidang AI yang mempelajari interaksi antara komputer dan bahasa manusia. Contoh aplikasi NLP: penerjemah otomatis, chatbot, analisis sentimen, dan pengenalan suara.`
    }
};

// Load header and footer partials dynamically (works when opening via a server)
function loadPartial(selector, url) {
    fetch(url).then(r => {
        if (!r.ok) throw new Error('Network error');
        return r.text();
    }).then(html => {
        const container = document.querySelector(selector);
        if (container) container.innerHTML = html;
    }).catch(err => {
        // silently fail for file:// environment
        // console.warn('Could not load partial:', url, err);
    });
}

// Inject header/footer into pages
document.addEventListener('DOMContentLoaded', function() {
    loadPartial('body > header', 'partials/header.html');
    loadPartial('body > footer', 'partials/footer.html');

    // mobile nav toggle
    document.body.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'navToggle') {
            const nav = document.getElementById('siteNav');
            if (nav) nav.classList.toggle('show');
        }
    });

    // populate detail page if id param present
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (window.materi && id && materi[id]) {
        const m = materi[id];
        const elJudul = document.getElementById('judul');
        const elSub = document.getElementById('subjudul');
        const elGambar = document.getElementById('gambar');
        const elIsi = document.getElementById('isiMateri');
        if (elJudul) elJudul.innerText = m.judul;
        if (elSub) elSub.innerText = m.subjudul;
        if (elGambar) elGambar.src = m.gambar;
        if (elIsi) elIsi.innerText = m.isi;
    }
});
