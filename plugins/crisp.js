export default () => {
  window.$crisp = []
  window.CRISP_WEBSITE_ID = "ce5dc1a7-845a-4e39-a87a-17cdaca1f061"

  const crisp = function() {
    var d = document
    var s = d.createElement("script")

    s.src = "https://client.crisp.chat/l.js"
    s.async = 1
    d.getElementsByTagName("head")[0].appendChild(s)
  }
  
  crisp()
}
