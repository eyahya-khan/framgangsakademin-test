const displayHeaderInfo   = document.getElementById('displayHeaderInfo')
const displaySectionInfo  = document.getElementById('displaySectionInfo')

const url = 'https://fa-frontend-code-test.herokuapp.com/getdata'


fetch(url)
.then(res => res.json())
.then(data =>{
    //console.log(data)

    const title     = data.data.heroBanner.title
    const titleInfo = data.data.heroBanner.paragraph
    const vodeoUrl  = data.data.heroBanner.videoUrl
    const profiles  = data.data.profiles

displayHeaderInfo.innerHTML =`
<div class="headerTitle-info">
<h1>${title}</h1>
<p>${titleInfo}</p>
</div>
<div class="headerVideo">
<video width="200" controls>
  <source src=${vodeoUrl} type="video/mp4">
</video>
</div>
`

profiles.forEach(item => {
    //console.log(item.firstName)

    const firstName = item.firstName
    const lastName  = item.lastName
    const expertise = item.expertise
    const imageUrl  = item.imgUrl

    displaySectionInfo.innerHTML += `
    <div>
    <div><img src=${imageUrl} alt=${firstName} ${lastName} width="300" height="300"/></div>
    <div>
    <h2>${firstName} ${lastName}</h2>
    <p>${expertise}</p>
    </div>
    </div>
    `
});

})