function loadscript (src) {
  let script = document.createElement('script')
  script.src = src
  document.head.append(script)
}
loadscript('/my/script.js')

function loadScript (src, callback) {
  let script = document.createElement('script')
  script.src = src

  script.onload = () => callback(script)

  document.head.append(script)

  loadScript('/my/script,js', function(script){
      alert(`Cool the ${script.src} is loaded, lets load one more`);

      loadScript('my/script2.js', function(script) {
          alert(`Cool, the second script loaded `)

          loadScript('my/script3.js', function(script){
              alert()
          })
      })
  })

  //errors

  funtion loadScript(src, callback) {
      let script = document.createElement('script');
      script.src = src 

      script.onLoad = () => callback(null, script);
      script.onerror = () => callback(new Error(`Script load error for ${src}`))

      document.head.append(script)
  }

  loadScript('my/script.js', function(error, script) {
      if(error) {
          //handle error
      } else {
          //script loaded 
      }
  })


//promises

let promise = new Promise(function(resolve, reject {
    setTimeout(() => resolve("done"), 1000)
}))

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    alert(result) //1
    return result * 2
}).then(function(result) {
    alert(result ) //2 
    return result * 2 
}).then(function(result) {
    alert(result) //4
    return result * 2
})


loadscript("article/promise-chaining/exp-1")
.then(function(script){
    return loadscript("second/article")
}).then(function(script){
    return loadscript("third/one")
}).then(function(){
    one();
    two();
    three()
})


let promise = fetch(url)

response.text()

fetch(url)
.then(function(respnse){
    return response.json()
})
.then(function(text) {
    alert(text)
})

fetch("/asticle/promise-chaining/user-json")
//load it as json
.then(response => response.json())
//make a requat to github
.then(user => fetch('https//api.github.com/user/${user.name}'))
//load response ad json
.then(response => response.json())
//show avatar image (githubUser.avatar_url) for 3 seconds 
.then(githubUser => {
    let img = document.createElement('img')
    img.src = githubUser.avatar.url;
    img.className = "promise-avatart-example";
    document.body.append(img);

    setTimeout(() => img.remove(), 3000)
})


fetch('/article/promise-chaining/user.json')
.then(response => response.json())
.then(user => fetch(`https//api.github.com/user/${user.name}`))
.then(res => res.json())
.then(githubUser => new Promise(function(resolve, reject){
    let img = document.createElement('img')
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example'
    document.body.append('img')

    setTimeout(() => {
        img.remove()
        resolve(githubUser)
    }, 3000)
}))
.then(githubUser => alert(`finished showing ${githubUser.name}`));

function loadJson(url){
    return fetch(url)
        .then(response => response.json());
}

function loadGithubUser(name){
    return fetch(`https://api.github.com/users/${name}`)
}

function showAvatar(githubUser){
    return new Promise(function(resolve, reject){
        let img = document.createElement('img')
        img.src = githubUser.avatar_url;
        img.clasName= "promise avatar example";
        document.body.append(ing);

        setTimeout(() => {
            img.remove()
            resolve(githubUser)
        }, 3000)
    })
}

loadJson('article/promise-chaining/user.json')
.then(user => loadGithubUser(user.name))
.then(showAvatar)
.then(githubUser => alert(  ))

//errors 

fetch('https://no-such-server.blabla'')