// submit -> addBlog -> push ke blogs
// object mobil => ban, warna, merk, kapasistas mesin 
// array showRoom => mobil,mobil,mobil
let blogs = []

function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image")

    image = URL.createObjectURL(image.files[0])

    let blog = {
        title: title,
        content: content,
        image: image
    }

    blogs.push(blog)

    console.table(blogs)
    // console.log(`Panjang array : ${blogs.length}`);

    let testInnerHTML = document.getElementById("test")

    // testInnerHTML.innerHTML = `
    //     <h1>${blog.title}</h1>
    //     <p>${blog.content}</p>
    //     <img src="${blog.image}"/>
    //     `

    renderBlog()
}

function renderBlog() {

    let containerBlog = document.getElementById("contents")
    containerBlog.innerHTML = firstBlogContent()

    for (let i = 0; i < blogs.length; i++) {
        containerBlog.innerHTML += `
       <div class="blog-list-item">
       <div class="blog-image">
         <img src="${blogs[i].image}" alt="" />
       </div>
       <div class="blog-content">
         <div class="btn-group">
           <button class="btn-edit">Edit Post</button>
           <button class="btn-post">Post Blog</button>
         </div>
         <h1>
           <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
         </h1>
         <div class="detail-blog-content">
           12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
         </div>
         <p>
           ${blogs[i].content}
         </p>
         <div style="text-align: right;">
           <span style="font-size: 15px; color: grey;">1 hour ago</span>
         </div>
       </div>
     </div>
       `
    }
}

function firstBlogContent() {
    return `
    <div class="blog-list-item">
        <div class="blog-image">
          <img src="assets/img/blog-img.png" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank">Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a>
          </h1>
          <div class="detail-blog-content">
            12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
          </div>
          <p>
            Ketimpangan sumber daya manusia (SDM) di sektor digital masih
            menjadi isu yang belum terpecahkan. Berdasarkan penelitian
            ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
            meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Quam, molestiae
            numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
            eligendi debitis?
          </p>
          <div style="text-align: right;">
            <span style="font-size: 15px; color: grey;">1 hour ago</span>
          </div>
        </div>
      </div>
    `
}