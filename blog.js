let blogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById('input-blog-title').value;
  let content = document.getElementById('input-blog-content').value;
  let image = document.getElementById('input-blog-image');
  var checkBoxes = document.querySelectorAll('input[type="checkbox"]'); // get all the check box

  let result = [];

  checkBoxes.forEach(test => { // loop all the checkbox item
    if (test.checked) {  //if the check box is checked
        let data = {    // create an object
            item: test.value,
            selected: test.checked
        }
        result.push(data); //stored the objects to result array
    }
})

  console.log(result)
  image = URL.createObjectURL(image.files[0]);

  console.log(image);
  if (title == '' || image == '' || content == '') {
    return alert('All input fields must be not empty');
  }

  document.getElementById('input-blog-title').value = '';
  document.getElementById('input-blog-content').value = '';

  let blog = {
    author: 'Dion Novalino',
    title: title,
    image: image,
    result: result,
    content: content,
    postedAt: new Date(),
  };

  console.log(blog)

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  let blogContainer = document.getElementById('contents');

  var html = '';
  

  for (let i = 0; i < blogs.length; i++) {
    html += `
      <div id="${i}" class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${blogs[i].title}</a
              >
            </h1>
            <div class="detail-blog-content"> Categories : `;
  
            for (let c = 0; c < blogs[i].result.length; c++){
              html += blogs[i].result[c].item + ', '
              console.log(blogs[i].result[c])
            }
            html += `
              
            </div>

            <div>${blogs[i].postedAt} | ${blogs[i].author} </div>


            <p>
              ${blogs[i].content}
            </p>


            <div id="paragraph"></div>
            <div class="sosmed-list">
              <a href="https://www.linkedin.com/in/dion-novalino-54b859214/"
                ><img src="img/linked.png" alt="facebook" target="_blank"
              /></a>
              <a href="https://www.instagram.com/dionnovalino/"
                ><img style="width: 50px;" src="img/instagram.png" alt="twitter" target="_blank"
              /></a>
              <a href="https://www.facebook.com/dion.novalino"
                ><img style="width: 35px;" src="img/facebook.png" alt="instagram" target="_blank"
              /></a>
              <a href="https://twitter.com/netikids"
                ><img style="width: 35px; margin-left: 8px;" src="img/twitter.png" alt="mail" target="_blank"
              /></a>
            </div>
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
          </div>
      </div>
      `;
  }
  blogContainer.innerHTML = html;
}
