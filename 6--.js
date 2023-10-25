// 轮播图
const data = [
  { url: `images/im1.jpg`, title: `鹿晗三巡演唱会来啦！谁不看谁吃亏` },
  { url: `images/im2.jpg`, title: `院人全年无休计划实施，烧脑狼人杀看起来` },
  { url: `images/im3.jpg`, title: `猜猜我们是谁` },
  { url: `images/im4.jpg`, title: `小老地终于回归，抢先看舞台` },
  { url: `images/im5.jpg`, title: `bjt入驻b站！！！` },
  { url: `images/im6.jpg`, title: `美神降临，全程直播` },
]

const img = document.querySelector(`.wrapper img`)
const footer = document.querySelector(`.footer`)
const p = document.querySelector(`.footer p`)



// 右侧按钮
const next = document.querySelector(`.next`)
let i = 0
// 全局变量
next.addEventListener(`click`, function () {
  i++
  if (i >= data.length) {
    i = 0
  }
  toggle()
})

// 左侧
const pre = document.querySelector(`.pre`)
pre.addEventListener(`click`, function () {
  i--
  if (i < 0) {
    i = data.length - 1
  }
  toggle()
})

// 该函数必须放后面，因为i
function toggle() {
  img.src = data[i].url
  p.innerHTML = data[i].title

  // 圆点变化
  document.querySelector(`.photo .active`).classList.remove(`active`)
  document.querySelector(`.photo li:nth-child(${i + 1})`).classList.add(`active`)

}

// 定时器
let time = setInterval(function () {
  next.click()
}, 2000)

const zuo = document.querySelector(`.zuo`)
zuo.addEventListener(`mouseenter`, function () {
  clearInterval(time)
})

zuo.addEventListener(`mouseleave`, function () {
  if (time) clearInterval(time)
  time = setInterval(function () {
    next.click()
  }, 2000)
})



// 视频播放
const video = document.querySelectorAll(`video`)
for (let i = 0; i < video.length; i++) {
  video[i].addEventListener(`mouseenter`, function () {
    video[i].play()
    // video.autoplay = `ture`
    // video.muted = `ture`
    // console.log(video.muted)
  })

  video[i].addEventListener(`mouseleave`, function () {
    video[i].pause()
  })
}